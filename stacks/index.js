import { StorageStack } from "./StorageStack";

 const main = (app) => {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack);
}

export default main;