import { createTRPCRouter } from "~/server/api/trpc";
import { brandRouter } from "./routers/brand";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  brand: brandRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
