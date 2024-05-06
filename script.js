let listOfStudents = [ 
{
    nameOfStudent: 'Anderson',
    firstNote: 5,
    secondNote: 6,
    thirdNote: 7,
    fourthNote: 8,
},

{
    nameOfStudent: 'Isabela',
    firstNote: 8,
    secondNote: 9,
    thirdNote: 5,
    fourthNote: 6,
},

{
    nameOfStudent: 'Matheus',
    firstNote: 3,
    secondNote: 4,
    thirdNote: 7,
    fourthNote: 8,
}

]

function calculateMedia(firstNote,secondNote,thirdNote,fourthNote) {
    let average = (firstNote + secondNote + thirdNote + fourthNote) / 4
    return average
}

for (let student of listOfStudents){
    individualAverage = calculateMedia(student.firstNote, student.secondNote, student.thirdNote, student.fourthNote)
    let approvedOrNot = individualAverage < 6 ? 'Infelizmente não foi aprovado. Estude mais!! ' : 'Parabéns pela sua aprovação no concurso!! ';

    alert(`A média de ${student.nameOfStudent} é ${individualAverage}. ${approvedOrNot}`);
}       