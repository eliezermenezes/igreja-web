import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './guards/authenticate.guard';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
    { path: 'login', loadChildren: './pages/account/login/login.module#LoginPageModule' },
    {
        path: '',
        component: FramePage,
        canActivate: [AuthenticateGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
            { path: 'members', loadChildren: './pages/secretary/members/members.module#MembersPageModule' },
            { path: 'settings', loadChildren: './pages/secretary/settings/settings.module#SettingsPageModule' },
            { path: 'goods', loadChildren: './pages/patrimony/goods/goods.module#GoodsPageModule' },
            { path: 'reservations', loadChildren: './pages/patrimony/reservations/reservations.module#ReservationsPageModule' },
            { path: 'expenses', loadChildren: './pages/financial/expenses/expenses.module#ExpensesPageModule' },
            { path: 'revenues', loadChildren: './pages/financial/revenues/revenues.module#RevenuesPageModule' },
            { path: 'extracts', loadChildren: './pages/financial/extracts/extracts.module#ExtractsPageModule' },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
