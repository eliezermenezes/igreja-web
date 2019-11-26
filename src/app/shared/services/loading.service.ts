import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UtilsService } from './utils/utils.service';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading: HTMLIonLoadingElement;

    constructor(
        private utils: UtilsService,
        private loadingCtrl: LoadingController
    ) { }

    /**
     * Create loading element
     * @param message message to be displayed when is loading
     */
    public async start(message: string) {
        this.loading = await this.loadingCtrl.create({
            message: this.utils.translation(message)
        });
        this.loading.present();
    }

    /**
     * Finish loading
     */
    public end() {
        this.loading.dismiss();
    }
}
