let divs = document.querySelectorAll(".box");
//console.log(divs);

// divs[0].innerText = "new uuique value 1";
// divs[1].innerText = "new uuique value 2";
// divs[2].innerText = "new uuique value 3";


// by loop 

let ids = 1;
for (div of divs) {
    div.innerText= `new uique  value ${idx}`;
    idx++;
}


