import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/models/Calificacion';
import { HotelesService } from 'src/app/services/hoteles.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {
  calificacions: any =[];
  calificacion:Calificacion ={
    puntaje: 0,
    comentarios: '',
    IDHotel: 1,
    IDUser:1,

  }
  constructor(private hotelesService: HotelesService, private router:Router, private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    
  }
  

  NewCalificacion(){
    
    this.hotelesService.saveCalificacion(this.calificacion).subscribe(datos =>{
      console.log(datos);
    });
    
  }
}
