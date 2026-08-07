// // let div = document.querySelector("div");
// // console.log(div);


// // getattribute use
// // let id = div.getAttribute("id");
// // console.log(id);

// // let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));

// //let div = document.querySelector("div");
// //console.log(div);

// let newBTN = document.createElement("button");
// newBTN.innerText = "click me"
// console.log(newBTN);


// let div = document.querySelector("div");
// //div.append(newBTN);  

// // append for ending
// // prepend for starting
// // after out of box last me 
// // before use out of box op top

// //div.prepend(newBTN);
// //div.before(newBTN);
// div.after(newBTN);


// same as p ...etc

let newHeading = document.createElement("h1");
newHeading.innerHTML= "<i> hi i am a new!</i>";

document.querySelector("body").prepend(newHeading);

// for remove 

let para = document.querySelector("p");
para.remove();

//newHeading.remove(