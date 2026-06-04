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
  
  res.statusCode = response.status;
  response.headers.forEach((value: string, key: string) => {
    res.setHeader(key, value);
  });
  
  const body = await response.text();
  res.end(body);
}