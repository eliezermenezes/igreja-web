import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

import { CONSTANTS } from 'src/app/constants';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalPage } from '../shared/modal/modal.page';
import { ToastService } from 'src/app/shared/services/toast.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
    public user: UserModel;
    public users: UserModel[] = [];
    // public loading: Boolean = true;
    public perPage: Number = 10;

    constructor(
        private modalCtrl: ModalController,
        // private loadingCtrl: LoadingController,
        private toast: ToastService,
        private loading: LoadingService
    ) { }

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
        // this.loading = false;
    }

    loadData() {
        this.setUsers();

        this.users.length === 30
            ? NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.DISABLED_POPULATE, true)
            : NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.COMPLETE_POPULATE, true);
    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: ModalPage,
            componentProps: this.user
        });
        return await modal.present();
    }

    async TryLoading() {
        this.loading.start(CONSTANTS.LOADING);

        // const loading = await this.loadingCtrl.create({ message: CONSTANTS.AUTHENTICATING});
        // loading.present();

        setTimeout(() => {
            // loading.dismiss();
            // this.showMessage(CONSTANTS.MESSAGES.SUCCESS);
        }, 500);
    }

    success() {
        this.toast.success(CONSTANTS.MESSAGES.SUCCESS);
    }
    danger() {
        this.toast.error(CONSTANTS.MESSAGES.ERROR);
    }
}
