
import productdb,{ bulkcreate} from "./Module.js";

let db = productdb("Productdb", {
    products: `++id, name, seller, price`
});

//INPUT TAGS
const userid = document.getElementById("userid");
const proname = document.getElementById("proname");
const seller = document.getElementById("seller");
const price = document.getElementById("price");

//BUTTONS TAGS

const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//INSERT EVENTS
btncreate.onclick=(event)=>{
let flag = bulkcreate(db.products,{
    name: proname.value,
    seller: seller.value,
    price: price.value

})
    console.log(flag);
}
