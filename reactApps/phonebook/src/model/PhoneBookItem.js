
class PhoneBookItem {

    constructor(name, number) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;
    }


    static fromJSON (json) {
        let phoneBookItem = new PhoneBookItem();
        phoneBookItem.id = json.id;
        phoneBookItem.name = json.name;
        phoneBookItem.number = json.number;

        return phoneBookItem;
    }
}

export default PhoneBookItem;