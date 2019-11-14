import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { UserCardComponent } from './user-card/user-card.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        NavbarComponent,
        LoadingComponent,
        UserCardComponent,
        MenuFooterComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule
    ],
    exports: [
        NavbarComponent,
        LoadingComponent,
        UserCardComponent,
        MenuFooterComponent
    ]
})
export class ComponentsModule { }
