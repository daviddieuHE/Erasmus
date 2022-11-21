const employeelist = [
    {
    id : 1,
    name : "Tom",
    surname : "Blake",
    age : 13,
    gender : "male"
    },
        {
    id : 2,
    name : "Bella",
    surname : "Blaker",
    age : 14,
    gender : "female"
    },
        {
    id : 3,
    name : "Tom",
    surname : "Blakered",
    age : 15,
    gender : "male"
    }
]

const nameCountMap = {}
const malesCountMap = {}
const femalesCountMap = {}



employeelist.forEach(employee => {
// all employees
    if(!nameCountMap[employee.name]) nameCountMap[employee.name] = 0;
    nameCountMap[employee.name]+=1
//only males
if (employee.gender == "male"){
    if(!malesCountMap[employee.name]) malesCountMap[employee.name] = 0;
    malesCountMap[employee.name]+=1}
//only females
if (employee.gender == "female"){
    if(!femalesCountMap[employee.name]) femalesCountMap[employee.name] = 0;
    femalesCountMap[employee.name]+=1}
})

console.log(nameCountMap, malesCountMap, femalesCountMap)

// const charData = {}

// const dtouOut = {
//    names,
//    charData,
// }
// console.log(dtouOut)