//DB connection
const mysql = require('mysql');//mysql 모듈 로드

const host = "localhost";

const con = mysql.createConnection({//mysql 접속 설정, DB 커넥션 생성
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'tjwls7',
    database: 'blog'
});

con.connect(function(error){//DB 접속
    if (error) {
        console.log(error);
    }
    console.log(results); 
});

con.end();//DB 접속 종료
//module.exports=con;