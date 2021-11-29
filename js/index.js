import { SectionService } from '../services/section.service';
import { StudentService } from '../services/student.service';

const studentService = new StudentService();
let studentList = await studentService.getAllWhere(item => item.section_id == 1);
studentList = await studentService.getById(10)


const service = new SectionService();
let sectionList = await service.getAll();
sectionList = sectionList.sort((a,b) => a.name < b.name ? -1 : 1)
        
sectionList.forEach(section => {
    let sectionElt = section.getSectionCard();
    sectionElt.addEventListener('click', handleSectionClick.bind(this,section));
    document.querySelector('.sectionContainer' + section.level).append(sectionElt);
})


function handleSectionClick(section){
    console.log(section);
    localStorage.setItem("section", JSON.stringify(section));
    window.location = "sectionDetail.html";
    let bp;
}

let bp;