$(document).ready(function () {
    $("#navimg").click(function () {
        $('#menuModal').modal('show');
        $("#menuModal").css({
            opacity: 0.95
        });
    });
});

 $(document).scroll(function () {
    var $nav = $(".homenav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 750);
}); 