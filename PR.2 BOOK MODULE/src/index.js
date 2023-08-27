// const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const date = require("date-and-time");
const { connectDB } = require("./db/dbconnection")
const config = require("./config/config");
const routes = require("./routes/v1");
const app = express();
const http = require("http");

const category = require("./models/category")
// async function getInsert() {
//     const result = await category.create({
//         category_name: "Biscute ",
//         category_desc: "Best Quality,Dark chocalate"
//     })
//     console.log(result);
// }
// getInsert()

const addmission = require("./models/addmission")
// async function getSave() {
//     const result = await addmission.create([{
//         student_name: "abhay",
//         student_bday: "1999/11/20",
//         student_email: "abhay890@gmail.com"
//     },
//     {
//         student_name: "ayush",
//         student_bday: "2000/12/03",
//         student_email: "ayush110@gmail.com"
//     },
//     {
//         student_name: "Vinit",
//         student_bday: "2004/05/14",
//         student_email: "vinit123@gmail.com"
//     },
//     {
//         student_name: "Darshan",
//         student_bday: "2002/03/28",
//         student_email: "darshan900@gmail.com"
//     }])
//     console.log(result);
// }
// getSave();

// const user = require("./models/user.model");
// async function createUser() {
//     const result = await user.create({
//         first_name: "Sumit",
//         last_name: "Patel",
//         email: "smitpatel78@gmail.com",
//         password: "you@sp78"
//     })
//     console.log(result);
// }
// createUser()

const student = require("./models/student");
// async function getStdata() {
//     const result = await student.create([{
//         student_name: "Ronak",
//         student_email: "ronak45@gmail.com",
//         student_course: "G.I.M"
//     },
//     {
//         student_name: "Raul",
//         student_email: "rahul23@gmail.com",
//         student_course: 'CSE'
//     },
//     {
//         student_name: "Kishan",
//         student_email: "kishan54@gmail.com",
//         student_course: 'BCA'
//     }
// ])
//     console.log(result);
// }
// getStdata()
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


connectDB();

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number 3000!");
});