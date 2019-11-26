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

    /**
     * Create loading element
     * @param message message to be displayed when is loading
     */
    public async start(message: string) {
        this.loading = await this.loadingCtrl.create({
            message: this.translation(message)
        });
        this.loading.present();
    }

    /**
     * Finish loading
     */
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
