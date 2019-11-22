import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

import { CONSTANTS } from 'src/app/constants';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalPage } from '../shared/modal/modal.page';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MembersService } from './members.service';
import { IMember } from 'src/app/models/member.interface';
import { MemberFormPage } from '../secretary/member-form/member-form.page';

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
    providers: [LoadingService],
})
export class MembersPage implements OnInit {
    public user: UserModel;
    public members: Array<IMember>;
    public loadingMembers: Boolean = true;

    constructor(
        private modalCtrl: ModalController,
        private loading: LoadingService,
        private memberSrc: MembersService
    ) {
        this.members = new Array<IMember>();
    }

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
            // this.setUsers();
            this.getMembers();
        }, 1500);
    }

    setUsers() {
        for (let i = 0; i < 10; i++) {
            // this.users.push(this.user);
        }
        this.loadingMembers = false;
    }

    public async getMembers() {
        try {
            this.members = await this.memberSrc.getAll();
            this.loadingMembers = false;
        } catch(error) {
            this.loadingMembers = false;
            console.log(error);
        }
    }

    public submit() {

    }

    loadData() {
        this.setUsers();

        // this.users.length === 30
        //     ? NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.DISABLED_POPULATE, true)
        //     : NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.COMPLETE_POPULATE, true);
    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: MemberFormPage,
            cssClass: 'dialog-modal'
            // componentProps: this.user
        });
        return await modal.present();
    }

    TryLoading() {
        this.loading.start(CONSTANTS.LOADING);
        setTimeout(() => {
            this.loading.finalize();
        }, 2000);
    }
}
