import { Component, OnInit } from '@angular/core';
import { Projeler } from '../projeler';
import { ProjelerService } from '../projeler.service';

@Component({
  selector: 'app-projesorgula',
  templateUrl: './projesorgula.component.html',
  styleUrls: ['./projesorgula.component.css']
})
export class ProjesorgulaComponent implements OnInit{
 
  projeList: Projeler[];

  constructor(private projelerService: ProjelerService){ 
    
  }
  filterText = ''

  ngOnInit(): void {
    this.getProjeler();
  }

 getProjeler(): void{
    this.projelerService.getProjelerList().subscribe(data => {
      this.projeList = data;
    });
  }
}
