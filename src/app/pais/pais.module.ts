import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { DetallesPaisComponent } from './pages/detalles-pais/detalles-pais.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    DetallesPaisComponent,
    PorPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    NoResultsComponent,
  ],
  exports: [
    PorCapitalComponent,
    PorRegionComponent,
    DetallesPaisComponent,
    PorPaisComponent,
    NoResultsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PaisModule {}
