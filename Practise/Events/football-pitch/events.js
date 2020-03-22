
$("body").on("click", function (event) {
    $("img").css("left", event.clientX + 'px');
    $("img").css("top", event.clientX + 'px');
})