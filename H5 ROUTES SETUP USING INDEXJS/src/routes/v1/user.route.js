const express = require("express");

const router = express.Router();

router.get("/list",(req,res)=>{
  res.send(data)
})
// router.put("/update-details/:userId",(req,res)=>{
//   res.send(data)
// })

module.exports = router;

let data = [{
  "userid" : 1,
  "title" : "Okay",
  "body" : "Done"
},
{
  "userid" : 2,
  "title" : "Background",
  "body" : "Smoke"
}]

// // "create user"
// router.post(
//     "Create-user",
//     validate(userValidation.createUser),
//     userController.createUser
// );

// // "list"
// router.get(
//     "list",
//     validate(userValidation.getUserslist),
//     userController.getUserslist
// );

// // "update-details " "user_id"
// router.put(
//   "/update-details/:userId",
//     validate(userValidation.updateUserDetails),
//     userController.updateUserDetails
// );

// // "delete"  "user_id"
// router.delete(
//   "/delete-user/:userId",
//     validate(userValidation.deleteUserById),
//     userController.deleteUserById,
// );

// "list"
