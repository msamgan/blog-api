const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const argv = yargs(hideBin(process.argv)).argv
const fs = require("fs")
const path = require("path")

/**
 * Invokes the functions that create the files for the given module.
 * @param {string} prams - parameters for the module.
 * @returns None
 */
const _invoke = async (prams) => {
    // Check if the controller file exists already. if not, create it.
    let controllerFile = path.join(__dirname, "../controllers", prams.dir, `${prams.module}.controller.js`)
    let routeFile = path.join(__dirname, "../routes", prams.dir, `${prams.module}.js`)
    let logicFile = path.join(__dirname, "../logic", `${prams.module}.logic.js`)

    // Create HTTP file and response directory if not exist yet.
    let httpFile = path.join(__dirname, "../http", prams.dir, `${prams.module}.http`)
    let httpResponseDir = path.join(__dirname, "../http.response", prams.dir, `${prams.module}`)

    fs.writeFileSync(controllerFile, `// ${prams.module}.controller.js`)
    fs.writeFileSync(routeFile, `// ${prams.module}.route.js`)
    fs.writeFileSync(logicFile, `// ${prams.module}.logic.js`)
    fs.writeFileSync(httpFile, `// ${prams.module}.http`)
    fs.mkdirSync(httpResponseDir)
}

// node ./bin/make.module.files.js --dir=v1 --module=user
_invoke(argv)
