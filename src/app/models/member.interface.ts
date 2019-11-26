export interface IMember {
    status?: number,
    name: string,
    gender: string,
    birthday: string,
    marital_status?: number,
    nationality: string,
    naturalness: string,
    schooling?: string,
    personal_email?: string,
    phone: string,
    avatar?: string,
    address?: Object,
    titles?: Array<any>,
    roles?: Array<any>,
    isBaptized?: boolean,
    baptism_date?: string,
    entry_date?: string
}
