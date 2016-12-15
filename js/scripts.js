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
    if ((max && multiple) && (max > 0 && multiple > 0) && (max > multiple)) {
      $("#count-list").text(toString(countUp(max, multiple)));
      $(".result").show();
    } else {
      if (!max || max < 0) {
        $("#max-group").addClass("has-error");
        $("#max-help").text("Please enter a valid, non-negative max.");
      }
      if (!multiple || multiple < 0) {
        $("#multiple-group").addClass("has-error");
        $("#multiple-help").text("Please enter a valid, non-negative multiple.");
      }
      if (max < multiple) {
        $("#max-group").addClass("has-error");
        $("#max-help").text("Please enter a max that is greater than the multiple!");
      }
    }
    
  });
});