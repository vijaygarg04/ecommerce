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

function getAllitemfromproductlist(){
    return new Promise(function(resolve,reject){

        connection.query(`SELECT * FROM item`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows);
                
            }
        })

    })
    
}
function insertinproductlist(title,description,price,img){
    // console.log(title+description+price+img+'------');
    return new Promise(function(resolve,reject){
        connection.query(`INSERT INTO item (title,description,price,img) VALUES(?,?,?,?)`,
        [title,description,price,img],
        function(err,res){
                if(err){
                    reject(err);
                }else{
                    console.log('success');
                    
                    resolve();
                    
                }
            })
    })
}
exports=module.exports={
    insertinproductlist,
    getAllitemfromproductlist
}

