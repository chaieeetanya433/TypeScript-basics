"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
//here u can take input of any type and return any type
function identityTwo(val) {
    return val;
}
//here it is same as any but once u input an argument of certain type that type gets locked for the return as well
//i.e., input and return val should be of same type
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
//passing userdefined data type
// identityFour<Bottle>({brand: "puma", type:111})
function getSearchProducts(products) {
    //do some db operations
    const myIndex = 3;
    return products[myIndex];
}
//arrow function definition
const getMoreSearchProducts = (products) => {
    //do some db operations
    const myIndex = 2;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
