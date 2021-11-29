import { Section, Student } from "../models/index";
// import { SectionService } from "../services";


const sectionJson = JSON.parse(localStorage.getItem('section'));
let section = new Section(sectionJson);//.withStudents();
// section = await new SectionService().withStudents.getById(section.id)
document.querySelector('#pageTitle').innerHTML = document.title = section.getDescription();

fetch("./data/student.json")
    .then(resp => resp.json())
    .then(json => {

        const filteredJson = json.filter(item => item.section_id == section.id);
        let studentList = filteredJson.map(studentJson => {
            return new Student(studentJson);
        })

        studentList = studentList
            .sort((a,b) => a.last_name < b.last_name ? -1 : 1);

        studentList.forEach(student => {
            let studentElt = student.getStudentRow();
            studentElt.addEventListener('click', handleStudentClick.bind(this,student));
            document.querySelector('.studentContainer').append(studentElt);
        })

    });

function handleStudentClick(student){
    console.log(student);
    localStorage.setItem("student", JSON.stringify(student));
    window.location = "studentDetail.html";
    let bp;
}

let bp;