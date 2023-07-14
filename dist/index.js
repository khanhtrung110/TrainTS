"use strict";
//generics
const findItem = (value, index) => {
    return value[index];
};
findItem([1, 2], 0);
class Cart {
    constructor() {
        this.cart = [];
    }
    addTooCart(product) {
        this.cart.push(product);
    }
}
const CartTest = new Cart;
CartTest.addTooCart({ name: 'vitamin', price: 25 });
// Keyof Type Operator
const getProperty = (obj, key) => {
    return obj[key];
};
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "b");
//Typeof Type
const detectType = (value) => {
    if (typeof value == "string") {
        return value.toLowerCase();
    }
    return value + 2;
};
const detectTypeTwo = (value) => {
    if (value) {
        if (Array.isArray(value)) {
            value.forEach(ele => {
                console.log(ele);
            });
        }
        else {
            return Object.keys(value);
        }
    }
    else {
        console.log("No data");
    }
};
const findUser = (value) => {
    //Call Api
};
const data = 2;
;
;
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}
