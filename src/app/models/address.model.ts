export class AddressModel {
    private zipcode: String;
    private street: String;
    private number: String;
    private complement?: String;
    private neighborhood: String;
    private city: String;
    private state: String;
    private country: String;

    constructor(address: AddressModel) {
        if (address) {
            this.zipcode = address.zipcode;
            this.street = address.street;
            this.number = address.number;
            this.complement = address.complement;
            this.neighborhood = address.neighborhood;
            this.city = address.city;
            this.state = address.state;
            this.country = address.country;
        }
    }

    public getZipcode(): String {
        return this.zipcode;
    }

    public getStreet(): String {
        return this.street;
    }

    public getNumber(): String {
        return this.number;
    }

    public getComplement(): String {
        return this.complement;
    }

    public getNeighborhood(): String {
        return this.neighborhood;
    }

    public getCity(): String {
        return this.city;
    }

    public getState(): String {
        return this.state;
    }

    public getCountry(): String {
        return this.country;
    }
}
