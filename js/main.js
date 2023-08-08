(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  //countdown
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          `<div class="time-count"><span class="time">%D <span class="colon">:</span></span> <span class="title">days</span></div>
          <div class="time-count"><span class="time">%H <span class="colon">:</span></span> <span class="title">hour</span></div>
          <div class="time-count"><span class="time">%M <span class="colon">:</span></span> <span class="title">minute</span></div>
          <div class="time-count"><span class="time">%S <span class="colon">:</span></span> <span class="title">Second</span></div>`
        )
      );
    });
  });

  // dropzon
  // Dropzone.autoDiscover = true;

  // let myDropzone = new Dropzone("#my-awesome-dropzone");
  // myDropzone.on("addedfile", (file) => {
  //   console.log(`File added: ${file.name}`);
  // });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);

  // nice-select
  $(".nice-select").niceSelect();
});
