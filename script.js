/* FACT GENERATOR */

/* factList array */
var factList = [
  '"There are an estimated 16.9 million people who menstruate living in poverty in the United States."',
  '"A study involving college-aged individuals who menstruate reported that 14.2% had experienced period poverty in the past year. An additional 10.0% experienced it every month."',
  '"Research found that almost two-thirds of women in the U.S. with a low income could not afford menstrual products in the last year, while nearly half sometimes had to choose between buying food or menstrual products."',
  '"As of June 2019, 35 states in the U.S. taxed menstrual products at rates between 4.7%, in Hawaii, and 9.9%, in Louisiana."',
  '"Period poverty refers to the social, economic, political, and cultural barriers to menstrual products, education, and sanitation."',
  '"A study of college-attending women found that 68.1% of participants who experienced period poverty had symptoms of moderate-to-severe depression."',
  '"People unable to access menstrual products have reported using rags, toilet paper, and children’s diapers. Some people have also used the menstrual products they did have for longer than intended."',
  '"A study in Bangladesh showed that 73% of women missed work for an average of 6 days a month. However, when the HERproject delivered sanitary pads and implemented a behavior change work-based intervention, absenteeism dropped."',
  '"Globally, an estimated 500 million people who menstruate lack access to menstrual products and hygiene facilities."'];

/* testing array */
console.log(factList[0]);

/* variables for elements on the page and count (use to determine how many times to button is pushed to display a different fact) */
var fact = document.getElementById("fact");
var factButton = document.getElementById("factbutton");
var count = 0;

/* add event listener for the factButton but only if it is fully loaded */
if (factButton) {
  factButton.addEventListener("click", displayFact);
}

/* function for generating a fact */
function displayFact(){
  /* testing if the function ran */
  console.log("displayFact function");

  /* change fact */
  fact.innerHTML = factList[count];

  /* change count */
  count++;

  /* restart count if it has reached the number of facts in the array */
  if (count == factList.length){
    count = 0;
  }
}