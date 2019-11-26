import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MembersService } from '../members/members.service';
import { IMember } from 'src/app/models/member.interface';
import { MemberModel } from 'src/app/models/member.model';

import Stepper from 'bs-stepper';
import { CONSTANTS } from 'src/app/constants';
import { ToastService } from 'src/app/shared/services/toast.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
    selector: 'app-member-form',
    templateUrl: './member-form.page.html',
    styleUrls: ['./member-form.page.scss'],
})
export class MemberFormPage implements OnInit {
    public form: FormGroup;
    private member: MemberModel;
    private stepper: Stepper;

    constructor(
        private fb: FormBuilder,
        private modal: ModalController,
        private navParams: NavParams,
        private loading: LoadingService,
        private memberService: MembersService,
        private toast: ToastService
    ) { }

    // next() {
    //     this.stepper.next();
    // }

    ngOnInit() {
        this.member = new MemberModel(this.navParams.get('data'));
        this.stepper = new Stepper(document.querySelector('#stepper-fmember'), {
            linear: false,
            animation: true
        });
        console.log(this.member);
        this.form = this.fb.group({
            name: [
                this.member.getName(),
                [Validators.required]
            ],
            personal_email: [
                this.member.getPersonalEmail(),
                [Validators.required]
            ]
        });
    }

    public async submit() {
        // await this.loading.start(CONSTANTS.LOADING);

        if (this.member.getId()) {
            console.log("update");
        } else {
            console.log("create");
        }

        // let valuesSubmit = Object.assign({}, this.form.value);
        // try {
        //     const member = await this.memberSrc.create(valuesSubmit);
        //     if (member) {
        //         this.dismiss();
        //         NotificationService.emit(CONSTANTS.SYSTEM_EVENTS.CREATED_USER, true)
        //         this.toast.success(CONSTANTS.MESSAGES.SUCCESS);
        //     } else {
        //         this.toast.error(CONSTANTS.MESSAGES.ERROR);
        //     }
        //     this.loading.end();
        // } catch (error) {
        //     this.loading.end();
        //     this.toast.error(CONSTANTS.MESSAGES.ERROR);
        // }

    }

    dismiss() {
        this.modal.dismiss({
            'dismissed': true
        });
    }
}
