import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
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

    loadData(event: any) {
        setTimeout(() => {
            this.setUsers();
            event.target.complete();

            if (this.users.length == 30) {
                event.target.disabled = true;
            }
        }, 1000);
    }
}
