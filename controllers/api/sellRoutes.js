// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to listing and sell products
const router = require("express").Router();
const { Product } = require("../../models");
const withAuth = require('../../utils/auth')

// ⤵️============ ✅tested with json object input: 200 ok =================
// create a new product to sell ((localhost:3001/api/sell)
// **rb** added withAuth and updated 
router.post("/", withAuth, async (req, res) => { // ⭐️TODO: add withAuth once login is working
  // router.post("/", withAuth, async (req, res) => {
  try {
    const newProduct = await Image.create({
      ...req.body,
      //🐙 **rb** commented out this bit just for now while I check if form submission works **rb** 🐙
      user_id: req.session.user_id,
    });
    // comment out below after login is working
    res.status(200).json({
      message: "Product has been successfully added!",
      product: req.body,
    });
    // res.render('new-listing');
    // ⭐️TODO: add login session once login is working⤵️
    // res.render('new-Product', { products, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
