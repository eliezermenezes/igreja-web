import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(public translate: TranslateService) { }

    /**
   * Text translation
   * @param text text to be translated
   */
    public translation(text: string): string {
        this.translate.get(text).subscribe(result => text = result);
        return text;
    }
}
