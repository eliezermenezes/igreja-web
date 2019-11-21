import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading: HTMLIonLoadingElement;

    constructor(
        private loadingCtrl: LoadingController,
        private translate: TranslateService
    ) { }

    public async start(message: string) {
        this.loading = await this.loadingCtrl.create({
            message: this.translation(message)
        });
        this.loading.present();
    }

    // async TryLoading() {
    //     const loading = await this.loadingCtrl.create({ message: CONSTANTS.AUTHENTICATING });
    //     loading.present();

    //     setTimeout(() => {
    //         loading.dismiss();
    //         // this.showMessage(CONSTANTS.MESSAGES.SUCCESS);
    //     }, 500);
    // }

    public finalize() {
        this.loading.dismiss();
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
