import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
  ],
})
export class SharedModule {}
