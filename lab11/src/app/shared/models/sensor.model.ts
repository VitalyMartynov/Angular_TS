export class Sensor {

  public id: number;

  public name: string;

  public status: boolean;

  constructor(id: number, name: string, status = (Math.random() > 0.5)) {

    this.id = id;

    this.name = name;

    this.status = status;
  }
}
