
//declaring superHeros as a array of type string (superHeros : string[])
const superHeros: string[] = []   
// const heroPower: number[] = []  
const heroPower: Array<number> = []  

type User = {
    name: string
    isActive: boolean
}

//defining array allUsers of type User object 
const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    [100, 100, 100]
]

//declared a Readonly array
const ageArray: ReadonlyArray<number> = []

superHeros.push("spiderman");
superHeros.push("batman");
heroPower.push(2)

allUsers.push({name: "", isActive: true})

export {}