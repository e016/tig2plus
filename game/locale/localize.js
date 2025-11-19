var LANG = localStorage.getItem('lang')
if(LANG == null) {
    LANG = ''
    localStorage.setItem('lang', '')
}
var Translator = {}
function localize(x) {
    if(LANG == ""){
        return x
    }
    if(!(LANG in Translator)) {
        return LANG
    }
    var language = Translator[LANG]
    if(x in language) {
        return language[x]
    }
    return x
}
