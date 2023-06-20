const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = 3307;

//MySQL 연결
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "wlaosxm13579",
    database: "rp_db",
});

app.use(cors({
    origin: "*", //출처 허용 옵션
    credentials: true, //응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, //응답 상태 200으로 설정
}));

//post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({extended: true}));

//서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

//home 서브디렉토리 진행
app.get("/api/home", (req,res) => {
    res.header("Acess-Control-Allow-Origin", "*");

    const sqlQuery = "SELECT * FROM rp_notice UNION SELECT * FROM rp_study UNION SELECT * FROM rp_daily";

    db.query(sqlQuery, (err, result) =>{
        res.send(result);
    });
});

//notice 서브디렉토리 진행
app.get("/api/rp_notice", (req,res) => {
    res.header("Acess-Control-Allow-Origin", "*");

    const sqlQuery = "SELECT * FROM rp_notice";

    db.query(sqlQuery, (err, result) =>{
        res.send(result);
    });
});

//study 서브디렉토리 진행
app.get("/api/rp_study", (req, res) =>{
    res.header("Acess-Control-Allow-Origin", "*");

    const sqlQuery = "SELECT * FROM rp_study";

    db.query(sqlQuery, (err, result) =>{
        res.send(result);
    });
});

//daily 서브디렉토리 진행
app.get("/api/rp_daily", (req, res) =>{
    res.header("Acess-Control-Allow-Origin", "*");

    const sqlQuery = "SELECT * FROM rp_daily";

    db.query(sqlQuery, (err, result) =>{
        res.send(result);
    });
});

//input관련 서브디렉토리 실행
app.use("/api/inputnothing", (req,  res) =>{
    console.log("아무 값도 입력 안 함.");
     //res.send("You did wrong. You have to go back");
     res.redirect('http://localhost:3000/wrongInput');
});

app.post("/api/inputnotice", (req, res) =>{
    var id = req.body.id;
    var title = req.body.title;
    var contents = req.body.contents;
    var media = req.body.media;
    var up_date = req.body.up_date;
    var up_time = req.body.up_time;
    var table = req.body.table;

    //칸을 비워놓고 input했을 경우 경고창이 뜨게 설정
    if(id == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else if(title == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else if(contents == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else{
        const sqlQuery = "INSERT INTO rp_notice(id, title, contents, media, up_date, up_time, whichTable) VALUES(?, ?, ?, ?, ?, ?, ?);";
    
        db.query(sqlQuery, [id, title, contents, media, up_date, up_time,table], (err, result, fields) =>{
            if(err) throw err;
            else{
                return res.redirect('http://localhost:3000/correctProcess');
            }   
        });
    }
    
});

app.post("/api/inputstudy", (req, res) =>{
    var id = req.body.id;
    var title = req.body.title;
    var contents = req.body.contents;
    var media = req.body.media;
    var up_date = req.body.up_date;
    var up_time = req.body.up_time;
    var table = req.body.table;

    //칸을 비워놓고 input했을 경우 경고창이 뜨게 설정
    if(id == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else if(title == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else if(contents == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else{
        const sqlQuery = "INSERT INTO rp_study(id, title, contents, media, up_date, up_time, whichTable) VALUES(?, ?, ?, ?, ?, ?, ?);";
    
        db.query(sqlQuery, [id, title, contents, media, up_date, up_time,table], (err, result, fields) =>{
            if(err) throw err;
            else{
                return res.redirect('http://localhost:3000/correctProcess');
            }   
        });
    }
});

app.post("/api/inputdaily", (req, res) =>{
    var id = req.body.id;
    var title = req.body.title;
    var contents = req.body.contents;
    var media = req.body.media;
    var up_date = req.body.up_date;
    var up_time = req.body.up_time;
    var table = req.body.table;

    //칸을 비워놓고 input했을 경우 경고창이 뜨게 설정
    if(id == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else if(title == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else if(contents == ""){
        res.redirect("http://localhost:3000/wrongInput");
    }else{
        const sqlQuery = "INSERT INTO rp_daily(id, title, contents, media, up_date, up_time, whichTable) VALUES(?, ?, ?, ?, ?, ?, ?);";
    
        db.query(sqlQuery, [id, title, contents, media, up_date, up_time,table], (err, result, fields) =>{
            if(err) throw err;
            else{
                return res.redirect('http://localhost:3000/correctProcess');
            }   
        });
    }
});

//delete 관련 서브디렉토리 실행
app.post("/api/delete", (req, res) => {
    var confirmId = req.body.confirmId;
    var num = req.body.num;
    var id = req.body.id;
    var table = req.body.table;

    if(id != confirmId){
        console.log("id 잘못 입력");
        console.log("confirmId : "+confirmId);
        console.log("id : "+id);
        res.redirect("http://localhost:3000/wrongProcess");
    }else if(id == null){
        console.log("id : "+id);
        res.redirect("http://localhost:3000/wrongProcess");
    }else{
        if(table == "notice") table = "rp_notice";
        else if(table == "study") table = "rp_study";
        else if(table == "daily") table = "rp_daily";
        else res.redirect("http://localhost:3000/wrongInput");

        //res.send(`id: ${id}, confirmId: ${confirmId}, num: ${num}, table: ${table}`);

        const sqlQuery = `delete from ${table} where num = ${num};`;

        db.query(sqlQuery,(err, result, fields) =>{
            if(err) throw err;
            else{
                return res.redirect('http://localhost:3000/correctProcess');
            }   
        });
    }
    //res.send(id+"/"+table);
});

//update 관련 서브디렉토리 설정
app.post("/api/updata", (req,res) => {
    var num = req.body.num;

    var confirmId = req.body.confirmId;
    var id = req.body.id;

    var title = req.body.title;
    var contents = req.body.contents;
    var media = req.body.media;
    var table = req.body.table;

    
    if(table == "notice") table = "rp_notice";
    else if(table == "study") table = "rp_study";
    else if(daily == "daily") table = "rp_daily";
    else{
        res.redirect("http://localhost:3000/wrongProcess");
    }

    if(confirmId != id){
        console.log("id 잘못 입력");
        console.log("confirmId : "+confirmId);
        console.log("id : "+id);
        res.redirect("http://localhost:3000/wrongInput");
    }else if(title == "" || null){
        console.log("title 잘못 입력");
        console.log("title : "+title);
        res.redirect("http://localhost:3000/wrongInput");
    }else if(contents == "" || null){
        console.log("contents 잘못 입력");
        console.log("contents : "+contents);
        res.redirect("http://localhost:3000/wrongInput");
    }else if(media == "" || null){
        const sqlQuery = `update ${table} set title="${title}", contents="${contents}" where num=${num};`;

        db.query(sqlQuery,(err, result, fields) =>{
            if(err) throw err;
            else{
                return res.redirect('http://localhost:3000/correctProcess');
            }   
        });
    }else{
        const sqlQuery = `update ${table} set title="${title}", contents="${contents}", media=${media} where num=${num};`;

        db.query(sqlQuery,(err, result, fields) =>{
            if(err) throw err;
            else{
                return res.redirect('http://localhost:3000/correctProcess');
            }   
        });
    }
});
