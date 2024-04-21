/*
 * @Author: zgl
 * @Description: TODO 初试 Next.js 新建 API 功能
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);
  res.status(200).json({ name: "John Doe" });
}
