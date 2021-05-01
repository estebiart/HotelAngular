import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foto } from 'src/app/models/Foto';
import { HotelesService } from 'src/app/services/hoteles.service';
@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  fotos: any =[];
  foto:Foto ={
    Url: '',

  }
  constructor(private hotelesService: HotelesService, private router:Router, private activedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    const params= this.activedRoute.snapshot.params;
    if (params.id){
      this.hotelesService.getFoto(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.foto= res;
   

        },
        err => console.log(err)
      )
    }
  }
  NewFoto(){
    
    this.hotelesService.saveFoto(this.foto).subscribe(valores =>{
      console.log(valores);
    })
    
  }
}
