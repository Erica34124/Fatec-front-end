import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  imagens: any[] = [

  ];
constructor(http: HttpClient){
  http
    .get<any[]>("http://localhost:3000/flavio/photos")
    .subscribe(imagens => {
      
      this.imagens= imagens
      console.log(this.imagens);
    });
}

ngOnInit(): void {
}
 
  
}
