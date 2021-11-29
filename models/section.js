import {Model} from './model';
// import { StudentService } from '../services/student.service';


export class Section extends Model{

    getDescription(){
        return this.level + "ème " + this.name; 
    }

    getSectionCard(){
        let sectionElt = document.createElement('div');
            sectionElt.setAttribute('class','border text-center p-2 sectionCard')
            sectionElt.innerHTML = `<div>${this.level}ème</div>
                                    <div>${this.name}</div>`;
        return sectionElt;
    }

    // withStudents = async () => {
    //     this.Students = await new StudentService().getAllWhere(student => student.section_id == this.id);
    //     return this;
    // }

}

