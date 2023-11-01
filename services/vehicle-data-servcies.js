import { Drone } from "../classes/drone.js";
import { Car } from "../classes/car.js";

export class VehicleDataServices {
    constructor() {
        this.car = [];
        this.drone = [];
    }

    loadCar(car) {
        let c = new Car(car.licence, car.model);
        c.miles = car.miles;
        c.bodyc = car.body;
        return c;
    }

    loadDrone(drone) {
        let d = new Drone(drone.licence, drone.model);
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d;
    }

    loadData(vehicleData) {
        for (let vData of vehicleData) {
            switch (vData.type) {
                case "car":
                    const car = this.loadCar(vData);
                    this.car.push(vData);
                    break;

                case "drone":
                    const drone = this.loadDrone(vData)
                    this.drone.push(vData);
                    break;
            }
        }
    }
}
