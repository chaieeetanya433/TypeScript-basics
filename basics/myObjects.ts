// const User = {
//     name: "chai",
//     email: "chai@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid:boolean}){}

// let newUser = {name: "chai", isPaid: false, email: "chai@gmail.com"};

// console.log(createUser(newUser));

//here we hv set the function createCourse as that func needs to return an object of those two keys
// function createCourse(): {name: string, price:number} {
//     return {name: "reactjs", price: 399}
// }

//type allias

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true});

type User = {
    readonly _id: string        //NOW u cannot manupulate this _id
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number  //? denotes that this property is optional
}

let myUser: User = {
    _id: "1234",
    name: "chai",
    email: "chai@c.com",
    isActive: false
}

myUser.email = "c@chai.com"
// myUser._id = "999"  //since it is readonly i cannot change it

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}