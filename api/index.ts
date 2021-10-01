import { VercelRequest, VercelResponse } from '@vercel/node'
import hazel from 'hazel-server'

export default (req: VercelRequest, res: VercelResponse) => {
  try {
    hazel(req, res)
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}
