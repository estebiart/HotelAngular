import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import {HotelesService} from '../../services/hoteles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @HostBinding ('class') classes='row'
    hoteles: any =[];
    constructor(private hotelesService: HotelesService) { }
  
    ngOnInit(): void {
   this.getHoteles();
   
       
    }
    getHoteles(){
      this.hotelesService.getHoteles().subscribe(
        res=> {
          this.hoteles =res;
          console.log(this.hoteles )
        },
        err=>console.error(err)
      
      );
    }
    deleteHotel(id:string){
      this.hotelesService.deleteHotel(id).subscribe(
        res=> {
  
          this.getHoteles();
          
        },
        err=>console.error(err)
      
      );
      

    }

  }


