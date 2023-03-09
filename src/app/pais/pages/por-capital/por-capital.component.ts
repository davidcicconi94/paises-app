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

  @Input() placeholder: string = 'Capital...';

  constructor(private paisService: PaisService) {}

  buscar(capital: string) {
    this.isError = false;
    this.resultado = capital;

    this.paisService.buscarCapital(capital).subscribe(
      (data: any) => {
        this.paises = data;
      },
      (err) => {
        this.isError = true;
        this.paises = [];
      }
    );
  }
}
