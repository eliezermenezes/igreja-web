import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANTS } from 'src/app/constants';
import { ToastModel } from 'src/app/models/toast.model';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    public close: string;

    constructor(
        private toastCtrl: ToastController,
        private translate: TranslateService
    ) {
        this.close = this.translation(CONSTANTS.CLOSE);
    }

    /**
     * Success message
     * @param message message to be displayed
     */
    public success(message: string) {
        this.create({
            color: CONSTANTS.COLORS.SUCCESS,
            message: this.translation(message)
        });
    }

    /**
     * Error message
     * @param message message to be displayed
     */
    public error(message: string) {
        this.create({
            color: CONSTANTS.COLORS.DANGER,
            message: this.translation(message)
        });
    }

    /**
     * Create message
     * @param toastInfo data for message creation
     */
    private async create(toastInfo: ToastModel) {
        const toast = await this.toastCtrl.create({
            message: toastInfo.message,
            showCloseButton: true,
            closeButtonText: this.close,
            duration: 5000,
            color: toastInfo.color
        });
        toast.present();
    }

    /**
     * Text translation
     * @param text text to be translated
     */
    private translation(text: string): string {
        this.translate.get(text).subscribe(result => text = result);
        return text;
    }
}
