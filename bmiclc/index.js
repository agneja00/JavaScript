// let firstName = "Agnieska";
// let secondName = "Jackevic";
// let pilnas = firstName + " " + secondName;

// alert(pilnas);

// let x = 123;
// let tipas = typeof x;

// console.log(tipas);

// let svoris = prompt("Koks jusu svoris? (kg)");
// svoris = Number(svoris);

// const ugis = Number(prompt("Koks jusu ugis? (cm)"));

// const daugiklis = 10_000;

// const BMI = (svoris / ugis ** 2) * daugiklis;

// alert(`Jusu BMI: ${BMI}`);


// const pradzia = 18;
// const valandos = Number(prompt("Kiek dabar valandu?"));
// const minutes = Number(prompt("Kiek dabar minuciu?"));

// let minuciuTikrinimas = minutes > 0;
// let valandosKeitimas = Number(minuciuTikrinimas);
// let skirtumasValandu = valandos + valandosKeitimas;
// let likutisValandu = pradzia - skirtumasValandu;

// let likutisMinuciu = (60 - minutes) * valandosKeitimas;

// alert(`Iki paskaitos liko ${likutisValandu}val. ir ${likutisMinuciu}min.`);

// const metai = prompt("Kurie dbr metai?");

// if (metai === "2022") {
//     alert("Tu tei");
// } else {
//     alert("tu netei");
// }

// const colour = prompt("Kokia spalva? (red, blue, yellow)");
// const model = prompt("Koks modelis? (metai)");
// const make = prompt("Kokia marke?(ferrari, bmw)");
// const mileage = prompt("Kokia rida?(Kiek nuvaziuota)");

// if (colour === "red") {
//     // yes
//     if (Number(model) > 2010) {
//         alert("Buy!");
//     }
//     else if(mileage < 50000) {
//         alert("Buy!");
//     }
//     else {
//         alert("Dont't buy!")
//     }
// }
// else {
//     //no
//     if (colour === "yellow")
//         // yes
//         if (make === "ferrari") {
//             alert("Buy!");
//         }
//         else {
//             alert("Don't buy!")
//         }
//     else {
//         alert("Don't buy!");
//     }
// }

// prompt("Definite Budget?");
// prompt("Known Champion for it?");
// prompt("Clear Project Scope?");
// prompt("Achievable, Timescale?");
// prompt("Happy to profit?");
// prompt("Alternative Funding?");

// if (answer === "yes")

// const cssSelector = "#some-element";
// const element = document.querySelector(cssSelector);

// element.className = "element-style";
// element.className += " active"
// console.log(element.className);

// function myFunction() {
//     console.log("function");
// }

// console.log("1");
// myFunction();
// console.log("2");
// myFunction();
// myFunction();
// myFunction();

// const button = document.querySelector("#my-button");

// let i = 0;

// function myFunction() {
//     i++; // i = i + 1;
//     button.innerText = i;
// }






// console.log - debugging
// kintamieji
// let ir const deklaravimas
// naršyklės funkcijos
// prompt, alert
// duomenų tipai
// string, number, boolean, null, undefined
// tipų tikrinimas typeof
// operatoriai
// ===, +, -, *, /, >, <, **, !==, >=, <=, %
// if () {},  else if () {}, else {}
// function () {}
// funkcija pasiimti elementą
// const element = document.querySelector(".query")
// elemento parametrai
// element.innerText
// element.className



// const bodyElement = document.querySelector("body");

// function changeMode() {
//     if (bodyElement.className === "light") {
//         bodyElement.className = "dark";
//     } else {
//         bodyElement.className = "light";
//     }
// }



// 1. salyga - jeigu sviesus fonas, tada fonas pasikeicia i tamsu
// sviesus fonas yra klase "light"
// Kad pasikeistu i tamsu, body class turi pasikeisti i "dark"

// 2. salyga - jeigu tamsus fonas, tada fonas pasikeicia i sviesu
// tamsus fonas yra klase "dark"
// Kad pasikeistu i sviesu, body class turi pasikeisti i "light"





/**
* Visa programa veiks tik paspaudus mygtuką.
* 0. Cleanup, pravalom viską iš praeitų atsaktymų,
*    klaidų tekstų.
*
* 1. paspaudžiamas mygtukas
*
* 2. paleidžia funkciją, kuri:
*
* 3. pasiimam reikšmes iš inputų
*
* 4. patikrinam reišmes iš inputų
*    SĄLYGA: (ar reikšmė yra daugiau už 0)
*
* 5. JEIGU inputai atitinka SĄLYGA
*    Atitinka: atlieka skaičiavimus
*              Užrašo skaičavimus
*    Neatitinka: išmeta klaidą
*
*
*   KĄ TURIME NUTRINTI?:
*   atsakymą,
*   klaidos tekstus
*
*
*
*  Senas reikšmes inputuose
*/

// 1. Sukurti BMI kalkuliatorių, kuris parodo ne svorio indeksą, o atsako ar mes turime viršsvorį ar ne.
// idx <= 18.5 - "Underweight"
// idx <= 25.0 - "Normal"
// idx >= 30.0 - "Overweight"
// idx >= 40.0 - "Obese"

// console.log("Labas");

// const heightInput = document.querySelector("#height");
// const weightInput = document.querySelector("#weight");
// const heightError = document.querySelector("#height-error");
// const weightError = document.querySelector("#weight-error");
// const result = document.querySelector("#result");

// console.log(heightInput, weightInput, heightError, weightError, result);

// function calculateBMI() {
//     heightError.innerText = "";
//     weightError.innerText = "";
//     result.innerText = "";
//     const heightCm = Number(heightInput.value);
//     const weightKg = Number(weightInput.value);

//     const isHeightValid = heightCm > 0;
//     const isWeightValid = weightKg > 0;

//     if (isHeightValid) {
//         if (isWeightValid) {
//             const BMI = (weightKg / heightCm / heightCm) * 10_000;
//             result.innerText = BMI;
//             heightInput.value = "";
//             weightInput.value = "";
//         } else {
//             weightError.innerText = "Error";
//         }
//     } else {
//         heightError.innerText = "Error";
//         if (!isWeightValid) {
//             weightError.innerText = "Error";
//         }
//     }
// }


// const height = 180;
// const weight = 90;
// // kadangi mes kai kurias reikšmes gauname iš inputų, jos gali būti neteisingos, dėl to turime jas patikrinti.
// // BOOLEAN
// const isHeightValid = Number(height) > 0; // tikra verte // true jei geras skaičius ir false jei 0 arba NaN
// const isWeightValid = Number(weight) > 0; // tikra verte // true jei geras skaičius ir false jei 0 arba NaN
// if (isHeightValid) {
//  if (isWeightValid) {
//  // A.
//  // mūsų success path
//  } else {
//  // B.
//  // svoris nevalidus
//  }
// } else {
//  // C.
//  // aukštis nevalidus
//  if (!isWeightValid) {
//  // B.
//  // svoris nevalidus
//  }
// }
// // Kad naudotis AND (&&) operatorium, abidvi sąlygos turi būti įgyvendintos.
// if (isHeightValid && isWeightValid) {
//  // A.
//  // Success path
//  console.log(true && true);
// } else {
//  if (!isHeightValid) {
//  // Neteisingas Svoris
//  // B.
//  // Klaida prie svorio inputo
//  }
//  // dėl ko čia nėra else?
//  if (!isWeightValid) {
//  // Neteisingas aukštis
//  // C.
//  // Klaida prie aukščio inputo
//  }
// }
// // // Jei bent viena sąlyga yra įgyvendinta, jis veiks.
// if (!isHeightValid || !isWeightValid) {
//  if (!isHeightValid) {
//  // Neteisingas Svoris
//  // B.
//  // Klaida prie svorio inputo
//  }
//  // dėl ko čia nėra else?
//  if (!isWeightValid) {
//  // Neteisingas aukštis
//  // C.
//  // Klaida prie aukščio inputo
//  }
// } else {
//  // A.
//  // Success path
//  console.log(true && true);
// }
// // _ !isHeightValid || !isWeightValid yra priešingas isHeightValid && isWeightValid
// console.log(
//  !(isHeightValid && isWeightValid) === !isHeightValid || !isWeightValid
// );
// // 2 operatoriai:
// // and - && IR
// // or - || ARBA

// UZDUOTYS:
// 2. Sukurti BMR kalkuliatorių
// For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
// For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

// To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:Sedentary (little or no exercise): calories = BMR × 1.2;
// Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
// Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
// Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; 
// andIf you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.

// suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// atsakomas koks mūsų aktyvumo lygis
// atsakomas kiek kalorijų mums reikia per dieną

 function calculateBMR() {
     // reikia duomenu: ugis, svoris, amzius, lytis, aktyvumas
     // reikia pasiimti inputus ir issaugoti juos kaip kintamuosius
     // dokumento

     const heightEl = document.querySelector("#height");
     console.log(heightEl)

     const weightEl = document.querySelector("#weight");
     console.log(weightEl)

     const ageEl = document.querySelector("#age");
     console.log(ageEl)

     const height = Number(heightEl.value);
     console.log(height);

     const weight = Number(weightEl.value);
     console.log(weight);

     const age = Number(ageEl.value);
     console.log(age);

     // input[name=gender]:checked
     // checkedE1. value

     // console.log(document.querySelector('input[name="gender"]:checked'));
     // const gender = document.querySelector('input[name="gender"]:checked').value;
     const genderEl = document.querySelector('input[name="gender"]:checked');
     let gender;

     if (genderEl) {
         gender = genderEl.value;
     }

     const activityEl = document.querySelector('input[name="activity"]:checked');
     let activity;

     if (activityEl) {
         activity = activityEl.value;
     }

     const isHeightValid = height > 0;
     const isWeightValid = weight > 0;
     const isAgeValid = age > 0;
     const isGenderValid = "man" === gender || "woman" === gender;

     const isActivityValid = "sedentary" === activity || "light" === activity || "moderateraly" === activity || "very" === activity || "extra" === activity;

     let activityLevel;

     if (activity === "sedentary") {
         activityLevel = 1.375;
     }
     else if (activity === "light") {
         activityLevel = 1.55;
     }
     else if (activity === "moderately") {
         activityLevel = 1.375;
     }
     else if (activity === "very") {
         activityLevel = 1.375;
     }
     else {
         activityLevel = 1.375;
     }

     const result = document.querySelector("#result");

     if (gender === "man") {
         const BMR = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
         const dailyCalories = BMR * activityLevel;
         result.innerText = `You need ${dailyCalories} calories/day`;
     }
     else {
         const BMR = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
         const dailyCalories = BMR * activityLevel;
         result.innerText = `You need ${dailyCalories} calories/day`;
     }

     if (!isHeightValid) {
         const heightError = document.querySelector("#height-error");
         heightError.innerText = `ERROR`;
     }
     if (!isWeightValid) {
         const weightError = document.querySelector("#weight-error");
         weightError.innerText = `ERROR`;
     }
     if (!isAgeValid) {
         const ageError = document.querySelector("#age-error");
         ageError.innerText = `ERROR`;
     }
     if (!isGenderValid) {
         const genderError = document.querySelector("#gender-error");
         genderError.innerText = `You need to select!`;
     }
     if (!isActivityValid) {
         const activityError = document.querySelector("#activity-error");
         activityError.innerText = `You need to select!`;
     }

 }





// const user = {
//     email: "myemail@gmail.com",
//     name: "Vardenis",
// };

// // create a function that logs user.email and user.name

// logUser(user.email, user.name)


// function logUser(email, name) {
//     console.log(email);
//     console.log(name);

// }


// 1. Sukurkite funkciją, kuri priima objektą:
// su "prekių kaina", "siuntimo kaina" ir "administraciniu mokesčiu"
// ir iš log'ina pvm (21 procentas), nuo sudėtos sumos.
// funkcija turi destruktūrizuoti tris atributus 


// iškviesti funkciją du kartus:


// const vartotojas = {
//     prekiuKaina: 160,
//     siuntimoKaina: 20,
//     administracinisMokestis: 10,
// }

// logPvm(vartotojas);

// function logPvm({ prekiuKaina, siuntimoKaina, administracinisMokestis }) {
//     console.log((prekiuKaina + siuntimoKaina + administracinisMokestis) * 0.21)
// }

// logPvm({
//     prekiuKaina: 160,
//     siuntimoKaina: 20,
//     administracinisMokestis: 10,
// })
