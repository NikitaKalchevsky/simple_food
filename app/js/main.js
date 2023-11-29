$(function () {
  $(".comment__slider").slick({
    dots: true,
    fade: true,
    appendArrows: $(".comment__box"),
  });
});

function svgSprites() {
  return src("images/ico/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "app/images/sprite.svg",
          },
        },
      })
    )
    .pipe(dest("app/images/ico"));
}
