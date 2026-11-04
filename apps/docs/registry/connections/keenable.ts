import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.keenable.ai/mcp-public",
  description: "Keenable: search the web and fetch pages as clean markdown.",
  headers: () => ({
    "X-Keenable-Title": "eve",
    ...(process.env.KEENABLE_API_KEY ? { "X-API-Key": process.env.KEENABLE_API_KEY } : {}),
  }),
});
