document.addEventListener('DOMContentLoaded', function() {
    let guzik = document.querySelector(".script_button");
    guzik.addEventListener('click', function() {
      func();
    });
  
    function func() {
      let div = document.querySelector("#nav_bar");
      if (div.style.display == "flex") {
        div.style.display = "none";
      } else {
        div.style.display = "flex";
      }  
    }
  });
  