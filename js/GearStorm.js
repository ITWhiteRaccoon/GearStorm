$(function () {
    ShowHeader();
    RenderTimeStyle();
});

function RenderTimeStyle() {
    $('.fade').removeClass('no-opacity');
}

function ShowHeader() {
    if ($('header').children().length <= 0) {
        $('header').innerHTML = ('Header.html');
    }
}
