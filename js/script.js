$(document).ready(function () {
    $("#wedo").hide();
    $("#wedo1").hide();
    $(".toggle1 ,.toggle2").click(function () {
        $("#wedo1").toggle();
        $(".toggle1").toggle();
    });
    $(".toggle3 , .toggle4").click(function () {
        $("#wedo1").toggle();
        $(".toggle3").toggle();
    });
});