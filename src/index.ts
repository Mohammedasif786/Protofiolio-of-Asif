import { serve } from "bun";
import index from "./index.html";
import ConnectDB from "./backend/db/client";
import clientSchema from "./backend/schema/Client.Shema";
import mongoose from "mongoose";

await ConnectDB();

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

const handle = (fn: (req: any) => Promise<Response>) => async (req: any) => {
  try {
    return await fn(req);
  } catch (err: any) {
    if (err.name === "ValidationError")
      return Response.json({ error: err.message }, { status: 400 });
    if (err.code === 11000)
      return Response.json({ error: "Email already exists" }, { status: 409 });
    if (err.name === "CastError")
      return Response.json({ error: "Invalid id" }, { status: 400 });
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
};

const port = Number(Bun.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: ${Bun.env.PORT}`);
}

const server = Bun.serve({
  port,
  routes: {
    "/": index,
    "/DevClients": index,
    "/api/users": {
      GET: handle(async () => {
        const user = await Client.find();
        return Response.json(user);
      }),
      POST: handle(async (req) => {
        const body = await req.json();
        const user = await Client.create(body);
        return Response.json(user, { status: 201 });
      }),
    },
  },
});

console.log(`Listening on ${server.url}`);
