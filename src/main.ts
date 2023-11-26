import ExpressAdapter from "./infra/http/express";
import swagger from "./infra/swagger";

import "dotenv/config";

const httpServer = new ExpressAdapter();
const PORT = 3333 || process.env.PORT;

swagger(httpServer.app);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
