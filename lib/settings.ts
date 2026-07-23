import { createClient } from './supabase'

export async function getSetting(key: string, defaultValue: any = null) {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', key)
      .single()
      
    if (error) {
      if (error.code === 'PGRST116' || error.message?.includes('does not exist')) {
        // PGRST116 is no rows, 'does not exist' handles case where table settings hasn't been created yet
        return getFileFallbackSetting(key, defaultValue)
      }
      throw error
    }
    return data.value
  } catch (err) {
    return getFileFallbackSetting(key, defaultValue)
  }
}

export async function setSetting(key: string, value: any) {
  let dbError = null
  try {
    const supabase = await createClient()
    const { error } = await supabase
      .from('settings')
      .upsert({ key, value, updated_at: new Date().toISOString() })
      
    if (error) {
      dbError = error
      throw error
    }
    // Also mirror to file fallback for local config consistency if possible
    try {
      saveFileFallbackSetting(key, value)
    } catch (e) {
      // ignore local file save errors if db succeeded
    }
  } catch (err) {
    dbError = err
    saveFileFallbackSetting(key, value)
  }
}

// Fallback functions using dynamic require to prevent bundling errors in browser/Edge
function getFileFallbackSetting(key: string, defaultValue: any) {
  try {
    const fs = require('fs')
    const path = require('path')
    const filePath = path.join(process.cwd(), 'app/config/sections/settings.json')
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const json = JSON.parse(fileContent)
      return json[key] !== undefined ? json[key] : defaultValue
    }
  } catch (err) {
    console.error('File fallback read error:', err)
  }
  return defaultValue
}

function saveFileFallbackSetting(key: string, value: any) {
  const fs = require('fs')
  const path = require('path')
  const filePath = path.join(process.cwd(), 'app/config/sections/settings.json')
  
  const dirPath = path.dirname(filePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  let json: any = {}
  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      json = JSON.parse(fileContent)
    } catch (e) {
      json = {}
    }
  }
  json[key] = value
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
}
