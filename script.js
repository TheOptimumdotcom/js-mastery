        // TASK 1

        // NUMBER 1
// DUMEBI'S SCORES
let dumebiFirstScore = 96
let dumebiSecondScore = 108
let dumebiThirdScore = 89
let dumebiAverageScore = (dumebiFirstScore + dumebiSecondScore + dumebiThirdScore)/3
console.log("Dumebi's Average Score is" + " " + dumebiAverageScore)

// CIROMA'S SCORES
let ciromaFirstScore = 88
let ciromaSecondScore = 91
let ciromaThirdScore = 110
let ciromaAverageScore = (ciromaFirstScore + ciromaSecondScore + ciromaThirdScore)/3
console.log("Ciroma's Average Score is" + " " + ciromaAverageScore)


            // NUMBER 2
// COMPARING AVERAGE SCORES
if (dumebiAverageScore > ciromaAverageScore) {
      console.log(`Yaay, The award for the winner of the competition goes to Dumebi with an average score of ${dumebiAverageScore}`);
    } 
    else if (dumebiAverageScore < ciromaAverageScore) {
        console.log(`Yaay, The award for the winner of the competition goes to Ciroma with an average score of ${ciromaAverageScore}`);
    } 
    else if (dumebiAverageScore === ciromaAverageScore) {
      console.log(`The tournament has ended in a draw as both team finished with equal average scores`);
    } 
    else {
      console.log(`Invalid Data`);
    }


            // BONUS 1
// DUMEBI'S SCORES
let bonusDumebiFirstScore = 97
let bonusDumebiSecondScore = 112
let bonusDumebiThirdScore = 101
let bonusDumebiAverageScore = (bonusDumebiFirstScore + bonusDumebiSecondScore + bonusDumebiThirdScore)/3
console.log("Dumebi's Average Score is" + " " + bonusDumebiAverageScore)

// CIROMA'S SCORES
let bonusCiromaFirstScore = 109
let bonusCiromaSecondScore = 95
let bonusCiromaThirdScore = 123
let bonusCiromaAverageScore = (bonusCiromaFirstScore + bonusCiromaSecondScore + bonusCiromaThirdScore)/3
console.log("Ciroma's Average Score is" + " " + bonusCiromaAverageScore)


// COMPARING AVERAGE SCORES
if (bonusDumebiAverageScore > bonusCiromaAverageScore && bonusDumebiAverageScore >= 100) {
    console.log(`Yaay, The award for the winner of the competition goes to Dumebi with an average score of ${bonusDumebiAverageScore}`);
  } 
  else if (bonusDumebiAverageScore < bonusCiromaAverageScore && bonusCiromaAverageScore >= 100) {
      console.log(`Yaay, The award for the winner of the competition goes to Ciroma with an average score of ${bonusCiromaAverageScore}`);
  } 
  else if (bonusDumebiAverageScore === bonusCiromaAverageScore && bonusDumebiAverageScore >= 100 && bonusCiromaAverageScore >= 100) {
    console.log(`The tournament has ended in a draw as both team finished with equal average scores`);
  } 
  else if (bonusDumebiAverageScore === bonusCiromaAverageScore && bonusDumebiAverageScore >= 100 && bonusCiromaAverageScore < 100) {
    console.log(`Yaay, The award for the winner of the competition goes to Dumebi with an average score of ${bonusDumebiAverageScore}`);
  } 
  else if (bonusDumebiAverageScore === bonusCiromaAverageScore && bonusCiromaAverageScore >= 100 && bonusDumebiAverageScore < 100) {
    console.log(`Yaay, The award for the winner of the competition goes to Ciroma with an average score of ${bonusCiromaAverageScore}`);
  } 
  else {
    console.log(`Unable to determine winner of the tournament`);
  }



            // BONUS 2
// DUMEBI'S SCORES
let bonusTwoDumebiFirstScore = 97
let bonusTwoDumebiSecondScore = 112
let bonusTwoDumebiThirdScore = 101
let bonusTwoDumebiAverageScore = (bonusTwoDumebiFirstScore + bonusTwoDumebiSecondScore + bonusTwoDumebiThirdScore)/3
console.log("Dumebi's Average Score is" + " " + bonusTwoDumebiAverageScore)

// CIROMA'S SCORES
let bonusTwoCiromaFirstScore = 109
let bonusTwoCiromaSecondScore = 95
let bonusTwoCiromaThirdScore = 106
let bonusTwoCiromaAverageScore = (bonusTwoCiromaFirstScore + bonusTwoCiromaSecondScore + bonusTwoCiromaThirdScore)/3
console.log("Ciroma's Average Score is" + " " + bonusTwoCiromaAverageScore)


// COMPARING AVERAGE SCORES
if (bonusTwoDumebiAverageScore > bonusTwoCiromaAverageScore && bonusTwoDumebiAverageScore >= 100) {
    console.log(`Yaay, The award for the winner of the competition goes to Dumebi with an average score of ${bonusTwoDumebiAverageScore}`);
  } 
  else if (bonusTwoDumebiAverageScore < bonusTwoCiromaAverageScore && bonusTwoCiromaAverageScore >= 100) {
      console.log(`Yaay, The award for the winner of the competition goes to Ciroma with an average score of ${bonusTwoCiromaAverageScore}`);
  } 
  else if (bonusTwoDumebiAverageScore === bonusTwoCiromaAverageScore && bonusTwoDumebiAverageScore >= 100 && bonusTwoCiromaAverageScore >= 100) {
    console.log(`The tournament has ended in a draw as both team finished with equal average scores`);
  }  
  else {
    console.log(`Unable to determine winner of the tournament`);
  }




// TASK 2
    let score = prompt('Please enter your score below');
    
    if (score < 25) {
      console.log(`Your Grade is F`);
    } 
    else if (score >= 25 && score < 45) {
        console.log(`Your Grade is E}`);
    } 
    else if (score >= 45 && score < 50) {
        console.log(`Your Grade is D}`);
    } 
    else if (score >= 50 && score < 60) {
        console.log(`Your Grade is C}`);
    } 
    else if (score >= 60 && score < 80) {
        console.log(`Your Grade is B}`);
    } 
    else if (score >= 80) {
        console.log(`Your Grade is A}`);
    } 
    else {
      console.log(`Invalid Entry`);
    }
