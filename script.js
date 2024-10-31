// function right() {
//     document.getElementById("carriage").animate()
// }


// // Function to change the content of t2
// function modifyText() {
//     const t2 = document.getElementById("t2");
//     const isNodeThree = t2.firstChild.nodeValue === "three";
//     t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
// }
  
//   // Add event listener to table
//   const el = document.getElementById("outside");
//   el.addEventListener("click", modifyText, false);
  
function turnOn(){

    const musicBack = document.getElementById("music");
    
    
}

const teXt = document.getElementById("riddle")



function correct() {

    const reward = document.getElementById("yasss");
    reward.textContent = "Amazing work traveler, you have faced the all encompasing riddle.";
    setTimeout(() => {  reward.textContent=  "Now, press the mansion to go back to the BOBA MANOR!!"}, 2000);
    // reward.textContent=  "Now, press the mansion to go back to the BOBA MANOR!!";
    console.log("Hellow");
}


const answerA = document.getElementById("fire");
answerA.addEventListener("click", correct);

answerA.addEventListener("click", function() {
    correct()
});