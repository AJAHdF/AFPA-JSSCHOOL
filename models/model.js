export class Model{

    constructor(jsonObject){
        Object.assign(this, jsonObject)
    }

    // hasOne = (modelClassName, foreignKey, propName) => {
    //     this.Ones[modelClassName] = { foreignKey, propName }
    //     return this;
    // }

    // Ones = {};

}