const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = 5000;

const conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "test"
    }

);
conn.connect(function (err) {
    if (err) {
        console.log("error occurred while connecting");
    }
    else {
        console.log("connection created with Mysql successfully");
    }
});

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM member_tb";
    conn.query(sqlGet, (err, result) => {
        res.send(result);
    });

});

app.get("/api/get/asc", (req, res) => {
    const sqlGet = "SELECT * FROM `member_tb` ORDER BY `member_tb`.`Name` ASC";
    conn.query(sqlGet, (err, result) => {
        res.send(result);
    });

});

app.post("/api/post/", (req, res) => {
    const { Name, Phone_Number, Alternate_Number,Address, Gender, Email_Id,
        Date_of_birth,
        Door_no,
        Street,
        Area,
        Land_Mark,
        City,
        Pin_code,
        Native_city,
        Native_place,
        Reg,
        Designation,
        Amount,
        joining,
        Plan, } = req.body;
    const sqlInsert = 
    "INSERT INTO `member_tb`(`Name`, `Phone_Number`, `Alternate_Number`,`Address`, `Gender`, `Email_Id`, `Date_of_birth`, `Door_no`, `Street`, `Area`, `Land_Mark`, `City`, `Pin_code`, `Native_city`, `Native_place`, `Reg`, `Designation`, `Amount`, `joining`,`Plan`)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    conn.query(sqlInsert, [Name, Phone_Number,Alternate_Number, Address, Gender, Email_Id,
        Date_of_birth,
        Door_no,
        Street,
        Area,
        Land_Mark,
        City,
        Pin_code,
        Native_city,
        Native_place,
        Reg,
        Designation,
        Amount,
       joining,
        Plan,], (err, result) => {
        if (err) {
            console.log(err);
        } res.send(result);
    });
});

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM member_tb WHERE id = ?";
    conn.query(sqlRemove, id, (err, result) => {
        if (err) {
            console.log(err);
        }res.send(result);
    });
});


app.get("/api/get/:id", (req, res) => {
    const{id} = req.params;
    const sqlGet = "SELECT * FROM member_tb WHERE id = ?";
    conn.query(sqlGet, id, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) => {
    const{id} =req.params;
    const {Name, Phone_Number,Alternate_Number, Address,Gender, Email_Id,
        Date_of_birth,
        Door_no,
        Street,
        Area,
        Land_Mark,
        City,
        Pin_code,
        Native_city,
        Native_place,
        Reg,
        Designation,
        Amount,
        joining,
        Plan,    } = req.body;
    const sqlUpdate = "UPDATE member_tb SET Name=?, Phone_Number=?,Alternate_Number=?, Address=?, Gender=?, Email_Id=?,Date_of_birth=?,Door_no=?,Street=?,Area=?,Land_Mark=?,City=?, Pin_code=?,Native_city=?,Native_place=?,Reg=?,Designation=?,Amount=?,joining=?,Plan=?  WHERE id = ?";
    conn.query(sqlUpdate,[Name, Phone_Number, Alternate_Number,Address, Gender, Email_Id,
        Date_of_birth,
        Door_no,
        Street,
        Area,
        Land_Mark,
        City,
        Pin_code,
        Native_city,
        Native_place,
        Reg,
        Designation,
        Amount,
        joining,
        Plan,id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


app.get("/", (req, res) => { });


app.listen(PORT, () => {
    console.log(`server is running on port:`, PORT);
}
)
