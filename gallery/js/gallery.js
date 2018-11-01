$(function () {
    // Get the modal
    //var modal = document.getElementById('myModal');
    var modaljq = $("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    
    var modalimgjq = $("#img01");
   // var captionjq = $("#caption");
    $("#background_gallery img").click(function () {
        modaljq.show();
        modalimgjq.attr({ "src": $(this).attr("src") });
        //captionjq.html($(this).attr("alt"));
    });
  

    // Get the <span> element that closes the modal
    $(".close").click(function () {
        modaljq.hide();
    });

});