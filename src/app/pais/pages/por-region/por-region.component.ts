import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  public resultado: string = '';
  public paises: Pais[] = [];
  public isError: boolean = false;

  public placeholder: string = 'Region...';

  public mostrarSug: boolean = false;
  public sugerenciasRegion: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(region: string) {
    this.isError = false;
    this.resultado = region;

    this.paisService.buscarRegion(region).subscribe(
      (data: any) => {
        this.paises = data;
      },
      (error) => {
        this.isError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(resultado: string) {
    this.isError = false;
    this.resultado = resultado;
    this.mostrarSug = true;

    this.paisService.buscarRegion(resultado).subscribe((paises: any) => {
      this.sugerenciasRegion = paises.splice(0, 1);
    }),
      (err: any) => {
        this.sugerenciasRegion = [];
      };
  }

  buscarSugerido(resultado: string) {
    this.buscar(resultado);
    this.mostrarSug = false;
  }
}
