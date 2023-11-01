import { Vehicle } from "./vehicle.js";

export class Drone extends Vehicle {
    constructor(licence, model) {
        super(licence, model);
        this.airTimeHours = null;
        this.base = null;
    }
}
