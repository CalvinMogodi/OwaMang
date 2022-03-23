import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashbordPagePage } from './admin/dashbord-page/dashbord-page.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'guest-dashboard',
    loadChildren: () => import('./guest/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'farmer-dashboard',
    loadChildren: () => import('./farmer/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'brandmarks',
    loadChildren: () => import('./brandmarks/brandmarks.module').then( m => m.BrandmarksPageModule)
  },
  {
    path: 'capturer-dashboard',
    loadChildren: () => import('./capturer/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-livestock',
    loadChildren: () => import('./capturer/add-livestock/add-livestock.module').then( m => m.AddLivestockPageModule)
  },
  {
    path: 'location-autocomplete',
    loadChildren: () => import('./location-autocomplete/location-autocomplete.module').then( m => m.LocationAutocompletePageModule)
  },{
    path: 'admin-dashboard',
    loadChildren: () => import('../app/admin/dashbord-page/dashbord-page.module').then( m => m.DashbordPagePageModule)
  },
  {
    path: 'admin-dashboard',
    component: DashbordPagePage,
    children:[
      {
        path: 'approved-live-stock-page',
        loadChildren: () => import('./admin/approved-live-stock-page/approved-live-stock-page.module').then( m => m.ApprovedLiveStockPagePageModule)
      },
      {
        path: 'pending-live-stock-page',
        loadChildren: () => import('./admin/pending-live-stock-page/pending-live-stock-page.module').then( m => m.PendingLiveStockPagePageModule)
      }
    ]
  },   {
    path: 'add-edit-live-stock-page',
    loadChildren: () => import('./admin/add-edit-live-stock-page/add-edit-live-stock-page.module').then( m => m.AddEditLiveStockPagePageModule)
  },
  {
    path: 'mmc-dashboard-page',
    loadChildren: () => import('./mmc/dashboard-page/dashboard-page.module').then( m => m.DashboardPagePageModule)
  },
  {
    path: 'cattle-report-page',
    loadChildren: () => import('./mmc/cattle-report-page/cattle-report-page.module').then( m => m.CattleReportPagePageModule)
  },
  {
    path: 'log-report-page',
    loadChildren: () => import('./mmc/log-report-page/log-report-page.module').then( m => m.LogReportPagePageModule)
  },
  {
    path: 'region-report-page',
    loadChildren: () => import('./mmc/region-report-page/region-report-page.module').then( m => m.RegionReportPagePageModule)
  },
  {
    path: 'audit-report-page',
    loadChildren: () => import('./mmc/audit-report-page/audit-report-page.module').then( m => m.AuditReportPagePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
