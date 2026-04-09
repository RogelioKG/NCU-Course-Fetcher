import process from 'node:process'

const rawEnv = {
  API_TOKEN: process.env.API_TOKEN,
  API_URL: process.env.API_URL,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const

for (const [key, value] of Object.entries(rawEnv)) {
  if (value === undefined || value === '') {
    throw new Error(`Environment variable missing or empty: ${key}`)
  }
}

export const env = rawEnv as Record<keyof typeof rawEnv, string>
