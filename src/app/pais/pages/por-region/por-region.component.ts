import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  resultado: string = '';
  paises: Pais[] = [];
  isError: boolean = false;

  placeholder: string = 'Region...';

  constructor(private PaisService: PaisService) {}

  buscar(region: string) {
    this.isError = false;
    this.resultado = region;

    this.PaisService.buscarRegion(region).subscribe(
      (data: any) => {
        this.paises = data;
        console.log(typeof data);
      },
      (error) => {
        this.isError = true;
        this.paises = [];
      }
    );
  }
}
