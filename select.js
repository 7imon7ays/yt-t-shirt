(function () {
  var styleOptionLinks = $(".style-option"),
      styleOptionList = $("ul#style-options");

  createOptionsList();

  $("input[type='radio']").on("change", function(e) {
    var selectedStyle = $(e.target).val();
    changeStyle(selectedStyle);
  });

  function changeStyle (selectedStyle) {
    var activeStyleLink = styleOptionLinks.filter("link[rel='stylesheet']")[0],
        selectedStyleLink = styleOptionLinks.filter("." + selectedStyle)[0];

    activeStyleLink.rel = "";
    selectedStyleLink.rel = "stylesheet";
  }

  function createOptionsList () {
    var styleInputs = $.map(styleOptionLinks, function(style, idx) {
      var styleName = $(style).data('name'),
          styleNamePretty = _formatStyleName(styleName);
          input = $("<input>"),
          label = $("<label>");

      input.attr({
        type: 'radio', name: 'stylesheet', value: styleName, id: styleName
      });
      label.attr('for', styleName).text(styleNamePretty);

      if (idx === 0) input.attr('checked', true);

      return $("<li>").append(input).append(label)[0];
    });

    styleOptionList.append(styleInputs);
  }

  function _formatStyleName(styleName) {
    var words = styleName.split(/[^\w]/);
    return $.map(words, function(word) {
      return word.charAt(0)
        .toUpperCase() + word.substring(1);
    }).join(" ");
  }
})();
