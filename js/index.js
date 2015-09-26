var numerals = ['I','V','X','L','C','D','M'];

function isEven(n) {
    return n % 2 == 0;
}

function decrement(str) {
    var arr = str.split(''),
        result = '';
    for (var i = 0; i < arr.length; i++) {
        var n = numerals.indexOf(arr[i]);
        var next = numerals.indexOf(arr[i + 1]);
        var count;
        var diff = next - n;
        switch(diff) {
            case 2:
                count = 9;
                break;
            case 1:
                count = 4;
                break;
            default:
                count = 1;
        }

        for (var j = 0; j < count; j++) {
            result += arr[i];
        }
        if (count > 1) i++;
    }
    return result;
}

function increment(str) {
    var result = '',
        numeralCounts = _.zipObject(_.map(numerals, function(x) { return [x, 0] } )),
        i, n;
    for (i = 0; i < str.length; i++) {
        numeralCounts[str[i]]++;
    }

    for (i = 0; i < numerals.length; i++) {
        n = numeralCounts[numerals[i]];
        if (isEven(i)) {
            if (n > 9) {
                numeralCounts[numerals[i+2]] += Math.floor(n / 10);
                numeralCounts[numerals[i]] = n = n % 10;
            }
            if (n > 4 && n < 9) {
                numeralCounts[numerals[i+1]] += Math.floor(n / 5);
                numeralCounts[numerals[i]] = n % 5;
            }
        } else {
            if (n > 1) {
                numeralCounts[numerals[i+1]] += Math.floor(n / 2);
                numeralCounts[numerals[i]] = n % 2;
            }
        }
    }

    for (i = numerals.length - 1; i >= 0; i--) {
        n = numeralCounts[numerals[i]];
        if (isEven(i) && n == 9) {
            result += numerals[i] + numerals[i + 2];
        } else if (isEven(i) && n == 4) {
            result += numerals[i] + numerals[i + 1];
        } else {
            for (var j = 0; j < n; j++) {
                result += numerals[i];
            }
        }
    }
    return result;
}

function add(x, y) {
    return increment(decrement(x) + decrement(y));
}
