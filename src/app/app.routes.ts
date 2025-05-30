import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'pos',
    loadComponent: () => import('./pos/pos.page').then( m => m.PosPage)
  },
  {
    path: 'menu-managment',
    loadComponent: () => import('./menu-managment/menu-managment.page').then( m => m.MenuManagmentPage)
  },
  {
    path: 'pos-take-away',
    loadComponent: () => import('./pos-take-away/pos-take-away.page').then( m => m.PosTakeAwayPage)
  },
  {
    path: 'table-zone',
    loadComponent: () => import('./table-zone/table-zone.page').then( m => m.TableZonePage)
  },
  {
    path: 'best-sale-menu',
    loadComponent: () => import('./best-sale-menu/best-sale-menu.page').then( m => m.BestSaleMenuPage)
  },
  {
    path: 'discounts-taxe',
    loadComponent: () => import('./discounts-taxe/discounts-taxe.page').then( m => m.DiscountsTaxePage)
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'all-member',
    loadComponent: () => import('./all-member/all-member.page').then( m => m.AllMemberPage)
  },
  {
    path: 'stock-products',
    loadChildren:()=> import('./stock-products/stock-products.routes').then((m) => m.stockProductsRoutes),
  },   
  {
    path: 'setting-restaurant-info',
    loadComponent: () => import('./setting-restaurant-info/setting-restaurant-info.page').then( m => m.SettingRestaurantInfoPage)
  },
   {
    path: 'settings',
    loadChildren:()=> import('./settings/settings.routes').then((m) => m.stockProductsRoutes),
  },





];
