import { Component, HostBinding, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/Hotel';
import {HotelesService} from '../../services/hoteles.service';
import {ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @HostBinding('class') classes ='row';
  hotel:Hotel ={
    HotelName:'',
    Precio:0,
    created_at: new Date(),
    CategoriaDescripcion:'',

  }
  
  edit: boolean=false;
  constructor(private hotelesService: HotelesService, private router:Router, private activedRoute: ActivatedRoute) {
    
  } 

  ngOnInit(): void {
    const params= this.activedRoute.snapshot.params;
    if (params.id){
      this.hotelesService.getHotel(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.hotel = res;
          this.edit=true;

        },
        err => console.log(err)
      )
    }
  }
  NewHotel(){


    delete this.hotel.created_at;
    
    delete this.hotel.id_hotel;
    console.log(this.hotel);

    this.hotelesService.saveHotel(this.hotel).subscribe(datos =>{
      console.log(datos);
    });
    
  }

  updateHotel(){
    delete this.hotel.created_at;

    this.hotelesService.updateHotel(this.hotel.id_hotel, this.hotel)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/hoteles']);
  
      },
      err => console.log(err)
    )

  }
}
