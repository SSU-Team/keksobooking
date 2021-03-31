const toFixedNoRounding = (x, n) => {
    const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
    const a = x.toString().match(reg)[0];
    const dot = a.indexOf(".");
    
    if (dot === -1) {
        return a + "." + "0".repeat(n);
    }
    
    const b = n - (a.length - dot) + 1;

    return parseFloat(b > 0 ? (a + "0".repeat(b)) : a);
} 
  

export const getRandomNumber = (a, b, k = 0) => {
    if (a === b ) return a;

    if (a > b) {
        let buff = a;
        a = b;
        b = buff;
    }

    return toFixedNoRounding( (a + (Math.random() * (b - a))) , k);
}

export const getRandomSubarray = (array) => {
    const randLength = getRandomNumber(0, array.length, 0);
    const subArray = [];

    for (let i = 0; i < randLength; i++) {
        subArray[i] = array.splice( getRandomNumber(0, array.length, 0), 1 )[0];
    }

    return subArray;
}