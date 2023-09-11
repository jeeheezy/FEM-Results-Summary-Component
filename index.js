let jsonData;
let avgScore = 0;
const summaryOne = document.querySelector(".categories .category:first-child");
const summaryTwo = document.querySelector(".categories .category:nth-child(2)");
const summaryThree = document.querySelector(".categories .category:nth-child(3)");
const summaryFour = document.querySelector(".categories .category:nth-child(4)");
const summary = [summaryOne, summaryTwo, summaryThree, summaryFour];
const gradeScale = [
  {"min": 1, "value": "Perfect" },
  {"min": 0.7, "value": "Great" },
  {"min": 0.5, "value": "Mediocre" },
  {"min": 0.3, "value": "Poor" }
]

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;

    processData(jsonData);
    })
  .catch(error => {
    console.error('Error:',error)    

  });

function processData(data){
  summary.forEach((summary,index) => {
    const icon = document.createElement("img");
    icon.src = data[index].icon;
    icon.classList.add("icon");
    const category = document.createElement("h2");
    category.classList.add("category-title");
    category.innerHTML = data[index].category;
    const score = document.createElement("p");
    const iconandcategory = document.createElement("div");
    iconandcategory.appendChild(icon);
    iconandcategory.appendChild(category);
    iconandcategory.classList.add("iconandheader")
    score.classList.add("scorefromhundred");
    score.innerHTML = `<span class="score">${data[index].score}</span> / 100`;
    avgScore += data[index].score;
    summary.appendChild(iconandcategory);
    summary.appendChild(score);
  })
  
  avgScore = Math.round(avgScore/summary.length);
  document.querySelector('.average-score').innerHTML = avgScore;
  for (upperbound of gradeScale) {
    if (avgScore/100 > upperbound.min) {
      document.querySelector(".grade").innerHTML = upperbound.value;
      break;
    }
  }
  
}


// kept for temporary testing, switch to fetch for production
// jsonData = [
//   {
//     "category": "Reaction",
//     "score": 80,
//     "icon": "./assets/images/icon-reaction.svg"
//   },
//   {
//     "category": "Memory",
//     "score": 92,
//     "icon": "./assets/images/icon-memory.svg"
//   },
//   {
//     "category": "Verbal",
//     "score": 61,
//     "icon": "./assets/images/icon-verbal.svg"
//   },
//   {
//     "category": "Visual",
//     "score": 72,
//     "icon": "./assets/images/icon-visual.svg"
//   }
// ]

// summary.forEach((summary,index) => {
//   const icon = document.createElement("img");
//   icon.src = jsonData[index].icon;
//   icon.classList.add("icon");
//   const category = document.createElement("h2");
//   category.classList.add("category-title");
//   category.innerHTML = jsonData[index].category;
//   const score = document.createElement("p");
//   const iconandcategory = document.createElement("div");
//   iconandcategory.appendChild(icon);
//   iconandcategory.appendChild(category);
//   iconandcategory.classList.add("iconandheader")
//   score.classList.add("scorefromhundred");
//   score.innerHTML = `<span class="score">${jsonData[index].score}</span> / 100`;
//   avgScore += jsonData[index].score;
//   summary.appendChild(iconandcategory);
//   summary.appendChild(score);
// })

// avgScore = Math.round(avgScore/summary.length);
// document.querySelector('.average-score').innerHTML = avgScore;
// for (upperbound of gradeScale) {
//   if (avgScore/100 > upperbound.min) {
//     document.querySelector(".grade").innerHTML = upperbound.value;
//     break;
//   }
// }
