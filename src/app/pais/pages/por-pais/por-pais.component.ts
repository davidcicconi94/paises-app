import { Component } from '@angular/core';
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

  constructor(private paisService: PaisService) {}

  buscar(resultado: string) {
    this.isError = false;
    this.resultado = resultado;
    console.log(this.resultado);

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
}
