import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MemberFormPage } from './member-form.page';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MembersService } from '../../members/members.service';

const routes: Routes = [
    {
        path: '',
        component: MemberFormPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MemberFormPage
    ],
    providers: [
        LoadingService,
        MembersService
    ]
})
export class MemberFormPageModule { }
