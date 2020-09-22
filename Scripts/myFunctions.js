// File with all used functions

// this function checks whether cookie exists or not
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;

        var end = document.cookie.indexOf(";", begin);
        
        if (end == -1) {
            end = dc.length;
        }
    }

    return decodeURI(dc.substring(begin + prefix.length, end));
} 

// function translates all DOM elements at once by iterating through them
function translateAll(translate) {
    var allDomElements = document.getElementsByTagName("*");

    for (var i = 0; i < allDomElements.length; i++) {
        var element = allDomElements[i];
        var key = element.getAttribute(_dataAttribute);

        if (key != null) {
            element.innerHTML = translate.getVal(key);
        }
    }
}