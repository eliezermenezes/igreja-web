import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
    @Input()
    public user: UserModel;

    @Output()
    public loggedOut = new EventEmitter<UserModel>();

    constructor(
        private navCtrl: NavController
    ) { }

    ngOnInit() { }

    logout() {
        this.loggedOut.emit(this.user);
    }
}
