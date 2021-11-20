"use strict";

$(document).ready(() => {
  var time = 600;
  $(".right-arrow").click(function () {
    $(".right-arrow, .left-arrow").prop("disabled", true);
    $(".slider").each(function () {
      var end = $(this).children("img").last();
      var cloneImg = end.clone();
      var width = end.css("width");
      cloneImg.css({
        width: 0,
        marginLeft: 0,
        opacity: 0,
      });
      cloneImg.prependTo($(this));
      cloneImg.animate(
        {
          opacity: 1,
          marginLeft: "10px",
          width: width,
        },
        time
      );
      end.animate(
        {
          opacity: 0,
          width: 0,
          margin: 0,
        },
        time,
        function () {
          end.remove();
          $(".right-arrow, .left-arrow").prop("disabled", false);
        }
      );
    });
  });

  $(".left-arrow").click(function () {
    $(".right-arrow, .left-arrow").prop("disabled", true);
    $(".slider").each(function () {
      var start = $(this).children("img").first();
      var cloneImg = start.clone();
      var width = start.css("width");
      cloneImg.css({
        width: 0,
        marginLeft: 0,
        opacity: 0,
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
          opacity: 0,
          width: 0,
          margin: 0,
        },
        time,
        function () {
          start.remove();
          $(".right-arrow, .left-arrow").prop("disabled", false);
        }
      );
    });
  });
});
