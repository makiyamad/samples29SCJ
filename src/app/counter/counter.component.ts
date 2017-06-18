import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  change(evt) {
    this.count = evt.target.value;
    this.countChange.emit(this.count);
  }
}
