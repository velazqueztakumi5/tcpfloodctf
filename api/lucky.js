export default function handler(req, res) {
  const FLAG = process.env.CTF_FLAG;
  const roll = Math.floor(Math.random() * 1) + 1;
  const result = roll === 1 ? FLAG : randomString(32);
  res.setHeader("Content-Type", "text/plain");
  res.send(result);
}

function randomString(len) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: len }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
