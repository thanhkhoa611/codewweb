var header_menu = document.getElementById('header')

var menu_bar = document.getElementById('menu-bar')
var height_header = header_menu.clientHeight;

menu_bar.onclick = function() {
    var close = header_menu.clientHeight === height_header;
    if (close)
        header_menu.style.height = 'auto'
    else
        header_menu.style.height = null
}