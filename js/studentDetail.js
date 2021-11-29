import { Student, Section, Subject, Note } from "../models/index";
import { StudentService } from "../services/student.service";


const studentJson = JSON.parse(localStorage.getItem('student'));
const student = new Student(studentJson)

// let student = await new StudentService().with("Section").getById(studentJson.id);


//Ajouter la section
document.querySelector('#pageTitle').innerHTML = document.title = student.getFullName();

fetch("./data/subject.json")
    .then(resp => resp.json())
    .then(json => {
        //subject
        let subjectList = json.map(item => {
            return new Subject(item);
        })

        fetch("./data/note.json")
        .then(resp => resp.json())
        .then(json => {
            //notes
            let jsonNotes = json.filter(note => note.student_id == student.id)
            let studentNotes = jsonNotes.map(note => new Note(note));

            
            subjectList.forEach(subject => {
                let subjectNotes = studentNotes.filter(note => note.subject_id == subject.id)
                let htmlRow = document.createElement('div');
                htmlRow.innerHTML += `<b class="mr-2">${subject.name} : </b>`;
                let htmlNote = subjectNotes.map(note => `<span class="mx-2">${note.value}</span>`).join("-");
                htmlRow.innerHTML += htmlNote;
                let moy = subjectNotes.reduce((sum, note) => sum + note.value, 0) / subjectNotes.length;
                htmlRow.innerHTML += `<b class="ml-2">Moyenne : ${moy}</b>`;
                document.querySelector('.subjectContainer').append(htmlRow);
            });
            //Ajouter la moyenne générale (sans coéf)


        })


    })