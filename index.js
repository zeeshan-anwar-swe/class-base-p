import { vehicleData } from "./services/vehicle-data.js";
import { VehicleDataServices } from "./services/vehicle-data-servcies.js";

const serviceData = new VehicleDataServices();
serviceData.loadData(vehicleData);

const carTableBody = document.getElementById("car-table-body");
let carTableBodyContent = "";

const droneTableBody = document.getElementById("drone-table-body");
let droneTableBodyContent = "";

serviceData.car.map((item, index) => {
    carTableBodyContent += `
    <tr>
        <td class="mdl-data-table__cell--non-numeric">${item.model}</td>
        <td>${item.miles}</td>
        <td>${item.license}</td>
    </tr>
`;
    console.log(item);
});

serviceData.drone.map((item, index) => {
    droneTableBodyContent += `
    <tr>
        <td class="mdl-data-table__cell--non-numeric">${item.model}</td>
        <td>${item.airTimeHours}</td>
        <td>${item.base}</td>
    </tr>
`;
    console.log(item);
});

carTableBody.innerHTML = carTableBodyContent;
droneTableBody.innerHTML = droneTableBodyContent;
