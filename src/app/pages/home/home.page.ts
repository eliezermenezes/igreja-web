import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public user: UserModel;
    
    constructor() {}

    ngOnInit() {
        this.user = {
            name: 'Eliezer Menezes',
            username: 'menezes',
            email: 'menezes@example.dom',
            image: 'https://baltademos.blob.core.windows.net/eshop/batman.png',
            token: 'aHR0cHM6Ly9iYWx0YWRlbW9zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9lc2hvcC9iYXRtYW4ucG5n',
            roles: ['employee', 'manager'],
            profile: 'Coordenador'
        };
    }
}
