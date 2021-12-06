function reset_tab(tab){
    var tabs = document.getElementsByClassName("tab");

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.background = '#f5bc00';
        tabs[i].style.color = "#00653d";
    }

    var active = document.getElementById(tab);
    active.getElement.style.background = "#00653d";
    active.getElement.style.color = "#f5bc00";
}