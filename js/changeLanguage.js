"use strict";

localStorage.setItem("lang", localStorage.getItem("lang") || "en");
if (localStorage.getItem("lang") === 'ru') {
    $('#flag-logo').attr("src", "img/icons8-russian-federation-48.png");
    toggleLanguage();
}

$('#flag-btn').click( () => {
    if (localStorage.getItem("lang") === 'en') {
        $('#flag-logo').attr("src","img/icons8-russian-federation-48.png");
        localStorage.setItem("lang", "ru");
        toggleLanguage();
    } else {
        $('#flag-logo').attr("src","img/icons8-england-48.png");
        localStorage.setItem("lang", "en");
        toggleLanguage();
    }
} );

function toggleLanguage() {
    $('.ru-answer').toggleClass('dn');
    $('.ru-q').toggleClass('dn');
    $('.ru-a').toggleClass('dn');

    $('.en-answer').toggleClass('dn');
    $('.en-q').toggleClass('dn');
    $('.en-a').toggleClass('dn');
}