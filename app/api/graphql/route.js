import { server } from "./graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next"
const handler = startServerAndCreateNextHandler(server);
export {  handler as POST, handler as GET }
