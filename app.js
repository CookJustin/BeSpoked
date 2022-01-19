
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const mongoose = require("mongoose")
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/bespokedDB", {
    useNewUrlParser: true,
});

//Database Tables
const productsSchema={
  Name: String,
  Manufacturer: String,
  Style: String,
  PurchasePrice: String,
  SalesPrice: String,
  Qty: Number,
  Commission: String
};
const Product = mongoose.model("Product",productsSchema);

const salespersonSchema = {
  firstName:String,
  lastName: String,
  address: String,
  phone: String,
  startDate: String,
  terminationDate: String,
  manager: String
}
const Salesperson = mongoose.model("Salesperson", salespersonSchema);

const customerSchema = {
  firstName:String,
  lastName: String,
  address: String,
  phone: String,
  startDate: String,
}
const Customer = mongoose.model("Customer", customerSchema);
const salesSchema = {
  product:String,
  salesperson: String,
  customer: String,
  salesDate: String,
}
const Sale = mongoose.model("Sale", salesSchema);
const discountSchema = {
  product: String,
  beginDate: String,
  endDate: String,
  discountPercentage: String
}
const Discount = mongoose.model("Discount", discountSchema);


//GET METHODS
app.get("/", function(req,res){
  res.render("bespoked");
})

app.listen(port, function(req,res){
  console.log("Server is running on port " + port);
});
