//add on click function for menu system on mobile
$(".pm-menu-btn").on('click', function () {
    $(".pm-menu-btn").toggleClass('active');
    $("#mySidenav").toggleClass('open');
    $("body").toggleClass('bodyopen');
});
