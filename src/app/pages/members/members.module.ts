import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalPage } from '../shared/modal/modal.page';

const routes: Routes = [
    {
        path: '',
        component: MembersPage
    }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MembersPage,
        ModalPage
    ],
    entryComponents: [
        ModalPage
    ]
})
export class MembersPageModule { }
