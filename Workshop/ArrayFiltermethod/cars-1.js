let cars = [{ model: "XUV500", brand: "Mahindra", color: "White", price: 1500000 },
{ model: "Etios", brand: "Mahindra", color: "White", price: 1500000 },
{ model: "800", brand: "swift", color: "blue", price: 1500000 },
{ model: "scorpio", brand: "Mahindra", color: "blue", price: 1900000 },
{ model: "Pantham", brand: "RR", color: "red", price: 9500000 },
{ model: "x1", brand: "BMW", color: "White", price: 4500000 },
{ model: "Swfit", brand: "Maruthi", color: "yellow", price: 500000 },
{ model: "q3", brand: "Audi", color: "White", price: 7500000 },
{ model: "Thar", brand: "Mahindra", color: "red", price: 1800000 },
{ model: "baleno", brand: "Maruthi", color: "White", price: 900000 },
{ model: "safari", brand: "Tata", color: "black", price: 2500000 },]

let new_Cars = cars.filter((car) => {
    return car.price >= 5000000
})
console.log(new_Cars)
