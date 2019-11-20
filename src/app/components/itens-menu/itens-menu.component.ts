import { Component, OnInit, Input, Output } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
    selector: 'app-itens-menu',
    templateUrl: './itens-menu.component.html',
    styleUrls: ['./itens-menu.component.scss'],
})
export class ItensMenuComponent implements OnInit {

    public activePage: String;

    @Input()
    public groups: any;

    constructor(
        private navCtrl: NavController,
        private menuCtrl: MenuController
    ) { }

    ngOnInit() { }

    isActivePage(page: string): boolean {
        return page === this.activePage;
    }

    goToPage(page: string) {
        this.menuCtrl.close();
        this.navCtrl.navigateRoot(page);
        this.activePage = page;
    }
}
