function printerError(s) {
    let noError = 0;
    
    for (let char of s.split('')) {
      if (!'abcdefghijklm'.split('').includes(char)) {
        noError++;
      }
    }

    return `${noError}/${s.length}`;
}
console.log(printerError("aaabbbbhaijjjm"))
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))