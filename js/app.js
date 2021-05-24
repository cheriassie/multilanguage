const allLang = ['en', 'cz', 'ru']
if (localStorage.getItem('language')) {
    $('#main-language').html(localStorage.getItem('language'))
}

function changeURLLanguage(language) {
    localStorage.setItem('language', language)
    location.href = window.location.pathname + '#' + language;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#cz';
        location.reload();
    }

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();


function reload() {
    document.location.reload();
}