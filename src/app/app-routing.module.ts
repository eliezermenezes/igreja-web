import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FramePage } from './pages/shared/frame/frame.page';
import { AuthenticateGuard } from './guards/authenticate.guard';

const routes: Routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    {
        path: 'pages',
        component: FramePage,
        canActivate: [AuthenticateGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
            { path: 'members', loadChildren: './pages/members/members.module#MembersPageModule' },
            { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
            { path: 'goods', loadChildren: './pages/goods/goods.module#GoodsPageModule' },
            { path: 'reservations', loadChildren: './pages/reservations/reservations.module#ReservationsPageModule' },
            { path: 'revenue', loadChildren: './pages/revenue/revenue.module#RevenuePageModule' },
            { path: 'expenses', loadChildren: './pages/expenses/expenses.module#ExpensesPageModule' },
            { path: 'extracts', loadChildren: './pages/extracts/extracts.module#ExtractsPageModule' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
