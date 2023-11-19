// const user: (string | number)[] = ["chai", 1]
let tUser: [string, number, boolean] 

tUser = ["chai", 122, true];

let rgb: [number, number, number] = [255, 0, 255]

type User = [number, string]

const newUser: User = [112, "example@gmail.com"]

newUser[1] = "chai@c.com"      //manupulation will happen 
// newUser.push();

export {}