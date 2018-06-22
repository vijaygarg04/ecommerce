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
function insertincart(title,description,price,img,quantity){
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO cart (title, description, price,img,quantity) VALUES(
            )`,[title,description,price,img,quantity],function(err,res){
                if(err){
                    reject(err);
                }else{
                    resolve();
                } 
            })
    })
}
function getallitemsfromcart(){
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM cart`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}
exports=module.exports={
    getallitemsfromcart,
    insertincart
}


