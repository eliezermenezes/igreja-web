import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MembersService } from '../../members/members.service';
import { IMember } from 'src/app/models/member.interface';
import { MemberModel } from 'src/app/models/member.model';

@Component({
    selector: 'app-member-form',
    templateUrl: './member-form.page.html',
    styleUrls: ['./member-form.page.scss'],
})
export class MemberFormPage implements OnInit {
    public form: FormGroup;
    public member: IMember;

    constructor(
        private fb: FormBuilder,
        private modalCtrl: ModalController,
        private navParams: NavParams,
        private loading: LoadingService,
        private memberSrc: MembersService
    ) {
        this.member = new MemberModel();
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
            personal_email: ['', [Validators.required]]
        });
        console.log(this.member);
    }

    public async submit() {
        if (this.form.invalid) {
            return;
        }

    }

    dismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}
