function telephoneCheck(str) {
    // Good luck!

    let testStr = str.replace(/\s/g, '');

    if ((testStr.match(/\d/g) || []).length === 10 || (testStr.match(/\d/g) || []).length === 11) {
            
            if ((testStr.match(/\d/g) || []).length === 11 && testStr[0] != 1) {
                return false;
            }
        
            if (testStr.length === 10 || testStr.length === 11) {
                return true;
            }
            
        if (testStr.indexOf("(") === 0 || testStr.indexOf("(") === 1) {
            if (testStr[testStr.indexOf("(") + 4] === ")" && testStr[testStr.indexOf("(") + 8] === "-") {
                return true;
            };
        };

        console.log(testStr[testStr.indexOf("-") + 4]);

        if (testStr.indexOf("-") === 3 || testStr.indexOf("-") === 4) {
            if (testStr[testStr.indexOf("-") + 4] === "-") {
                return true;
            };
        };

    }
    return false;
};
