import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import "dotenv/config";

// Import server setup
import { createServer } from "http";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tRPC API routes
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// Serve static files from dist
app.use(express.static("dist"));

// SPA fallback - serve index.html for all routes
app.get("*", (req, res) => {
  res.sendFile("dist/index.html");
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
