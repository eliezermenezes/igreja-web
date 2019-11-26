import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MemberFormPage } from '../member-form/member-form.page';
import { IMember } from 'src/app/models/member.interface';

import { NotificationService } from 'src/app/shared/services/notification.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MembersService } from './members.service';

import { CONSTANTS } from 'src/app/constants';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
    public members: Array<IMember>;
    public loadingMembers: Boolean = true;
    public subscription: Subscription;

    constructor(
        private modalCtrl: ModalController,
        private memberService: MembersService,
        private loading: LoadingService
    ) {
        this.members = new Array<IMember>();
    }

    ngOnInit() {
        this.subscription = NotificationService.get(CONSTANTS.SYSTEM_EVENTS.CREATED_USER).subscribe((result: Boolean) => {
            this.getMembers();
        });

        setTimeout(() => {
            this.getMembers();
        }, 1000);
    }

    public async getMembers() {
        try {
            this.members = await this.memberService.getAll();
            this.loadingMembers = false;
        } catch (error) {
            this.loadingMembers = false;
            console.log(error);
        }
    }

    public async openModal(member: IMember = null) {
        await this.loading.start(CONSTANTS.LOADING);
        const modal = await this.modalCtrl.create({
            component: MemberFormPage,
            componentProps: { data: member },
            cssClass: CONSTANTS.POPUPS.CSS_CLASS,
            backdropDismiss: false
        });
        await modal.present();
        this.loading.end();
    }

    TryLoading() {
        this.loading.start(CONSTANTS.LOADING);
        setTimeout(() => {
            this.loading.end();
        }, 2000);
    }
}
