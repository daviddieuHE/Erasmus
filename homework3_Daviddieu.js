// Homework 3 David Dieu


// declaration of all array

const names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen","Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"];
const femaleSurames = ["Mary", "Patricia",  "Linda",  "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly", "Deborah"];
const maleSurnames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Jeff"];
const gender = ["male", "female"];
const workload = [10, 20, 30, 40];


// function that will generate a random number within the length of the called array so i can use it later to pic a random item
function random(array){
    return(array[Math.floor(Math.random() * array.length)]);
}

//function that will return the youngest birthdate in the formate "YYYY, MM, DD" so it can be use to generate a new date in a range later in the code
function youngerBirthdate(age){
    var date = new Date();
    var year = date.getFullYear();
    var month =date.getMonth() +1
    var day = date.getDate();
    return((year-age) + ", " + month + ", " +day)
    
}

// function that will return the oldest birthdate in the formate "YYYY, MM, DD" so it can be use to generate a new date in a range later in the code
function olderBirthdate(age){
    var date = new Date();
    var year = date.getFullYear();
    var month =date.getMonth() +1
    var day = date.getDate();
    return((year-age) + ", " + month + ", " +day)
}

// function that generate a random date in the range of 2 parameters which will be youngerBirthdate(age) and olderBirthdate(age)
function randomDate(start, end) {
    return(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
}

// function that will generate the date and return it
function employee(number, minAge, maxAge){
    const dtoOut = []
        for(let i=0; i<number; i++){
            var employee = 
                {   workload: "",
                    gender: "",
                    name: "",
                    surname: "",
                    birthdate: ""
                }

            employee.workload = random(workload);
            employee.gender = random(gender);
            employee.name = random(names);
            employee.birthdate = randomDate(new Date(youngerBirthdate(minAge)), new Date(olderBirthdate(maxAge)));

            if (employee.gender == "male"){
                employee.surname = random(maleSurnames)
            }
            else{
                employee.surname = random(femaleSurames)
            }
            dtoOut.push(employee)
            }
            console.log(dtoOut)
}

employee(5, 18, 28);