// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cookies = new Cookies(req, res)
  cookies.set('login', 'true')
  res.status(200).json({ name: 'John Doe' })
}
