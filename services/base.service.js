import * as Models from '../models/index';

export class BaseService{

    /**
     * 
     * @returns Renvoie le nom de la classe model correspondant au service
     */
    #getModelName = () => {
        return this.constructor.name.replace("Service","");
    }

    /**
     * 
     * @returns Renvoie la classe model correspondant au service
     */
    #getModelClass = () => {
        return Models[this.#getModelName()];
    }
    
    #getAllJson = async () => {
        return await fetch(`./data/${this.#getModelName().toLowerCase()}.json`).then(resp => resp.json())
    }

    /**
     * 
     * @returns Renvoie tous les models correspondant au service
     */
    getAll = async () => {
        let json = await this.#getAllJson();
        return json.map(objectJson => {    
            return new (this.#getModelClass())(objectJson);
        })
            
    }

    /**
     * 
     * @param {arrow function} where : condition de filtrage
     * @returns Renvoie un tableau de models correspondant au service et respectant la condition where
     */
    getAllWhere = async (where) => {
        let json = await this.#getAllJson();
        return json.filter(where).map(objectJson => {
            return new (this.#getModelClass())(objectJson);
        })
    }

    /**
     * 
     * @param {number} id 
     * @returns Renvoie un model correspondant au service en fonction de l'id
     */
    getById = async (id) => {
        let array = await this.getAllWhere(item => item.id == id);
        let entity = array.length ? array[0] : undefined
        return entity; 
    }
    
    
    // with = (relation) => {
    //     this.WithOnes.push(relation);
    //     return this
    // }

    // WithOnes = []
    
} 