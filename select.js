(function () {
  var $content = $("#content"),
      $styleOptionLinks = $(".style-option"),
      $styleOptionList = $("ul#style-options");

  createOptionsList();

  $("select").on("change", function(e) {
    var selectedStyle = $(e.target).val();
    changeStyle(selectedStyle);
  });

  $("#italic").on("change", function(e) {
    $content.toggleClass('italicized');
  });

  function changeStyle (selectedStyle) {
    var activeStyleLink = $styleOptionLinks.filter("link[rel='stylesheet']")[0],
        selectedStyleLink = $styleOptionLinks.filter("." + selectedStyle)[0];

    activeStyleLink.rel = "";
    selectedStyleLink.rel = "stylesheet";
  }

  function createOptionsList () {
    var $listItem = $("<li>"),
        $selectMenu = $("<select>");

    var styleOptions = $.map($styleOptionLinks, function(style, idx) {
      var styleName = $(style).data('name'),
          styleNamePretty = _formatStyleName(styleName);
          $option = $("<option>"),

      $option.attr({
        value: styleName, id: styleName
      });

      $option.text(styleNamePretty);
      if (idx === 0) $option.attr('selected', true);

      return $option;
    });

    $selectMenu.append(styleOptions);
    $listItem.append($selectMenu);
    $styleOptionList.append($listItem);
  }

  function _formatStyleName(styleName) {
    var words = styleName.split(/[^\w]/);
    return $.map(words, function(word) {
      return word.charAt(0)
        .toUpperCase() + word.substring(1);
    }).join(" ");
  }
})();
