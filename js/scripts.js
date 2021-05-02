//business logic
let HTMLCount = 0;
let PythonCount = 0;
let JavascriptCount = 0;

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

if (result == 0) {HTMLCount = "It looks like your best option would be HTML!"};
    if (result == 25) {JavascriptCount = "You know the basics already, you should dive right into Javascript!"};
    if (result == 50) {PythonCount = "You smarty pants! Python is your next step!"};





function add(score1, score2, score3, score4, score5) {
      return score1 + score2 + score3 + score4 + score5;
    }
    
$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      console.log("button clicked.") //debug
      let score1 = parseInt($("#color").val());
      let score2 = parseInt($("#food").val());
      let score3 = parseInt($("#country").val());
      let score4 = parseInt($("#movie").val());    
      let score5 = parseInt($("#sport").val());
      let finalScore = add(score1, score2, score3, score4, score5);
    
      console.log(score1); //debug
      console.log(score2); //debug
      console.log(score3);
      console.log(score4);
      console.log(score5);
      console.log(finalScore); //debug
          
      if (finalScore >= 1 && finalScore <= 8) {
        $(".c_sharp").show();
      }
      if (finalScore >= 9 && finalScore <= 12) {
        $(".go").show();
      }
      if (finalScore >= 13 && finalScore <= 17) {
        $(".javascript").show();
      }
      if (finalScore >= 18 && finalScore <= 20) {
        $(".ruby").show();
      }
      if (finalScore >= 21 && finalScore <= 25) {
        $(".rust").show();
      }
      if (finalScore >= 26 && finalScore <= 30) {
        $(".swift").show();
      }
    
    
  });
});