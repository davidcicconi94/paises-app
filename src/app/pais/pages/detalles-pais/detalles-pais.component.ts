import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.css'],
})
export class DetallesPaisComponent implements OnInit {
  pais!: Pais;
  paisInfo: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.buscarPais(param['id'])),
        tap(console.log)
      )
      .subscribe((paisArr: any) => {
        paisArr.forEach((data: Pais) => {
          this.pais = data;
        });
      });
  }

  back(): void {
    this.location.back();
  }
}
