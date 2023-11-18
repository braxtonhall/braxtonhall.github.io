import * as fs from "fs-extra";
import {buildStacks} from "./build-stacks";

const STATIC_DIR = "./static";
const BUILD_DIR = "./build";

const copyStaticFiles = () => fs.copy(STATIC_DIR, BUILD_DIR);

const cleanBuild = () => fs.remove(BUILD_DIR);

cleanBuild().then(copyStaticFiles).then(buildStacks).catch(console.error).finally(process.exit);
