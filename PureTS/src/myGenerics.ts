const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val;
}

//here u can take input of any type and return any type
function identityTwo(val: any): any {
    return val;
}

//here it is same as any but once u input an argument of certain type that type gets locked for the return as well
//i.e., input and return val should be of same type
function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

//passing userdefined data type
// identityFour<Bottle>({brand: "puma", type:111})

function getSearchProducts<T>(products: T[]): T{
    //do some db operations
    const myIndex = 3
    return products[myIndex]
}

//arrow function definition
const getMoreSearchProducts = <T>(products: T[]):T => {
    //do some db operations
    const myIndex = 2;
    return products[myIndex]
} 

// function anotherFunction<T, U>(valOne:T, valTwo:U): object {
//     return {
//         valOne,
//         valTwo
//     }
// }

// anotherFunction(2, "4");

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(2, {});

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}
export {}


