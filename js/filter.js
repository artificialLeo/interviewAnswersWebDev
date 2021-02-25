"use strict";

const search = document.getElementById("search");
const reset = document.getElementById("reset-btn");
const answers = [...document.getElementsByClassName("card")];
const nav = [...document.getElementsByClassName('nav-item')];

const rq = [...document.getElementsByClassName("ru-q")];
const ra = [...document.getElementsByClassName("ru-a")];
const ea = [...document.getElementsByClassName("en-a")];
const eq = [...document.getElementsByClassName("en-q")];

const categories = ['web', 'javascript', 'typescript',
                    'graphql', 'mongodb', 'databases',
                    'sql', 'sql', 'java', 'oop', 'all'];

let currentCategory = 'all';

reset.onclick = () => {
    currentCategory = 'all';
    answers.forEach(i => i.classList.remove('dn'));
};

nav.forEach(i => i.onclick = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("nav-link")) {
        currentCategory = e.target.textContent.toLowerCase();
        answers.forEach(it => it.classList.remove('dn'));
        filtration();
    }
});

function filtration() {
    answers.forEach(i => {
        if (!i.classList.contains(currentCategory)) {
            i.classList.add('dn');
        }
    } );
}

search.oninput = () => {
    currentCategory = "all";
    answers.forEach(i => i.classList.remove('dn'));

    for (let i = 0; i < eq.length; i++) {
        if (
            !eq[i].innerText.toLowerCase().includes(search.value.toLowerCase()) &&
            !ea[i].innerText.toLowerCase().includes(search.value.toLowerCase()) &&
            !rq[i].innerText.toLowerCase().includes(search.value.toLowerCase()) &&
            !ra[i].innerText.toLowerCase().includes(search.value.toLowerCase())
        ) {
            answers[i].classList.add('dn');
        }
    }

    /*

    if (localStorage.getItem("lang") === "en") {
        for (let i = 0; i < eq.length; i++) {
            if (
                !eq[i].innerText.toLowerCase().includes(search.value.toLowerCase()) &&
                !ea[i].innerText.toLowerCase().includes(search.value.toLowerCase())
            ) {
                answers[i].classList.add('dn');
            }
        }

        if (localStorage.getItem("lang") === "ru") {
            for (let i = 0; i < eq.length; i++) {
                if (
                    !rq[i].innerText.toLowerCase().includes(search.value.toLowerCase()) &&
                    !ra[i].innerText.toLowerCase().includes(search.value.toLowerCase())
                ) {
                    answers[i].classList.add('dn');
                }
            }
        }
    }

    */

};

document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
        currentCategory = 'all';
        search.value = "";
        answers.forEach(i => i.classList.remove('dn'));
    } else if (event.code === 'Enter') {
        search.value = "";
    } else {
        search.focus();
    }
});