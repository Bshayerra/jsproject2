class Vehicle {
    constructor(name, manufacturer, Id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.vehicleId = Id;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, Id, carType) {
        super(name, manufacturer, Id);
        this.carType = carType;
    }
}

class Airplane extends Vehicle {
    constructor(name, manufacturer, Id, planeType) {
        super(name, manufacturer, Id);
        this.planeType = planeType;
    }
}

class Employee {
    constructor(name, employeeId, dateOfBirth) {
        this.name = name;
        this.employeeId = employeeId;
        this.dateOfBirth = dateOfBirth;
    }
}

class Driver extends Employee {
    constructor(name, employeeId, dateOfBirth, licenseId) {
        super(name, employeeId, dateOfBirth);
        this.licenseId = licenseId;
    }
}

class Pilot extends Employee {
    constructor(name, employeeId, dateOfBirth, licenseId) {
        super(name, employeeId, dateOfBirth);
        this.licenseId = licenseId;
    }
}

class Reservation {
    constructor(employeeId, vehicleId, reservationId) {
        this.reservationDate = new Date();
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationId = reservationId;
    }
}

// Create objects
const car1 = new Car('Car1', 'Toyota', 'C001', 'Sedan', 'Gasoline');
const car2 = new Car('Car2', 'Honda', 'C002', 'SUV', 'Electric');
const car3 = new Car('Car3', 'Ford', 'C003', 'Convertible', 'Gasoline');

const plane1 = new Airplane('Plane1', 'Boeing', 'P001', 'Commercial');
const plane2 = new Airplane('Plane2', 'Airbus', 'P002', 'Private');


// Function to find an employee by ID
function findEmployeeById(employeeId) {
    return (Employee.employeeId === employeeId);
}

// Function to find a vehicle by ID
function findVehicleById(vehicleId) {
    return (Vehicle.Id === vehicleId);
}

// Array to store reservations
const reservations = [];

// Function to check compatibility and make reservations
function makeReservation(employeeId, vehicleId) {
    const pilot = findEmployeeById(employeeId);
    const vehicle = findVehicleById(vehicleId); 

    if (pilot instanceof Pilot && vehicle instanceof Car) {
        console.log('Pilots cannot drive cars. They are not compatible.');
    } else if (pilot instanceof Pilot && vehicle instanceof Airplane) {
        const reservation = new Reservation(employeeId, vehicleId, generateReservationId());
        reservations.push(reservation);
        console.log('Reservation made successfully.');
    } else {
        console.log('Invalid combination of employee and vehicle.');
    }
}

// function to generate a unique reservation ID
function generateReservationId() {
    return new Date().getTime().toString();
}

// Print the content of the reservations array 
reservations.map(reservation => {
    console.log(reservation);
});