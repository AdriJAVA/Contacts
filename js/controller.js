var appContacts = (function(){
    
    var myContacts = new List('myContacts');

    //Public methods
    var addContact = function (){
        var newContact = new Contact();    
        myContacts.add(newContact);
        printContact();
        console.table(myContacts.contacts);
    }
   
    var deleteContact = function(){

       var contactsDOM = document.getElementById('box').children;

       for(let i = 0; i < contactsDOM.length; i++){
             if(contactsDOM[i] === this.parentNode){
                myContacts.contacts.splice(i,1);
             }
        }

       this.parentNode.remove();
       console.table(myContacts.contacts);
    }

    
    var updateContact = function(){
        var type =  this.className;
        switch(type){
            case 'name':
               _editName(this);
               break;
            case 'surname':
               _editSurname(this);
               break;

            case 'phone':
               _editTelephone(this);
               break;
        }

        console.table(myContacts.contacts);
    }

    //Private methods
    var _editName = function(_this){
         namesDOM = document.getElementsByClassName('name');

         for(let i = 0; i < namesDOM.length; i++){
             if(namesDOM[i] === _this){
                myContacts.contacts[i].setName(_this.value);
             }
        }
    }

    var _editSurname = function(_this){
         surnamesDOM = document.getElementsByClassName('surname');

         for(let i = 0; i < surnamesDOM.length; i++){
             if(surnamesDOM[i] === _this){
                myContacts.contacts[i].setSurname(_this.value);
             }
        }
    }

    var _editTelephone = function(_this){
         telsDOM = document.getElementsByClassName('phone');

         for(let i = 0; i < telsDOM.length; i++){
             if(telsDOM[i] === _this){
                myContacts.contacts[i].setTel(_this.value);
             }
        }
    }
    
    
    

    return{
        addContact : addContact,
        deleteContact : deleteContact,
        updateContact : updateContact
    }

})();

document.getElementById('add').addEventListener('click', appContacts.addContact);