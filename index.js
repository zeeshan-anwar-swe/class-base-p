import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { vehicleData } from "./services/vehicle-data.js";
import { VehicleDataServices } from "./services/vehicle-data-servcies.js";

const dataServices = new VehicleDataServices();
dataServices.loadData(vehicleData);

console.log("Car:", dataServices.car);
console.log("Drone:", dataServices.drone);
console.log("Error:", dataServices.error);
