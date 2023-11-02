import { Drone } from "../classes/drone.js";
import { Car } from "../classes/car.js";
import { VehicleDataError } from "./vehicle-data-error.js";
export class VehicleDataServices {
    constructor() {
        this.car = [];
        this.drone = [];
        this.error = [];
    }

    validateCarData(car) {
        const requireProps = "licence model body miles".split(" ");
        let hasError = false;
        for (let field of requireProps) {
            if (!car[field]) {
                this.error.push(
                    new VehicleDataError(`Invalid field: ${field}`, car)
                );
                hasError = true;
            }
        }
        return !hasError;
    }

    validateDroneData(drone) {
        const requireProps = "licence model airTimeHours base".split(" ");
        let hasError = false;
        for (let field of requireProps) {
            if (!drone[field]) {
                this.error.push(
                    new VehicleDataError(`Invalid field: ${field}`, drone)
                );
                hasError = true;
            }
        }
        return !hasError;
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
                    if (this.validateCarData) {
                        const car = this.loadCar(vData);
                        car && this.car.push(vData);
                    } else {
                        const e = new VehicleDataError(
                            "Invalid car data",
                            vData
                        );
                        this.error.push(e);
                    }
                    break;

                case "drone":
                    if (this.validateDroneData) {
                        const drone = this.loadDrone(vData);
                        drone && this.drone.push(vData);
                    } else {
                        const e = new VehicleDataError(
                            "Invalid drone data",
                            vData
                        );
                        this.error.push(e);
                    }
                    break;

                default:
                    const e = new VehicleDataError("Invalid Data type", vData);
                    this.error.push(e);
                    break;
            }
        }
    }
}
