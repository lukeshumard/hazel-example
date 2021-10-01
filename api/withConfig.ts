import { VercelRequest, VercelResponse } from '@vercel/node'
import hazel from 'hazel-server'

function hazelWithConfig(req, res) {
  const {
    INTERVAL: interval,
    ACCOUNT: account,
    REPOSITORY: repository,
    TOKEN: token,
    URL: PRIVATE_BASE_URL,
    VERCEL_URL
  } = process.env

  const url = VERCEL_URL || PRIVATE_BASE_URL

  const config = {
    interval,
    account,
    repository,
    token,
    url
  }

  return hazel(config)(req, res)
}

export default (req: VercelRequest, res: VercelResponse) => {
  try {
    hazelWithConfig(req, res)
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}
