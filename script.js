//get the form to js
let form_calculate = document.getElementById("calculate");

//add event listener
form_calculate.addEventListener("submit", function (event) {
  //prevent the page from refreshing
  event.preventDefault();

  //get form data
  let basicSalary = Number(document.getElementById("basic_salary").value);
  let benefits = Number(document.getElementById("benefits").value);

  //calculate gross salary
  function calculate_Gross_Salary(a, b) {
    let gross = a + b;
    return gross;
  }
  let gross_salary = calculate_Gross_Salary(basicSalary, benefits);
  document.getElementById("grossSalary").innerHTML = gross_salary;

  //calculate nssf
  function calculatenssf(a) {
    let nssfContribution = 0;
    if (a >= 0 && a <= 18000) {
      nssfContribution = a * 0.06;
    } else {
      nssfContribution = 0.06 * 18000;
    }
    return nssfContribution;
  }
  let nssf = calculatenssf(gross_salary);
  document.getElementById("nssf").innerHTML = nssf;

    // calculate Nhif
    function calculateNhif(x) {
        let nhif_contribution = 0;
    
        if (x > 0 && x <= 5999) {
          nhif_contribution = 150;
        } else if (x >= 6000 && x <= 7999) {
          nhif_contribution = 300;
        } else if (x >= 8000 && x <= 11999) {
          nhif_contribution = 400;
        } else if (x >= 12000 && x <= 14999) {
          nhif_contribution = 500;
        } else if (x >= 15000 && x <= 19999) {
          nhif_contribution = 600;
        } else if (x >= 20000 && x <= 24999) {
          nhif_contribution = 750;
        } else if (x >= 25000 && x <= 29999) {
          nhif_contribution = 850;
        } else if (x >= 30000 && x <= 34999) {
          nhif_contribution = 900;
        } else if (x >= 35000 && x <= 39999) {
          nhif_contribution = 950;
        } else if (x >= 40000 && x <= 44999) {
          nhif_contribution = 1000;
        } else if (x >= 45000 && x <= 49999) {
          nhif_contribution = 1100;
        } else if (x >= 50000 && x <= 59999) {
          nhif_contribution = 1200;
        } else if (x >= 60000 && x <= 69999) {
          nhif_contribution = 1300;
        } else if (x >= 70000 && x <= 79999) {
          nhif_contribution = 1400;
        } else if (x >= 80000 && x <= 89999) {
          nhif_contribution = 1500;
        } else if (x >= 90000 && x <= 99999) {
          nhif_contribution = 1600;
        } else {
          nhif_contribution = 1700;
        }
        return nhif_contribution;
      }
    
      let nhif = calculateNhif(gross_salary);
      document.getElementById("nhif").innerHTML = nhif;

  // calculate nhdf
  function calculateNDHF(gross) {
    nhdf = 0.015 * gross;
    return nhdf;
  }
  let nhdf = calculateNhif(gross_salary);
  document.getElementById("nhdf").innerHTML = nhdf;

  //calculate the taxable income

  function calculateTaxableIncome(gross,nssf,nhif,nhdf){
    let taxableIncome= gross-(nssf+nhif+nhdf)
    return taxableIncome
 }
 let taxableIncome=calculateTaxableIncome(gross_salary, nssf, nhif, nhdf)
 //document.getElementById("taxableIncome").innerHTML = taxableIncome;

   // calculate FINAL payee
   function calculatePAYEE(tax, relief = 2400) {
    let payee = 0;
    if (tax >= 0 && tax <= 24000) {
      payee = 0;
    } else if (tax > 24000 && tax <= 32333) {
      payee = 24000 * 0.1 + (tax - 24000) * 0.25 - relief;
    } else if (tax > 32333 && tax <= 500_000) {
      payee = 24000 * 0.1 + 8333 * 0.25 + (tax - 32333) * 0.3 - relief;
    } else if (tax > 500_000 && tax <= 800_000) {
      payee =
        (24000 * 0.1) +
        (8333 * 0.25) +
        (467667 * 0.3) +
        (tax - 500_000) * 0.325 -
        relief;
    } else {
      payee =
        (24000 * 0.1) +
        (8333 * 0.25) +
        (467667 * 0.3) +
        (300_000 * 0.325) +
        (tax - 800_000) * 0.35 -
        relief;
    }
    return payee;
  }
  let PAYEE = calculatePAYEE(taxableIncome);
  document.getElementById("payee").innerHTML = PAYEE;



  //calculate net_salary  ( net_salary = gross_salary - (nhif + nhdf +  nssf + payee) )

 function calculateNetSalary(a,b,c,d,e){
    let net=  a-(b+c+d+e)
    return net
 }
 let net = calculateNetSalary (gross_salary,nhif,nhdf,nssf,PAYEE);
  document.getElementById("netPay").innerHTML = net;

});

