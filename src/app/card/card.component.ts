import { Component, Input } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  constructor(private eventserves:EventService) { }

  @Input("s") event: any;
  getDDate(date: Date) {
    if(!date){
      return "Undefined";
    }
    var x = date.toString()

    var y = x.split("T")
    return y[0];
  }
  DeleteEv(){
    let obj = {
      id: this.event.ID
    }
    this.eventserves.DeleteEvent(obj).subscribe(x => {
      alert("course Deleted");
      document.location.reload();
    });
  }
}
