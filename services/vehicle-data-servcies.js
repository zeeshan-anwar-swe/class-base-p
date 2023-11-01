import { Drone } from "../classes/drone.js";
import { Car } from "../classes/car.js";
import { VehicleDataError } from "./vehicle-data-error.js";

export class VehicleDataServices {
    constructor() {
        this.car = [];
        this.drone = [];
        this.error = [];
    }

    loadCar(car) {
        try {
            let c = new Car(car.licence, car.model);
            c.miles = car.miles;
            c.bodyc = car.body;
            return c;
        } catch (e) {
            this.error.push(new VehicleDataError("Error in loading car", car));
        }

        return null;
    }

    loadDrone(drone) {
        try {
            let d = new Drone(drone.licence, drone.model);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch (e) {
            this.error.push(
                new VehicleDataError("Error in loading drone", drone)
            );
        }
        return null;
    }

    loadData(vehicleData) {
        for (let vData of vehicleData) {
            switch (vData.type) {
                case "car":
                    const car = this.loadCar(vData);
                    this.car.push(vData);
                    break;

                case "drone":
                    const drone = this.loadDrone(vData);
                    this.drone.push(vData);
                    break;

                default:
                    const e = new VehicleDataError("Invalid Data type", vData);
                    this.error.push(e);
                    break;
            }
        }
    }
}
