//adding the type of the input variable num as well as specifying the return type that the function should return 
function addTwo(num: number): number {
    return num+2;
    //return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

let loginUser = (name: string, email: string, isPair: boolean=false) => {}

addTwo(2);
getUpper("hello");
loginUser("chai", "chai12@gmail.com")

// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s:string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}



export {}