module.exports = function() {
  $.gulp.task('svg', () => {
      return $.gulp.src('./src/static/img/svg/*.svg')
          .pipe($.load.svgmin({
              js2svg: {
                  pretty: true
              }
          }))
          .pipe($.load.cheerio({
              run: function($) {
                  $('[fill]').removeAttr('fill');
                  $('[stroke]').removeAttr('stroke');
                  $('[style]').removeAttr('style');
              },
              parserOptions: { xmlMode: true }
          }))
          .pipe($.load.replace('&gt;', '>'))
          .pipe($.load.svgSprite({
              mode: {
                  symbol: {
                      sprite: "sprite.svg"
                  }
              }
          }))
          .pipe($.gulp.dest('./app/img/svg/'));
  });
};


// module.export = function () {
//   $.gulp.task('svg', () => {
//     return $.gulp.src('./src/static/img/svg/*.svg')
//       .pipe($.gp.svgmin({
//         js2svg: {
//           pretty: true
//         }
//       }))
//       .pipe($.gp.cheerio({
//         run: function ($) {
//           $('[fill').removeAttr('fill');
//           $('[stroke]').removeAttr('stroke');
//           $('[style]').removeAttr('style');
//         },
//         parserOption: {xmlMode: true}
//       }))
//       .pipe($.gp.replace('&gt;', '>'))
//       .pipe($.gp.svgSprite({
//         mode: {
//           symbol: {
//             sprite: "sprite.svg"
//           }
//         }
//       }))
//       .pipe($.gulp.dest('./build/img/svg/'))
//   });
// };