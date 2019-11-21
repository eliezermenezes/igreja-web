import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    public name: String;

    constructor(
        public modalCtrl: ModalController,
        public navParams: NavParams
    ) {
        this.name = navParams.get('name');
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}
