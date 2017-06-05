document.addEventListener("DOMContentLoaded",function(){
  var classic = document.querySelector(".classic");
  var binary = document.querySelector(".binary");
  var allS2 = document.querySelectorAll(".s2");
  var allS1 = document.querySelectorAll(".s1");
  var allM1 = document.querySelectorAll(".m1");
  var allM2 = document.querySelectorAll(".m2");
  var allH2 = document.querySelectorAll(".h2");
  var allH1 = document.querySelectorAll(".h1");

  function classicDate(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(hours < 10){
      hours = "0"+hours;
    }
    if(minutes < 10){
      minutes = "0"+minutes;
    }
    if(seconds < 10){
      seconds = "0"+seconds;
    }
    classic.innerText = hours + ": " +minutes + ": " + seconds ;

  }
  setInterval(classicDate, 1000);

  function binaryWatch(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(hours < 10){
      hours = "0"+hours;
    }
    if(minutes < 10){
      minutes = "0"+minutes;
    };
    if(seconds < 10){
      seconds = "0"+seconds;
    };

    var sSeconds = String(seconds);
    var s1 = Number(sSeconds.slice(0,1)).toString(2);
    var s2 = Number(sSeconds.slice(1,2)).toString(2);

    //////////////saconds 1//////////////////////////

    if(s1 < 10){
      s1 = "00"+s1;
    }
    else if(s1 < 100){
      s1 = "0"+s1;
    }
    else{
      s1 = s1;
    }
    for (var i = allS1.length-1; i >= 0; i--) {
      var x = s1.slice(i,i+1);
      allS1[i].dataset.date = x;
      if(allS1[i].dataset.date == 1){
        allS1[i].style.backgroundColor = "#67c8ff";
      }
      else{
        allS1[i].style.backgroundColor = "orange";
      }
    }

    //////////////////seconds2/////////////////////////

    if(s2 < 10){
      s2 = "000"+s2;
    }
    else if(s2 < 100){
      s2 = "00"+s2;
    }
    else if(s2 < 1000){
      s2 = "0"+s2;
    }
    else{
      s2 = s2;
    }
    for (var i = allS2.length-1; i >= 0; i--) {
      var x = s2.slice(i,i+1);
      allS2[i].dataset.date = x;
      if(allS2[i].dataset.date == 1){
        allS2[i].style.backgroundColor = "#67c8ff";
      }
      else{
        allS2[i].style.backgroundColor = "orange";
      }
    }

    //////////////////minutes////////////////////

    var mMinutes = String(minutes);
    var m1 = Number(mMinutes.slice(0,1)).toString(2);
    var m2 = Number(mMinutes.slice(1,2)).toString(2);

    /////////////////minutes 1///////////////////

    if(m1 < 10){
      m1 = "00"+m1;
    }
    else if(m1 < 100){
      m1 = "0"+m1;
    }
    else{
      m1 = m1;
    }
    for (var i = allM1.length-1; i >= 0; i--) {
      var x = m1.slice(i,i+1);
      allM1[i].dataset.date = x;
      if(allM1[i].dataset.date == 1){
        allM1[i].style.backgroundColor = "#67c8ff";
      }
      else{
        allM1[i].style.backgroundColor = "orange";
      }
    }

    ///////////////minutes 2/////////////////////////

    if(m2 < 10){
      m2 = "000"+m2;
    }
    else if(m2 < 100){
      m2 = "00"+m2;
    }
    else if(m2 < 1000){
      m2 = "0"+m2;
    }
    else{
      m2 = m2;
    }
    for (var i = allM2.length-1; i >= 0; i--) {
      var x = m2.slice(i,i+1);
      allM2[i].dataset.date = x;
      if(allM2[i].dataset.date == 1){
        allM2[i].style.backgroundColor = "#67c8ff";
      }
      else{
        allM2[i].style.backgroundColor = "orange";
      }
    }

    //////////////////hours//////////////////////

    var hHours = String(hours);
    var h1 = Number(hHours.slice(0,1)).toString(2);
    var h2 = Number(hHours.slice(1,2)).toString(2);

    ////////////////hours 1//////////////////////

    if(h1 < 10){
      h1 = "0"+h1;
    }
    else{
      h1 = h1;
    }
    for (var i = allH1.length-1; i >= 0; i--) {
      var x = h1.slice(i,i+1);
      allH1[i].dataset.date = x;
      if(allH1[i].dataset.date == 1){
        allH1[i].style.backgroundColor = "#67c8ff";
      }
      else{
        allH1[i].style.backgroundColor = "orange";
      }
    }

    /////////////////hours 2/////////////////////////

    if(h2 < 10){
      h2 = "000"+h2;
    }
    else if(h2 < 100){
      h2 = "00"+h2;
    }
    else if(h2 < 1000){
      h2 = "0"+h2;
    }
    else{
      h2 = h2;
    }
    for (var i = allH2.length-1; i >= 0; i--) {
      var x = h2.slice(i,i+1);
      allH2[i].dataset.date = x;
      if(allH2[i].dataset.date == 1){
        allH2[i].style.backgroundColor = "#67c8ff";
      }
      else{
        allH2[i].style.backgroundColor = "orange";
      }
    }
  };//binaryWatch
  setInterval(binaryWatch,1000);
});//DOMContentLoaded
