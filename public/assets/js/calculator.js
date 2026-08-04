// const loanAmountInput = document.querySelector(".loan-amount");
// const interestRateInput = document.querySelector(".interest-rate");
// const loanTenureInput = document.querySelector(".loan-tenure");

// const loanEMIValue = document.querySelector(".loan-emi .value");
// const totalInterestValue = document.querySelector(".total-interest .value");
// const totalAmountValue = document.querySelector(".total-amount .value");

// const calculateBtn = document.querySelector(".calculate-btn");

// // Function to update the loan amount
// const updateLoanAmount = (value) => {
//   loanAmountInput.value = value;
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
//   updateRangeBackground(loanAmountInput, value);
// };

// // Function to update the loan tenure
// const updateLoanTenure = (value) => {
//   loanTenureInput.value = value;
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
//   updateRangeBackground(loanTenureInput, value);
// };

// // Function to calculate the EMI
// const calculateEMI = () => {
//   let emi = (loanAmount * interest) / loanTenure;
//   return emi;
// };

// // Function to update the value
// const updateData = (emi) => {
//   loanEMIValue.innerHTML = Math.round(emi);
//   let totalAmount = Math.round(loanTenure * emi);
//   totalAmountValue.innerHTML = totalAmount;
//   let totalInterest = ((0.015 * loanTenure) + 1).toFixed(2);
//   totalInterestValue.innerHTML = totalInterest;
//   const loanTenureValueElement = document.querySelector(".loan-tenure-value");
//   loanTenureValueElement.innerHTML = loanTenure; 
// };

// // Function to update the input values
// const refreshInputValues = () => {
//   loanAmount = parseFloat(loanAmountInput.value);
//   loanTenure = parseFloat(loanTenureInput.value);
//   interest = (0.015 * loanTenure) + 1;
// };

// // Function to initialize the calculations
// const init = () => {
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
// };

// // Function to update the background color of the input ranges
// const updateRangeBackground = (input, value) => {
//   const percentage = ((value - input.min) / (input.max - input.min)) * 100;

//   input.style.background = `linear-gradient(to right, #044BD9 0%, #044BD9 ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
// };

// const range1Inputs = document.querySelectorAll(".calc__input-range1");
// const range2Inputs = document.querySelectorAll(".calc__input-range2");

// range1Inputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     updateRangeBackground(input, input.value);
//   });
// });

// range2Inputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     updateRangeBackground(input, input.value);
//   });
// });

// const mLoanElement = document.getElementById("mLoan");
// if (mLoanElement) {
//   mLoanElement.addEventListener("input", function() {
//     updateLoanAmount(this.value);
//   });
// }

// const mLoan3Element = document.getElementById("mLoan3");
// if (mLoan3Element) {
//   mLoan3Element.addEventListener("input", function() {
//     updateLoanTenure(this.value);
//   });
// }

// const loanAmountInput = document.querySelector(".loan-amount");
// const interestRateInput = document.querySelector(".interest-rate");
// const loanTenureInput = document.querySelector(".loan-tenure");

// const loanEMIValue = document.querySelector(".loan-emi .value");
// const totalInterestValue = document.querySelector(".total-interest .value");
// const totalAmountValue = document.querySelector(".total-amount .value");

// const calculateBtn = document.querySelector(".calculate-btn");

// // Function to update the loan amount
// const updateLoanAmount = (value) => {
//   loanAmountInput.value = value;
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
//   updateRangeBackground(loanAmountInput, value);
// };

// // Function to update the interest rate
// const updateInterestRate = (value) => {
//   interestRateInput.value = value;
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
//   updateRangeBackground(interestRateInput, value);
// };

// // Function to update the loan tenure
// const updateLoanTenure = (value) => {
//   loanTenureInput.value = value;
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
//   updateRangeBackground(loanTenureInput, value);
// };

// // Function to calculate the EMI (Simple Interest)
// const calculateEMI = () => {
//   const totalAmount = loanAmount * interest;
//   const emi = totalAmount / loanTenure;
//   return emi;
// };

// // Function to update the displayed values
// const updateData = (emi) => {
//   loanEMIValue.innerHTML = Math.round(emi);
//   const totalAmount = Math.round(loanAmount * interest);
//   totalAmountValue.innerHTML = totalAmount;
//   const totalInterest = Math.round(totalAmount - loanAmount);
//   totalInterestValue.innerHTML = totalInterest;
//   document.querySelector(".loan-tenure-value").innerHTML = loanTenure;
// };

// // Function to refresh input values and compute interest
// const refreshInputValues = () => {
//   loanAmount = parseFloat(loanAmountInput.value);
//   loanTenure = parseFloat(loanTenureInput.value);

//   // Treat the interest rate as a monthly percentage:
//   const monthlyInterestRate = parseFloat(interestRateInput.value) / 100;
  
//   // const annualInterestRate = parseFloat(interestRateInput.value);
//   // const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert annual to monthly decimal
//   interest = 1 + (monthlyInterestRate * loanTenure); // Total interest factor
// };

// // Function to initialize the calculator
// const init = () => {
//   refreshInputValues();
//   let emi = calculateEMI();
//   updateData(emi);
// };

// // Background update for sliders
// const updateRangeBackground = (input, value) => {
//   const percentage = ((value - input.min) / (input.max - input.min)) * 100;
//   input.style.background = `linear-gradient(to right, #044BD9 0%, #044BD9 ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
// };

// // Event listeners for sliders
// document.querySelectorAll(".calc__input-range1").forEach(input => {
//   input.addEventListener("input", () => updateRangeBackground(input, input.value));
// });

// document.querySelectorAll(".calc__input-range2").forEach(input => {
//   input.addEventListener("input", () => updateRangeBackground(input, input.value));
// });

// document.querySelectorAll(".calc__input-range3").forEach(input => {
//   input.addEventListener("input", () => updateRangeBackground(input, input.value));
// });

// // Linking sliders to update functions
// document.getElementById("mLoan")?.addEventListener("input", function() {
//   updateLoanAmount(this.value);
// });

// document.getElementById("mLoan2")?.addEventListener("input", function() { // Assuming ID "mLoan2" for interest rate
//   updateInterestRate(this.value);
// });

// document.getElementById("mLoan3")?.addEventListener("input", function() {
//   updateLoanTenure(this.value);
// });

// // Initialize the calculator
// init();

// Fixed Annual Interest Rate (18%)
const ANNUAL_INTEREST_RATE = 18;

// Inputs
const loanAmountInput = document.querySelector(".loan-amount");
const loanTenureInput = document.querySelector(".loan-tenure");

// Outputs
const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

// Update Loan Amount
const updateLoanAmount = (value) => {
  loanAmountInput.value = value;
  refreshInputValues();
  const emi = calculateEMI();
  updateData(emi);
  updateRangeBackground(loanAmountInput, value);
};

// Update Loan Tenure
const updateLoanTenure = (value) => {
  loanTenureInput.value = value;
  refreshInputValues();
  const emi = calculateEMI();
  updateData(emi);
  updateRangeBackground(loanTenureInput, value);
};

// Calculate EMI (Simple Interest)
const calculateEMI = () => {
  const totalAmount = loanAmount * interestFactor;
  const emi = totalAmount / loanTenure;
  return emi;
};

// Update UI
const updateData = (emi) => {
  loanEMIValue.innerHTML = Math.round(emi);

  const totalAmount = Math.round(loanAmount * interestFactor);
  totalAmountValue.innerHTML = totalAmount;

  const totalInterest = Math.round(totalAmount - loanAmount);
  totalInterestValue.innerHTML = totalInterest;

  document.querySelector(".loan-tenure-value").innerHTML = loanTenure;
};

// Refresh values & compute interest
const refreshInputValues = () => {
  loanAmount = parseFloat(loanAmountInput.value);
  loanTenure = parseFloat(loanTenureInput.value);

  // Convert 18% yearly → monthly decimal
  const monthlyInterestRate = (ANNUAL_INTEREST_RATE / 12) / 100;

  // Simple interest factor
  interestFactor = 1 + (monthlyInterestRate * loanTenure);
};

// Init
const init = () => {
  refreshInputValues();
  const emi = calculateEMI();
  updateData(emi);
};

// Slider background styling
const updateRangeBackground = (input, value) => {
  const percentage = ((value - input.min) / (input.max - input.min)) * 100;

  input.style.background = `linear-gradient(to right, #044BD9 0%, #044BD9 ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
};

// Slider UI listeners
document.querySelectorAll(".calc__input-range1").forEach(input => {
  input.addEventListener("input", () => updateRangeBackground(input, input.value));
});

document.querySelectorAll(".calc__input-range2").forEach(input => {
  input.addEventListener("input", () => updateRangeBackground(input, input.value));
});

// Hook sliders to logic
document.getElementById("mLoan")?.addEventListener("input", function() {
  updateLoanAmount(this.value);
});

document.getElementById("mLoan3")?.addEventListener("input", function() {
  updateLoanTenure(this.value);
});

// Start calculator
init();