import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANTS } from 'src/app/constants';
import { IToast } from 'src/app/models/toast.interface';
import { UtilsService } from './utils/utils.service';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    public close: string;

    constructor(
        private utils: UtilsService,
        private toastCtrl: ToastController
    ) {
        this.close = this.utils.translation(CONSTANTS.CLOSE);
    }

    /**
     * Success message
     * @param message message to be displayed
     */
    public success(message: string) {
        this.create({
            color: CONSTANTS.COLORS.SUCCESS,
            message: this.utils.translation(message)
        });
    }

    /**
     * Error message
     * @param message message to be displayed
     */
    public error(message: string) {
        this.create({
            color: CONSTANTS.COLORS.DANGER,
            message: this.utils.translation(message)
        });
    }

    /**
     * Create message
     * @param toastInfo data for message creation
     */
    private async create(toastInfo: IToast) {
        const toast = await this.toastCtrl.create({
            message: toastInfo.message,
            showCloseButton: true,
            closeButtonText: this.close,
            duration: 3000,
            color: toastInfo.color
        });
        toast.present();
    }
}
