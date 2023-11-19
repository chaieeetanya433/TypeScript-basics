//defining a score variable which can take number value or string value
var score = 33;
var chai = { name: "chai", id: 334 };
chai = { username: "chaieee", id: 333 };
// function getDBId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDBId(2);
getDBId("2");
function getDBId(id) {
    //making some API calls 
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
}
//arrays
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3: string[] | number[] = ["1", "2", "3"]  //the array can contain either all the numbers or all the string vals
var data3 = ["1", "2", 3, true]; //allows array to store mixed type of vals
var seatAllotment;
seatAllotment = "front";
// seatAllotment = "crew"   //this is incorrect since we want seatAllotment to have these "front" | "middle" | "window" vals only
