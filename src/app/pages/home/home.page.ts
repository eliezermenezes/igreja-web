import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

import { CONSTANTS } from 'src/app/constants';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public user: UserModel;
    public users: UserModel[] = [];
    public loading: boolean = true;

    constructor() { }

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

        setTimeout(() => {
            this.setUsers();
        }, 1500);

    }

    setUsers() {
        for (let i = 0; i < 10; i++) {
            this.users.push(this.user);
        }
        this.loading = false;
    }

    loadData() {
        this.setUsers();

        this.users.length === 20
            ? NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.DISABLED_POPULATE, true)
            : NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.COMPLETE_POPULATE, true);
    }
}
