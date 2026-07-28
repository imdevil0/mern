// 21. Write a static method where the electricity units are
// passed as a parameter and calculate the total electricity bill
// according to the given conditions:
// • For first 50 units Rs. 0.50/unit
// • For next 150 units Rs. 0.75/unit
// • For next 250 units Rs. 1.20/unit
// • For unit above 250 Rs. 1.50/unit
// • An additional surcharge of 20% is added to the bill
// Example: Electricity units = 300
// For the first 50 units: Charge = 50 * 0.50 = Rs. 25
// For the next 150 units (units 51 to 200): Charge = 150 * 0.75 = Rs. 112.50
// For the next 100 units (units 201 to 300): Charge = 100 * 1.20 = Rs. 120
// Total bill = Rs. 25 + Rs. 112.50 + Rs. 120 = Rs. 257.50
// Surcharge (20%):
// Surcharge = 20% of 257.50 = 0.20 * 257.50 = Rs. 51.50
// Total Bill with Surcharge:
// Total bill = Rs. 257.50 + Rs. 51.50 = Rs. 309.00
// So The total electricity bill for 300 units is Rs. 309.00.

function calculateBill(units) {
  let total = 0;

  if (units <= 50) {
    total = units * 0.5;
  } else if (units <= 200) {
    total = 50 * 0.5;
    total += (units - 50) * 0.75;
  } else if (units <= 450) {
    total = 50 * 0.5;
    total += 150 * 0.75;
    total += (units - 200) * 1.2;
  } else {
    total = 50 * 0.5;
    total += 150 * 0.75;
    total += 250 * 1.2;
    total += (units - 450) * 1.5;
  }
  total += total * 0.2;

  return total;
}

console.log(calculateBill(300));
