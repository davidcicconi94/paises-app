import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  public resultado: string = '';
  public paises: Pais[] = [];
  public isError = false;

  public mostrarSug: boolean = false;
  public sugerenciasCapital: Pais[] = [];

  @Input() placeholder: string = 'Capital...';

  constructor(private paisService: PaisService) {}

  buscar(capital: string) {
    this.isError = false;
    this.resultado = capital;

    this.paisService.buscarCapital(capital).subscribe(
      (data: any) => {
        this.paises = data;
        console.log(data.capital[0]);
      },
      (err) => {
        this.isError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(resultado: string) {
    this.isError = false;
    this.resultado = resultado;
    this.mostrarSug = true;

    this.paisService.buscarCapital(resultado).subscribe((capital: any) => {
      this.sugerenciasCapital = capital.splice(0, 5);
    }),
      (err: any) => {
        this.sugerenciasCapital = [];
      };
  }

  buscarSugerido(resultado: string) {
    this.buscar(resultado);
    this.mostrarSug = false;
  }
}
