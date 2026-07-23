import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export const createClient = async () => {
  // Pure admin client that bypasses RLS
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
