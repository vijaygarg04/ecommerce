const express= require('express');
const app=express();
const dbcart=require('./mysql_scripts/cartitems/mydbcart');
const dblist=require ('./mysql_scripts/productlist/mydblist');
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    dblist.getAllitemfromproductlist().
    then(function(items){
        console.log(items);
        
        res.render('category.ejs',{data:items});
    }).catch(function(err){
        res.send(err);
    });
    
})
app.get('/cart',function(req,res){
    
    dbcart.getallitemsfromcart().
    then(function(orders){
        console.log(orders);
        
        res.render('cart.ejs',{
            cart:orders
        })
    }).catch(function(err){
        res.send(err);
        
    });

});

app.get('/admin',function(req,res){
    
res.render('admin.ejs');
});
app.post('/additem',function(req,res){
    var data=req.body.json; 
     var ele=JSON.parse(data);
     var item=ele.item;
     var description=ele.description;
     var price=ele.price;
     var img=ele.image;
     dblist.insertinproductlist(item,description,price,img).
     then(function(){
         console.log('success');
         
         res.redirect('/cart');
     }).catch(function(err){
         console.log(err);
         res.send(err);
         
     })
});


app.listen(4444,function(){
console.log("SERVER STARTED AT 4444");

});