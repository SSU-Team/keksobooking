export const getRandomFloat = (a, b, k) => {
    if (a === b ) return a;

    if (a > b) {
        let buff = a;
        a = b;
        b = buff;
    }

    return (a + (Math.random() * (b - a))).toFixed(k);
}

export const getRandomSubarray = (array) => {
    const randLength = Math.floor(Math.random() * array.length);
    const subArray = [];

    for (let i = 0; i < randLength; i++) {
        subArray[i] = array.splice( Math.floor(Math.random() * array.length), 1 )[0];
    }

    return subArray;
}