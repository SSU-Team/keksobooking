export const getRandomFloat = (a, b, k) => {
    if (a === b ) return a;

    if (a > b) {
        let buff = a;
        a = b;
        b = buff;
    }

    return (a + Math.floor((Math.random() * (b - a)))).toFixed(k);
}

export const getRandomSubarray = (array) => {
    const randLength = getRandomFloat(0, array.length, 0);
    const subArray = [];

    for (let i = 0; i < randLength; i++) {
        subArray[i] = array.splice( getRandomFloat(0, array.length, 0), 1 )[0];
    }

    return subArray;
}