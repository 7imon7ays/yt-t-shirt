(function () {
  var styleOptions = $(".style-option");

  $("input[type='radio']").on("change", function(e) {
    var selectedStyle = $(e.target).val();
    changeStyle(selectedStyle);
  });

  function changeStyle (selectedStyle) {
    var activeStyleLink = styleOptions.filter("link[rel='stylesheet']")[0],
        selectedStyleLink = styleOptions.filter("." + selectedStyle)[0];

    activeStyleLink.rel = "";
    selectedStyleLink.rel = "stylesheet";
  }
})();
