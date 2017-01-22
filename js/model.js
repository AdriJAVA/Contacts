class Contact {
    constructor(name){
        this.name = 'Undefined';
        this.surname = 'Undefined';
        this.tel = 'Undefined';
        this.sex = "m";
    }
    
    setName(name){
        this.name = name;
    }

    setSurname(surname){
        this.surname = surname;
    }

    setTel(tel){
        this.tel = tel;
    }
}
    

class List {
    constructor(name){
        this.name = name;
        this.contacts = [];
    }
    
    add(contact){
        this.contacts.push(contact);
    }

}

