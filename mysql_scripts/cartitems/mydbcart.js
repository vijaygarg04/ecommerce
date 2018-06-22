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
        console.log("three");
        
        connection.query(`INSERT INTO cart (title, description, price,img,quantity) VALUES(?,?,?,?,?
            )`,[title,description,+(price.split(" ")[1]),img,quantity],function(err,res){
                if(err){
                    console.log('------');
                    
                    reject(err);
                }else{
                    console.log("---------");
                    
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
function getitemswithtitlefromcart(title){
    console.log("hello");
    
    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM cart where title='${title}'`,
        function(err,rows,cols){
            if(err){
                console.log(err);
                
                reject(err);
            }else{

                console.log(rows);
                resolve(rows); 
            }
           
        })
    })
}
function updatequantity(title,quantity){
    return new Promise(function(resolve,reject){
        connection.query(`UPDATE cart SET quantity=${quantity} WHERE title='${title}'`,
    function(err,rows){
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
    insertincart,
    getitemswithtitlefromcart,
    updatequantity
}


