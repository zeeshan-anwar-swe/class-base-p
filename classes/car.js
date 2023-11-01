import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle  {
    constructor(licence, model) {
        super(licence, model);
        this.body = null;
        this.miles = null;
    }
}