
//defining a score variable which can take number value or string value
let score: number | string = 33

type user = {
    name: string
    id: number
}

type Admin = {
    username: string
    id:number
}

let chai: user | Admin = {name: "chai", id: 334}

chai = { username: "chaieee", id: 333}

// function ge tDBId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDBId(2)
getDBId("2")

function getDBId(id: number | string) {
    //making some API calls 
    if(typeof id === "string") {
        id.toLowerCase()
    } 
    if(typeof id === "number") {
        id + 2
    } 
}

//arrays

const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
// const data3: string[] | number[] = ["1", "2", "3"]  //the array can contain either all the numbers or all the string vals
const data3: (string | number | boolean)[] = ["1", "2", 3, true]    //allows array to store mixed type of vals

let seatAllotment: "front" | "middle" | "window"
seatAllotment = "front"
// seatAllotment = "crew"   //this is incorrect since we want seatAllotment to have these "front" | "middle" | "window" vals only

export {}