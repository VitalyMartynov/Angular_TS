import { Component } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Sensor } from './shared/models/sensor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sensors: Sensor[] = [];
  sName = '';
  sStatus = true;

  constructor() {

    for (let i = 0; i < 10; i++) {
      this.sensors.push(new Sensor(i, `Датчик_${i}`));
    }

    console.log(this.sensors);
  }

  onDeleteSensor(id: number) {

    this.sensors.splice(id, 1);
  }

  onAddSensor() {
    this.sensors.push(new Sensor(this.sensors.length + 1, this.sName, this.sStatus));
  }
}
