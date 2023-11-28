// $(function () {
//   var mixer = mixitup(".categories");
// });

function svgSprites() {
  return src("images/ico/*.svg") // выбираем в папке с иконками все файлы с расширением svg
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "app/images/sprite.svg", // указываем имя файла спрайта и путь
          },
        },
      })
    )
    .pipe(dest("app/images/ico")); // указываем, в какую папку поместить готовый файл спрайта
}
