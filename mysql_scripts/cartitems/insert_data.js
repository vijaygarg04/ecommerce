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

const insert={
    title:process.argv[2],
    description:process.argv[3],
    price:parseInt(process.argv[4])
    
}
connection.query(`INSERT INTO cart (title, description, price) VALUES(
'${ insert.title}',
'${insert.description}',
${insert.price}

)`,function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(" insertion_done");
        
    }
    connection.close();
})
