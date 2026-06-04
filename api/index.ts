import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { default: server } = await import("../dist/server/server.js");
  const url = new URL(req.url || "/", `https://${req.headers.host}`);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers as Record<string, string>,
    body: ["GET", "HEAD"].includes(req.method || "") ? undefined : req,
  });
  const response = await server.fetch(request);
  
  // デバッグ：全ヘッダーをログ出力
  console.log("Response status:", response.status);
  response.headers.forEach((value: string, key: string) => {
    console.log(`Header: ${key} = ${value}`);
  });
  
  res.statusCode = response.status;
  response.headers.forEach((value: string, key: string) => {
    if (key.toLowerCase() !== "www-authenticate") {
      res.setHeader(key, value);
    }
  });
  const body = await response.text();
  res.end(body);
}