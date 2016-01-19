function leapYear (year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
  return false;
  }
};

$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    var year = parseInt($("input#year").val());
    var validate = leapYear(year);
    $(".year").text(year)
    if (!validate) {
      $(".not").text("not");
    }
    else {
      $(".not").text("");
    }
    $("#result").show();
    event.preventDefault();
  });
});
