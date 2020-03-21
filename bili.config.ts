import {Config} from "bili"

const config: Config = {
	input: {
		"pragmatic-streams": "./src/index.ts"
	},
	output: {
		format: ["cjs", "umd", "esm"],
		moduleName: "pragmatic-streams",
		sourceMap: true,
		sourceMapExcludeSources: false
	},
	bundleNodeModules: true,
	babel: {
		minimal: true,
		babelrc: false
	},
	extendConfig(config, {format}) {
		if (format === "umd") {
            config.output.minify = true
            config.output.fileName = "[name].umd.min.js"
		}
		if (format === "esm") {
			config.output.fileName = "[name].esm.js"
		}
		return config
	}
}

export default config
