window.onload = function () {
    ShowHeader();
};

function ShowHeader() {
    if ($('header').children().length <= 0) {
        $('header').load('Header.html');
    }
}