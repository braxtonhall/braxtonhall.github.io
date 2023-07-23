import * as fs from "fs-extra";

const STATIC_DIR = "./static";
const BUILD_DIR = "./build";

const copyStaticFiles = () => fs.copy(STATIC_DIR, BUILD_DIR);

copyStaticFiles().catch(console.error).finally(process.exit);
