var countUp = function (max, multiple) {
  var digits = [];
  for (var index = multiple; index <= max; index += multiple) {
    digits.push(index);
  }
  return digits;
}

var toString = function (array) {
  var stringResult = "";
  array.forEach(function (digit) {
    stringResult += digit + ", ";
  });
  return stringResult.slice(0, -2);
}

$(document).ready(function () {
  $("#number-input form").submit(function (event) {
    event.preventDefault();
    var max = parseInt($("#max").val());
    var multiple = parseInt($("#multiple").val());
    $("#count-list").text(toString(countUp(max, multiple)));
    $(".result").show();
  });
});