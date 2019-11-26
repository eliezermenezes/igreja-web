import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-frame',
    templateUrl: './frame.page.html',
    styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
    public groups: any;

    public loggedUser: UserModel;
    public activePage: String;

    constructor(
        private navCtrl: NavController,
        private menuCtrl: MenuController,
        private translate: TranslateService
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this.groups = [{
                'pages': [
                    {
                        'title': 'home',
                        'url': 'home',
                        'icon': 'home'
                    }
                ]
            }, {
                'name': 'secretary.name',
                'pages': [
                    {
                        'title': 'secretary.members',
                        'url': 'members',
                        'icon': 'people'
                    }, {
                        'title': 'secretary.settings',
                        'url': 'settings',
                        'icon': 'settings'
                    }
                ]
            }, {
                'name': 'patrimony.name',
                'pages': [
                    {
                        'title': 'patrimony.goods',
                        'url': 'goods',
                        'icon': 'gift'
                    }, {
                        'title': 'patrimony.reservations',
                        'url': 'reservations',
                        'icon': 'speedometer'
                    }
                ]
            }, {
                'name': 'financial.name',
                'pages': [
                    {
                        'title': 'financial.revenue',
                        'url': 'revenues',
                        'icon': 'arrow-up'
                    }, {
                        'title': 'financial.expenses',
                        'url': 'expenses',
                        'icon': 'arrow-down'
                    }, {
                        'title': 'financial.extracts',
                        'url': 'extracts',
                        'icon': 'options'
                    }
                ]
            }];

            this.loggedUser = {
                name: 'Eliezer Menezes',
                username: 'menezes',
                email: 'menezes@example.dom',
                image: 'https://baltademos.blob.core.windows.net/eshop/batman.png',
                token: 'aHR0cHM6Ly9iYWx0YWRlbW9zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9lc2hvcC9iYXRtYW4ucG5n',
                roles: ['employee', 'manager'],
                profile: 'Coordenador'
            };
        }, 3000);
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
