var express = require('express');
var router = express.Router();
var userdb = require("../model/userDatabase")
var bcrypt = require('bcryptjs');
const { authenticateToken,generateToken } = require('../middleware/auth');
const { token } = require('morgan');
const fs = require("fs")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/shows",authenticateToken,(req,res)=>{
  userdb.find()
  .then((data) => {
   console.log(data); 
   res.send(data)
  }).catch((err) => {
    console.log(err);
    res.send(err)
  });
})
router.post("/signup",(req,res)=>{
  var password = req.body.Password
  var hash = bcrypt.hashSync(password, 8);
  console.log(hash);

  var data = {
    name:req.body.Name,
    email:req.body.Email,
    mobile:req.body.Number,
    password:hash,
  }
  userdb.insertMany(data)
  .then(data=>{
    console.log("done");
    res.send("Submission successful")
  })
  .catch(err=>{
    console.log("user exist");
    res.send("user exist")
  })
});

router.post('/login',async(req,res)=>{
  console.log(req.body);
  userdb.find({email:req.body.Email})
  .then((userData) => {
    console.log("dwewfser",userData);
    if (userData!==[]){
      if (bcrypt.compareSync(req.body.Password, userData[0].password)){
        console.log(true);
        var token = generateToken({id:userData[0]._id})
        console.log("login")
        res.cookie('token', token).send({message:"LogedIn",token:token})
        
      } // true , password check
      else{
        console.log("password incorrect");
        res.send({message:"password incorrect"})
      }
    }else{
      res.send({message:"User not exist"})
    }
  }).catch((err) => {
    console.log("err");
    res.send({message:"err"})
  });
});

router.delete("/delete",authenticateToken,(req,res)=>{
  console.log(req.userDetail.id);
  userdb.remove({_id:req.userDetail.id})
  .then((result) => {
    console.log("deleted");
    res.send("Deleted");
  }).catch((err) => {
    console.log(err);
    res.send("err");
  });
});


router.put("/editUser",authenticateToken,(req,res)=>{
  console.log(req.userDetail.id);

  userdb.updateMany({_id:req.userDetail.id},req.body)
  .then((result) => {
    console.log(result);
    res.send(result);
  }).catch((err) => {
    console.log(err);
    res.send(err);
  });
});





module.exports = router;
