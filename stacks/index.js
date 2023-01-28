import { StorageStack } from "./StorageStack";
import { ApiStack }  from "./ApiStack";

const  main = (app) => {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack);
}

export default main;