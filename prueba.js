

function xQuestion() {
  document.getElementsByClassName("formulary")[0].style.display = "block";
  return true;
}

function xMiddle() {
  document.getElementsByClassName("middle")[0].style.display = "block";
  return true;
}

function hover(option) {
  document.getElementsByClassName(
    "option-button button-" + option
  )[0].onmouseover = function () {
    document.getElementsByClassName(
      "option-content-" + option
    )[0].style.display = "block";
    document.getElementsByClassName("option-content-" + option)[0].style.width =
      "calc(82vw - 20vh)";
  };

  document.getElementsByClassName(
    "option-content-" + option
  )[0].onmouseover = function () {
    document.getElementsByClassName(
      "option-content-" + option
    )[0].style.display = "block";
    document.getElementsByClassName("option-content-" + option)[0].style.width =
      "calc(82vw - 20vh)";
  };

  document.getElementsByClassName(
    "option-button button-" + option
  )[0].onmouseout = function () {
    document.getElementsByClassName(
      "option-content-" + option
    )[0].style.display = "none";
    document.getElementsByClassName("option-content-" + option)[0].style.width =
      "0";
  };

  document.getElementsByClassName(
    "option-content-" + option
  )[0].onmouseout = function () {
    document.getElementsByClassName(
      "option-content-" + option
    )[0].style.display = "none";
    document.getElementsByClassName("option-content-" + option)[0].style.width =
      "0";
  };
}


$(document).ready(function(){

  

  if (window.matchMedia("(orientation: landscape)").matches) {
    hover('amazonas');
    hover('caqueta');
    hover('deforestacion');
    hover('servicios');
    hover('patrimonio');
    hover('conservacion');
  }

  //Reemplaza el botón de enviar
  document.getElementById("icon-send-observa").onclick = function () {
    document.getElementById("input-send-observa").click();
  };
  document.getElementById("icon-send-sumate").onclick = function () {
    document.getElementById("input-send-sumate").click();
  };

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  var modal2 = document.getElementById("myModal2");
  var btn2 = document.getElementById("myBtn2");
  var span2 = document.getElementsByClassName("close")[1];

  var modal3 = document.getElementById("myModal3");
  var btn3 = document.getElementById("myBtn3");
  var span3 = document.getElementsByClassName("close")[2];

  btn.onclick = function () {
    modal.style.display = "block";
  };
  btn2.onclick = function () {
    modal2.style.display = "block";
  };
  btn3.onclick = function () {
    modal3.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
  span2.onclick = function () {
    modal2.style.display = "none";
  };
  span3.onclick = function () {
    modal3.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    }
  };

  var showMiddle = false;
  var showQuestion = false;

  window.addEventListener("scroll", function (event) {
    if (!showMiddle) {
      var scroll = this.scrollY;
      var height =
        document.getElementsByClassName("map_title")[0].offsetTop - 900;
      if (scroll > height) {
        showMiddle = xMiddle();
      }
    }

    if (!showQuestion) {
      var scroll = this.scrollY;
      var height =
        document.getElementsByClassName("question-ref")[0].offsetTop - 200;
      console.log(scroll + ">" + height);
      if (scroll > height) {
        showQuestion = xQuestion();
      }
    }
  });

  document.getElementsByClassName("button-amazonas")[0].onclick = function () {
    optionSelect("amazonas");
  };
  document.getElementsByClassName("button-caqueta")[0].onclick = function () {
    optionSelect("caqueta");
  };
  document.getElementsByClassName(
    "button-patrimonio"
  )[0].onclick = function () {
    optionSelect("patrimonio");
  };
  document.getElementsByClassName(
    "button-deforestacion"
  )[0].onclick = function () {
    optionSelect("deforestacion");
  };
  document.getElementsByClassName("button-servicios")[0].onclick = function () {
    optionSelect("servicios");
  };
  document.getElementsByClassName(
    "button-conservacion"
  )[0].onclick = function () {
    optionSelect("conservacion");
  };

  function optionSelect(option) {
    var statusContent = document.getElementsByClassName(
      "option-content-" + option
    )[0].style.display;
    if (statusContent == "none") {
      var x = document.getElementsByClassName("option-content");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "0%";
      }
      document.getElementsByClassName(
        "option-content-" + option
      )[0].style.width = "calc(82vw - 20vh)";

      var y = document.getElementsByClassName("option-button");
      var z;
      for (z = 0; z < y.length; z++) {
        y[z].style.display = "none";
      }

      document.getElementsByClassName(
        "option-content-" + option
      )[0].style.display = "block";
      document.getElementsByClassName("button-" + option)[0].style.display =
        "block";
    } else {
      var y = document.getElementsByClassName("option-button");
      var z;
      for (z = 0; z < y.length; z++) {
        y[z].style.display = "block";
      }

      document.getElementsByClassName(
        "option-content-" + option
      )[0].style.display = "none";
    }
  }


  // var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  $( document ).ready(function() {
     $(".map-list").click(
       function() {
         $("audio").not(this).each(function(index, audio) {
         audio.pause();
       });
       }
   );

  //  if(is_safari){
    //  alert("!safari");
     $(".details").mouseleave(
       function() {
         $("audio").not(this).each(function(index, audio) {
         audio.pause();
       });
       }
     );
    // }
});


});


