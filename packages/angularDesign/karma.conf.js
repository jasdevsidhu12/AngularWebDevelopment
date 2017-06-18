var webpack = require('webpack');
var path = require('path');
module.exports = function(config) {
    var coveragePercentage = 0;
    var _config = {
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: './karma-test-shim.js', watched: true }
        ],
        preprocessors: {
            './karma-test-shim.js': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['.js', '.ts', '.scss'],
                alias: {
                    _resources: path.resolve(__dirname, 'resources')
                }
            },
            module: {
                rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        { loader: 'awesome-typescript-loader', options: { tsconfig:  __dirname + '/tsconfig.json' } } ,
                        'angular2-template-loader'
                        ],
                    exclude: 'node_modules'
                },
                 {
                    test: /\.scss$/,
                    loaders: ['raw-loader','sass-loader']
                },
                {
                    enforce: 'post',
                    test: /\.ts$/,
                    loader: 'istanbul-instrumenter-loader',
                    exclude: [ 'node_modules', /\.spec\.ts$/ ]
                },
                ]
            },
            plugins: [
                new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/, './src/test/unit', // location of your src
                {} // a map of your routes
                )
            ]
        },
        webpackMiddleware: {
            stats: 'error-only'
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['progress', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['html', 'text-summary'],
            fixWebpackSourcePaths: true,
            dir: path.join(__dirname, 'src/test/out/unit/coverage'),
            html: {
                // outputs the report in ./coverage/html
                subdir: 'html'
            },
            thresholds: {
                emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
                global: { // thresholds for all files
                    statements: coveragePercentage,
                    lines: coveragePercentage,
                    branches: coveragePercentage,
                    functions: coveragePercentage
                },
                each: { // thresholds per file
                    statements: coveragePercentage,
                    lines: coveragePercentage,
                    branches: coveragePercentage,
                    functions: coveragePercentage
                }
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'], // browsers: ['Chrome'] or ['PhantomJS'] or ['chrome_headless']
        customLaunchers: {
            chrome_headless: {
                base: 'Chrome',
                flags: ['--headless', '--disable-gpu', '--window-size=800x600']
            }
        },
        singleRun: true
    };
    config.set(_config);
}

// if I want to run hot I need set autoWatch: true and singleRun: false