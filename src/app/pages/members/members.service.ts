import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMember } from 'src/app/models/member.interface';

@Injectable({
    providedIn: 'root'
})
export class MembersService {
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = `${environment.apiEndpoint}members`;
    }

    /**
     * Get all members
     * @returns the members list
     */
    public async getAll(): Promise<IMember[]> {
        return await this.http.get<IMember[]>(this.baseUrl).toPromise();
    }

    /**
     * Create new member
     * @param member member data
     * @returns the created member
     */
    public async create(member: IMember): Promise<IMember> {
        return await this.http.post<IMember>(this.baseUrl, member).toPromise();
    }

    /**
     * 
     * @param id member identifier
     * @param member member data
     * @returns the updated member
     */
    public async update(id: number, member: IMember): Promise<IMember> {
        return await this.http.put<IMember>(`${this.baseUrl}/${id}`, member).toPromise();
    }

    /**
     * 
     * @param id member identifier
     * @returns the deleted member
     */
    public async delete(id: number): Promise<IMember> {
        return await this.http.delete<IMember>(`${this.baseUrl}/${id}`).toPromise();
    }
}
