// File with Language class
// getVal returns the translated value by the key


function Language(lang) {
    
    var __construct = function () {
        if (eval('typeof ' + "'" + lang + "'") == _undefined) {
            lang = _defaultLanguage;
        }

        return;
    }()

    this.getVal = function (key, defaultString) {
        var retVal = eval('eval(' + _cookieName + ').' + key);

        if (typeof retVal != _undefined) {
            return retVal;
        } else {
            if (typeof defaultString != _undefined) {
                return defaultString;
            } else {
                return eval(_defaultLanguage + '.' + key);
            }
        }
    }
}