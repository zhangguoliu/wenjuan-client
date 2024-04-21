/*
 * @Author: zgl
 * @Description: TODO 初试 Next.js 新建 API 功能
 */
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    name: "zgl",
    age: 18,
    desc: "ok nice",
  });
}
