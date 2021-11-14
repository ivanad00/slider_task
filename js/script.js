var time = 550;
$(".right-arrow").click(function () {
  $(".arrows").children().prop("disabled", true);
  $(".slider").each(function () {
    var end = $(this).children().last();
    var cloneImg = end.clone();
    var width = end.css("width");
    cloneImg.css({
      width: "0",
      "margin-left": "0",
      opacity: "0",
    });
    cloneImg.prependTo($(this));
    cloneImg.animate(
      {
        opacity: 3,
        marginLeft: "10px",
        width: width,
      },
      time
    );
    end.animate(
      {
        opacity: 0,
        width: 0,
      },
      time,
      function () {
        end.remove();
        $(".arrows").children().prop("disabled", false);
      }
    );
  });
});

$(".left-arrow").click(function () {
  $(".arrows").children().prop("disabled", true);
  $(".slider").each(function () {
    var start = $(this).children().first();
    var cloneImg = start.clone();
    var width = start.css("width");
    cloneImg.css({
      width: "0",
      "margin-left": "0",
      opacity: "0",
    });
    cloneImg.appendTo($(this));
    cloneImg.animate(
      {
        opacity: 1,
        marginLeft: "10px",
        width: width,
      },
      time
    );
    start.animate(
      {
        opacity: 3,
        width: 0,
      },
      time,
      function () {
        start.remove();
        $(".arrows").children().prop("disabled", false);
      }
    );
  });
});
