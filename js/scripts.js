//business logic
let jsCount = 0;
let csCount = 0;
let rubyCount = 0;

let tally = (answer) => {
  if (answer === 'HTML') {
    jsCount++;
  } else if (answer === 'Python') {
    csCount++;
  } else if (answer === 'Javascript') {
    rubyCount++;
  }
}

$(document).ready(function(){
  $('.btn1').click(function(){
    $("p#intro").hide();
    $("#first").show();
    $("#second").hide();
    $("#third").hide();
    $("#fourth").hide();
    $("#fifth").hide();
  });
});

$(document).ready(function(){
  $('.btn2').click(function(){
      $("p#intro").hide();
      $("#first").hide();
      $("#second").show();
      $("#third").hide();
      $("#fourth").hide();
      $("#fifth").hide();
  });
});

$(document).ready(function(){
  $('.btn3').click(function(){
    $("p#intro").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").show();
    $("#fourth").hide();
    $("#fifth").hide();
  });
});

$(document).ready(function(){
  $('.btn4').click(function(){
    $("p#intro").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
    $("#fourth").show();
    $("#fifth").hide();
  });
});

$(document).ready(function(){
  $('.btn5').click(function(){
    $("p#intro").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
    $("#fourth").hide();
    $("#fifth").show();
  });
});

$(document).ready(function(){
  $('.btn6').click(function(){
    $("p#intro").hide();
    $("#first").hide();
    $("#second").hide();
    $("#third").hide();
    $("#fourth").hide();
    $("#fifth").hide();
    $("#results").show();
  });
});