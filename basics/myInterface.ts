

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?:string,
    // startTrail: () => string
    startTrail():string,
    getCoupon(couponname: string, value: number): number
}
interface User {
    githubToken: string
}

//inheritance
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const chai: Admin = {dbId:22, email: "chai@c.com", 
userId: 2211,
role: "admin",
githubToken: "github", 
startTrail: ()=> {
    return "trail started"
},
getCoupon: (name: "chai10", off: 10) => {
    return 23
}
}

console.log(chai);


export {}