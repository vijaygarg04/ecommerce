const mysql=require('mysql2');

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'ecom',
        user:'root',
        password:'12345678',
        insecureAuth:true
    }
)


connection.query(`SELECT * FROM item`,
function(err,rows,cols){
    if(err){
        console.log(err);
    }else{
        console.log(" data_received_done");
        console.log(rows);
        console.log(cols);
        
    }
    connection.close();
})
