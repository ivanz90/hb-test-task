const webpack = require('webpack-stream');

let scriptsPath = {
    input: "src/static/js/",
    output: "app/js"
};

let appLibs = 'app/js/libs';

let jsLibs = [
    // 'node_modules/jquery/dist/jquery.min.js',
    'src/static/js/libs/*.js'
];

let isDev = true;
let isProd = !isDev;

let webConfig = {
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  mode: isDev ? 'development' :  'production',
  devtool: isDev ? 'eval-source-map' : 'none'
};

module.exports = function() {
  $.gulp.task('libsJS:dev', function () {
      return $.gulp.src(jsLibs)
      // .pipe($.load.concat('libs.min.js'))
      .pipe($.gulp.dest(appLibs))
  });

  $.gulp.task('libsJS:build', function () {
      return $.gulp.src(jsLibs)
      // .pipe($.load.concat('libs.min.js'))
      .pipe($.load.uglify())
      .pipe($.gulp.dest(scriptsPath.output))
  });

  $.gulp.task('js:dev', function () {
      return $.gulp.src([scriptsPath.input + 'main.js',
      '!' + scriptsPath.input + 'libs.min.js'])
      .pipe(webpack(webConfig))
      .pipe($.gulp.dest(scriptsPath.output))
      .pipe($.bs.reload({
          stream:true
      }));
  });

  $.gulp.task('js:build', function () {
      return $.gulp.src([scriptsPath.input + 'main.js',
      '!' + scriptsPath.input + 'libs.min.js'])
      // .pipe($.load.concat('main.min.js'))
      .pipe(webpack(webConfig))
      .pipe($.gulp.dest(scriptsPath.output))
  });
}


/*

Often used libs

JQuery: 'node_modules/jquery/dist/jquery.min.js'

JQuery plugins: 

Slick Slider: 'node_modules/slick-carousel/slick/slick.js'

*/ 