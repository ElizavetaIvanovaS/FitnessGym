$(".menu-icon").on("click", function() {
  $(".navigation-mobile ul").toggle();
});

(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

jQuery(document).ready(function() {
  $("ul.tabs__caption").on("click", "li:not(.active)", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.tabs__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
});
