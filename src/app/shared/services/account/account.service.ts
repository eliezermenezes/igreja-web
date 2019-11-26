import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICredential } from 'src/app/models/credential.interface';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = `${environment.apiEndpoint}members`;
    }

    /**
     * Authenticate user
     * @param credentials user access data
     * @returns the logged user
     */
    public async authenticate(credentials: ICredential): Promise<ICredential> {
        return await this.http.post<ICredential>(this.baseUrl, credentials).toPromise();
    }
}
