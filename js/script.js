
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function myFunction2(){
  document.getElementById("myDropdown2").classList.toggle("show2");
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function showGeo() {
    document.getElementById("geo").classList.toggle("showgeo");
}

function showEco() {
    document.getElementById("eco").classList.toggle("showeco");
}

function showCiv() {
    document.getElementById("civ").classList.toggle("showciv");
}

function showHis() {
    document.getElementById("his").classList.toggle("showhis");
}

function showChe() {
  document.getElementById("che").classList.toggle("showche");
}

function showPhy() {
  document.getElementById("phy").classList.toggle("showphy");
}

function showMath() {
  document.getElementById("math").classList.toggle("showmath");
}
