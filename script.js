$(document).ready(function(e){
    // toggle menu side bar script
    $(".side-bar-close-toggle a").click(function () {
      $(".wrapper").toggleClass("left-side-bar");
    });

    $("#showPopup").click(function () { 
      $(".alert-popup").toggle();
    });
});