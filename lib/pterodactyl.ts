const PTERO_URL = process.env.PTERODACTYL_URL
const PTERO_KEY = process.env.PTERODACTYL_API_KEY

export async function getPteroUser(email: string) {
  const res = await fetch(`${PTERO_URL}/api/application/users?filter[email]=${email}`, {
    headers: {
      "Authorization": `Bearer ${PTERO_KEY}`,
      "Accept": "application/json",
    }
  })
  const data = await res.json()
  return data.data.length > 0 ? data.data[0] : null
}

export async function createPteroUser(email: string, username: string, firstName: string, lastName: string) {
  const res = await fetch(`${PTERO_URL}/api/application/users`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${PTERO_KEY}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      first_name: firstName,
      last_name: lastName,
    })
  })
  return await res.json()
}

export async function createPteroServer(userId: number, eggId: number, nestId: number, name: string, memory: number, disk: number, cpu: number) {
  const res = await fetch(`${PTERO_URL}/api/application/servers`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${PTERO_KEY}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name,
      user: userId,
      egg: eggId,
      nest: nestId,
      docker_image: "ghcr.io/pterodactyl/yolks:java_17", // Example image
      startup: "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
      limits: {
        memory,
        swap: 0,
        disk,
        io: 500,
        cpu,
      },
      environment: {
        SERVER_JARFILE: "server.jar",
      },
      feature_limits: {
        databases: 1,
        backups: 1,
      },
      deploy: {
        locations: [1],
        dedicated_ip: false,
        port_range: [],
      }
    })
  })
  return await res.json()
}
