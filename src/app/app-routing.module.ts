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
    path: 'guest',
    loadChildren: () => import('./guest/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./farmer/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'farmer',
    loadChildren: () => import('./farmer/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'brandmarks',
    loadChildren: () => import('./brandmarks/brandmarks.module').then( m => m.BrandmarksPageModule)
  },
  {
    path: 'capturer',
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
    path: 'admin',
    loadChildren: () => import('../app/admin/dashbord-page/dashbord-page.module').then( m => m.DashbordPagePageModule)
  },
  {
    path: 'admin',
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
    path: 'mmc',
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
  {
    path: 'region-farmers-page',
    loadChildren: () => import('./mmc/region-report-page/region-farmer-page/region-farmer-page.module').then( m => m.RegionFarmerPagePageModule)
  },
  {
    path: 'breed-page',
    loadChildren: () => import('./breed/breed-page/breed-page.module').then( m => m.BreedPagePageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/dashboard-page/dashboard-page.module').then( m => m.DashboardPagePageModule)
  },
  {
    path: 'farmers-result',
    loadChildren: () => import('./company/farmer-page/farmer-page.module').then( m => m.FarmerPagePageModule)
  },
  {
    path: 'farmer-details',
    loadChildren: () => import('./company/farmer-details-page/farmer-details-page.module').then( m => m.FarmerDetailsPagePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./farmer/insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./farmer/loan/loan.module').then( m => m.LoanPageModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./farmer/sell/sell.module').then( m => m.SellPageModule)
  },
  {
    path: 'visit',
    loadChildren: () => import('./farmer/visit/visit.module').then( m => m.VisitPageModule)
  },
  {
    path: 'lost',
    loadChildren: () => import('./farmer/lost/lost.module').then( m => m.LostPageModule)
  },
  {
    path: 'account-verification',
    loadChildren: () => import('./account-verification/account-verification.module').then( m => m.AccountVerificationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
