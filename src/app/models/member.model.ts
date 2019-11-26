import { AddressModel } from './address.model';

export class MemberModel {
    private id?: Number;
    private active: Boolean;
    private name: String;
    private gender: String;
    private birthday: Date;
    private marital_status?: Number;
    private nationality: String;
    private naturalness: String;
    private schooling?: String;
    private personal_email?: String;
    private phone: String;
    private avatar?: String;
    private address: AddressModel;
    private titles: Array<String>;
    private roles: Array<String>;
    private isBaptized: Boolean;
    private baptism_date: Date;
    private entry_date: Date;

    constructor(member?: MemberModel) {
        if (member) {
            this.id = member.id;
            this.name = member.name;
            this.active = member.active;
            this.gender = member.gender;
            this.birthday = member.birthday;
            this.marital_status = member.marital_status;
            this.nationality = member.nationality;
            this.naturalness = member.naturalness;
            this.schooling = member.schooling;
            this.personal_email = member.personal_email;
            this.phone = member.phone;
            this.avatar = member.avatar;
            this.address = member.address;
            this.titles = member.titles;
            this.roles = member.roles;
            this.isBaptized = member.isBaptized;
            this.baptism_date = member.baptism_date;
            this.entry_date = member.entry_date;
        }
    }

    public getId(): Number {
        return this.id;
    }
    
    public getName(): String {
        return this.name;
    }

    public getActive(): Boolean {
        return this.active;
    }

    public getGender(): String {
        return this.gender;
    }

    public getBirthday(): Date {
        return this.birthday;
    }

    public getMaritalStatus(): Number {
        return this.marital_status;
    }

    public Nationality(): String {
        return this.nationality;
    }

    public Naturalness(): String {
        return this.naturalness;
    }

    public getSchooling(): String {
        return this.schooling;
    }

    public getPersonalEmail(): String {
        return this.personal_email;
    }

    public getPhone(): String {
        return this.phone;
    }

    public getAvatar(): String {
        return this.avatar;
    }

    public getAddress(): AddressModel {
        return this.address;
    }

    public getTitles(): Array<String> {
        return this.titles;
    }

    public getRoles(): Array<String> {
        return this.roles;
    }

    public getIsBaptized(): Boolean {
        return this.isBaptized;
    }

    public BaptismDate(): Date {
        return this.baptism_date;
    }

    public EntryDate(): Date {
        return this.entry_date;
    }
}
