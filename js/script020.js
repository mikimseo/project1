"use strict"

// const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

console.log(options.colors.bg);

delete options.name;
console.log(options);