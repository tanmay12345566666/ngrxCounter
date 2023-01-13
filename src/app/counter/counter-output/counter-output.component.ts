import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  // @Input() counter:any;
  counter :any;
  constructor(private store:Store<{ counter: { counter : any} }>) {}
  ngOnInit() {
    this.store.select('counter').subscribe(data=> {
        this.counter = data.counter;
    })
  }
}
