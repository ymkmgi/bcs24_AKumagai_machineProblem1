// @ts-check

// ITCS227 Source Code Template for 2T AY 2022-2023
/* 
    Program:        Computation of Grades using Function
    Programmer:     Ayumi Kumagai
    Section:        BCS24
    Start Date:     April 18, 2023
    End Date:       April 18, 2023
*/
var prompt = require('prompt-sync')();
// accept 5 Enabling Assessment and compute the average of 5 enabling assessment
function getClassParticipation() {
    let enablingAssessment = [];
    let sum = 0;
    let count = 1;

    for (let i = 0; i < 5; i++) {
        let value = prompt(`Enter enabling assessment ${count}: `);

        // @ts-ignore
        while (isNaN(value)) {
            value = prompt(`Invalid Input. Please enter a valid number: `)
        }

        enablingAssessment.push(Number(value));
        count++;
    }
    for (let j = 0; j < enablingAssessment.length; j++) {
        sum += enablingAssessment[j];
    }
    let avg = sum / enablingAssessment.length;
    return Number(avg.toFixed(2));
}

// accept three Summative and compute for the average Summative assessment
function getSummative() {
    let summativeAssessment = [];
    let sum = 0;
    let count = 1;

    for (let i = 0; i < 3; i++) {
        let value = prompt(`Enter Summative assessment ${count}: `);

        // @ts-ignore
        while (isNaN(value)) {
            value = prompt(`Invalid Input. Please enter a valid number: `)
        }

        summativeAssessment.push(Number(value));
        count++;
    }
    for (let j = 0; j < summativeAssessment.length; j++) {
        sum += summativeAssessment[j];
    }
    let avg = sum / summativeAssessment.length;
    return Number(avg.toFixed(2));
}

// accept major exam score
function getFinalExam() {
    let finalExamScore = prompt(`Enter final exam: `);

    // @ts-ignore
    while (isNaN(finalExamScore)) {
        finalExamScore = prompt(`Invalid Input. Please input a valid number: `);
    }
    return Number(finalExamScore);
}

// calculate the final grade of each student
function getGradeScore(cPScore, sGScore, fEScore) {
    // let cPScore = getClassParticipation(); let sGScore = getSummative(); let fEScore = getFinalExam();
    let grade = (cPScore * 0.3) + (sGScore * 0.3) + (fEScore * 0.4);
    return Number(grade.toFixed(2));
}

// find the corresponding letter grade for each student based on the following grade system
function getLetterGrade(gradeScore) {
    let letter;
    let grade = gradeScore;
    if (grade >= 90 && grade <= 100) {
        letter = 'A';
    } else if (grade >= 80 && grade <= 89) {
        letter = 'B';
    } else if (grade >= 70 && grade <= 79) {
        letter = 'C';
    } else if (grade >= 60 && grade <= 69) {
        letter = 'D';
    } else {
        letter = 'F';
    }
    return letter;
}

let student = [];
for (let i = 0; i < 5; i++) {
    let person = {
        Student_Name: "",
        Class_Participation: 0,
        Summative_Assessment: 0,
        Exam_Grade: 0,
        Grade_Score: 0,
        Letter_Grade: "",
    };
    // @ts-ignore
    person.Student_Name = prompt(`Name: `);
    person.Class_Participation = getClassParticipation();
    person.Summative_Assessment = getSummative();
    person.Exam_Grade = getFinalExam();
    person.Grade_Score = getGradeScore(person.Class_Participation, person.Summative_Assessment, person.Exam_Grade);
    person.Letter_Grade = getLetterGrade(person.Grade_Score);

    student.push(person); console.log(`\n`);
}
console.table(student);