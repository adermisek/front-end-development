import PhoneBookItem from "./PhoneBookItem";

class PhoneBook {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();

        return this.items;
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();

        return this.items;
    }


    saveToLocalStorage() {

        localStorage.setItem('phonebook-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('phonebook-data');

        if (json === null)
            return [];
        
        let jsonParsed = JSON.parse(json); 
        
        if (jsonParsed.length === 0)
            return [];

        let phoneBookItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            phoneBookItems.push(PhoneBookItem.fromJSON(jsonParsed[i]));
        }
      return phoneBookItems;
    }

}


export default PhoneBook;
