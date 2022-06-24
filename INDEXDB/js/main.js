import productdb from "./Module.js";

let db = productdb("Productdb", {
    products: `++id, name, seller, price`
});

//INPUT TAGS
const userid = document.getElementById("userid");
const proname = document.getElementById("proname");
const seller = document.getElementById("seller");
const price = document.getElementById("price");

