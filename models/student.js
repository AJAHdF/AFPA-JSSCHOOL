// import { SectionService } from '../services/index';
import { Model } from './model';

export class Student extends Model{

    // constructor(jsonObject){
    //     super(jsonObject);
    //     this.hasOne("Section", "section_id", "Section");
    // }

    getFullName(){
        return this.first_name + " " + this.last_name.toUpperCase();
    }

    getStudentRow(){
        let studentElt = document.createElement('div');
            studentElt.setAttribute('class','border p-1 studentRow')
            studentElt.innerHTML = `<div>${this.getFullName()}</div>`;

        return studentElt;
    }

}