import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-frame',
    templateUrl: './frame.page.html',
    styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
    public user: UserModel;
    public activePage: string;

    constructor(
        private navCtrl: NavController,
        private menuCtrl: MenuController,
        private translate: TranslateService,
    ) { }

    ngOnInit() {
        this.user = {
            name: 'Eliezer Menezes',
            username: 'menezes',
            email: 'menezes@example.dom',
            image: 'https://baltademos.blob.core.windows.net/eshop/batman.png',
            token: 'aHR0cHM6Ly9iYWx0YWRlbW9zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9lc2hvcC9iYXRtYW4ucG5n',
            roles: ['employee', 'manager'],
            profile: 'Coordenador'
        };
    }

    goToPage(page: string) {
        this.menuCtrl.close();
        this.navCtrl.navigateRoot(page);
        this.activePage = page;
    }

    isActivePage(page: string): boolean {
        return page === this.activePage;
    }

    logout(user: UserModel) {
        console.log('clicou no logout', user.username);
        this.navCtrl.navigateRoot('/login');
    }

    changeLanguage(language: string) {
        this.translate.use(language);
    }
}
