import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
