import { environment } from 'src/environments/environment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu-footer',
    templateUrl: './menu-footer.component.html',
    styleUrls: ['./menu-footer.component.scss'],
})
export class MenuFooterComponent implements OnInit {
    public currentVersion: string = environment.currentVersion;

    @Output()
    public loadLanguage = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    translate(language: string) {
        this.loadLanguage.emit(language);
    }
}
