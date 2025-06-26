const menubtn=document.querySelector("#menu");
const navlink=document.querySelector(".nav-links");

menubtn.addEventListener('click',()=>{
    navlink.classList.toggle('active');
});

function favourites( name, price){
    if (event) event.preventDefault(); //a tage click honepe website reload hotiye isiliye
    let item = {name, price};
    let favourite= JSON.parse(localStorage.getItem("favourite")) || []
    const exists = favourite.find(fav=> fav.name===name); //jo user ne item select kiya fav me add karneko, woh phele se hai ya nhi chcek karneka
    if(!exists)
        {
        favourite.push(item) //favourite ke aaray me push kiyaa
        localStorage.setItem("favourite",JSON.stringify(favourite));
        alert(name + " added to favourites")
    }
    else{
        alert(name + " already in favourites")
    }
}




// let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
// localStorage.setItem("favourites", JSON.stringify(favourites));
// Imagine a box in your browser (called localStorage) that stores your favourite bouquets.
// localStorage.getItem("favourites")
// → Looks inside the box for a paper named "favourites".
// JSON.parse(...)
// → Reads that paper and turns it into a list (an array).
// || []
// → If there’s no paper inside the box (you haven’t added any favourites yet), it just gives you a new empty list so your code won’t break.


// localStorage.setItem("favourites", JSON.stringify(favourites));
// “Take my updated list of favourite items and save it in the browser under the name "favourites".”
// favourites is a list (array) of bouquet items the user liked.
// Example: [{ name: "Rose Delight", price: 550 }, { name: "Tulip Magic", price: 700 }]
// JSON.stringify(favourites) turns that list into a text string.
// Because browsers can only store text in localStorage, not full arrays/objects.
