window.onload = function () {
    ShowHeader();
    ShowPage('Home');
};

function ShowPage(page) {
    $('main').load('guide_files/html/' + page + '.html');
}

function ShowHeader() {
    if ($('header').children().length <= 0) {
        $('header').load('guide_files/html/Header.html');
    }
}