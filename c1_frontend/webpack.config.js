// For our css modules these will be locally scopedconst
CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    importLoaders: 2,
    camelCase: true,
    sourceMap: false // turned off as causes delay
  }
}

// For our normal CSS files we would like them globally scopedconst
CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: 'global',
    importLoaders: 2,
    camelCase: true,
    sourceMap: false // turned off as causes delay
  }
}

// Our PostCSSLoader
const autoprefixer = require('autoprefixer')
const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: false, // turned off as causes delay
    plugins: () => [
      autoprefixer({
        browser: [
          '> 1%',
          'ie >= 8',
          'edge >= 15',
          'ie_mob >= 10',
          'ff >= 45',
          'chrome >= 45',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 4',
          'bb >= 10'
        ]
      })
    ]
  }
}

// Standard style loader (prod and dev covered here)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader

module: {
  rules: [
    {
      test: /\.(sa|sc|c)ss$/,
      exclude: /\.module\.(sa|sc|c)ss$/,
      use: [styleLoader, CSSLoader, PostCSSLoader, 'sass-loader']
    },
    {
      test: /\.module\.(sa|sc|c)ss$/,
      use: [styleLoader, CSSModuleLoader, PostCSSLoader, 'sass-loader']
    }
  ]
}
