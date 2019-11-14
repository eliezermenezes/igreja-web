import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-footer',
    templateUrl: './menu-footer.component.html',
    styleUrls: ['./menu-footer.component.scss'],
})
export class MenuFooterComponent implements OnInit {
    public currentVersion: string = environment.currentVersion;
    constructor() { }

    ngOnInit() { }
}
