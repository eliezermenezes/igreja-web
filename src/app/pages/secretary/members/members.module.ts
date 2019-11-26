import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalPage } from '../../shared/modal/modal.page';
import { MembersService } from './members.service';
import { MemberFormPage } from '../member-form/member-form.page';

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
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [
        MembersPage,
        MemberFormPage,
        ModalPage
    ],
    entryComponents: [
        ModalPage,
        MemberFormPage
    ],
    providers: [
        MembersService
    ]
})
export class MembersPageModule { }
