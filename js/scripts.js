function add(value1, value2, value3, value4, value5) {
  return value1 + value2 + value3 + value4 + value5;
}

$(document).ready(function() {
  $("form#answer").submit(function() {
    e.preventDefault();
    let value1 = parseInt($("#answer1").val());
    let value2 = parseInt($("#answer2").val());
    let value3 = parseInt($("#answer3").val());
    let value4 = parseInt($("#answer4").val());
    let value5 = parseInt($("#answer5").val());
    const total = $("input:radio[name=total]:checked").val();
    
    let results;
    if (total >= 24 && total <= 35) {
      $("HTML").show();
    }
    if (total >= 35 && total <= 55) {
      $("Javascript").show();
    }
    if (total >= 55 && total <= 76) {
      $("Python").show();
    }
    $("#output").text(result);
  });
});