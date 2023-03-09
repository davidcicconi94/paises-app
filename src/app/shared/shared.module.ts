import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, FooterComponent],
  exports: [SidebarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
