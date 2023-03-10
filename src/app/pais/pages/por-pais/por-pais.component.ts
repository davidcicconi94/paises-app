import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  resultado: string = '';
  isError: boolean = false;

  paises: Pais[] = [];
  sugerenciasPaises: Pais[] = [];

  mostrarSug: boolean = false;

  constructor(private paisService: PaisService) {}

  @Input() placeholder: string = 'Country...';

  buscar(resultado: string) {
    this.isError = false;
    this.resultado = resultado;

    this.paisService.buscarPais(this.resultado).subscribe(
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

    this.paisService.buscarCapital(resultado).subscribe((paises: any) => {
      this.sugerenciasPaises = paises.splice(0, 5);
    }),
      (err: any) => {
        this.sugerenciasPaises = [];
      };
  }

  buscarSugerido(resultado: string) {
    this.buscar(resultado);
    this.mostrarSug = false;
  }
}
