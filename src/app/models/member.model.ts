import { IMember } from './member.interface';

export class MemberModel implements IMember {
    public status?: number;
    public name: string;
    public gender: string;
    public birthday: string;
    public marital_status?: number;
    public nationality: string;
    public naturalness: string;
    public schooling?: string;
    public personal_email?: string;
    public phone: string;
    public avatar?: string;
    public address?: Object;
    public titles?: any[];
    public roles?: any[];
    public isBaptized?: boolean;
    public baptism_date?: string;
    public entry_date?: string;
}