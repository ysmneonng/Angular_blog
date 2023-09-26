import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  
  @Input()
  photoCover:string = "https://i.pinimg.com/564x/bb/95/81/bb9581953b71ef046b994b1023416fa9.jpg"
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor(){ }

  ngOnInit(): void{ }
}
