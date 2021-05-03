

module.exports = {
    entry: {
      main: "./src/ts/index.ts",
      worker: "./src/ts/worker-scidown/worker.ts"
    },

    output: {
      filename: '[name].js'
    },

    cache: {
      type: 'filesystem'
    },

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            { 
                test: /\.less$/i, 
                use: [ 
                {
                  loader: 'style-loader', // creates style nodes from JS strings
                },
                {
                  loader: 'css-loader', // translates CSS into CommonJS
                },
                {
                  loader: 'less-loader', // compiles Less to CSS
                },
              ]
            },
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/},
            { test: /scidown-wasm\.wasm$/, loader: "file-loader" },
            { test: /\.md$/, loader: "file-loader" }
        ]
    }
}