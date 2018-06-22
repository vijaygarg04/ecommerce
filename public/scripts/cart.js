$(function(){
    $(".plus").click(function(){
        // console.log($(this)[0].parentElement.parentElement);
        var item=$(this)[0].parentElement.parentElement.children[0].innerText;
        var price=$(this)[0].parentElement.parentElement.children[1].innerText;

        var quantity=$(this)[0].parentElement.parentElement.children[2].innerText;
        console.log(quantity);
        quantity=parseInt(quantity);
        var newquantity=quantity+1;
        var element={
            item:item,
            quantity:newquantity
        }
        if(quantity>=0&&quantity<=10){
        $.post(
            '/updatequantityincart',
            {
                'json':JSON.stringify(element)
            },
            function(){
        
            }
        );
        $(this)[0].parentElement.parentElement.children[2].innerText=newquantity;
        $(this)[0].parentElement.parentElement.children[3].innerText=newquantity*price;
    }else{
        alert("ITEM cannot be less than 0 and greater than 10")
    }

        // console.log(item);

        
    });
    $(".minus").click(function(){
        // console.log($(this)[0].parentElement.parentElement);
        var item=$(this)[0].parentElement.parentElement.children[0].innerText;
        var price=$(this)[0].parentElement.parentElement.children[1].innerText;

        var quantity=$(this)[0].parentElement.parentElement.children[2].innerText;
        console.log(quantity);
        quantity=parseInt(quantity);
        var newquantity=quantity-1;
        var element={
            item:item,
            quantity:newquantity
        }
        if(quantity>=0&&quantity<=10){
        $.post(
            '/updatequantityincart',
            {
                'json':JSON.stringify(element)
            },
            function(){
        
            }
        );
        $(this)[0].parentElement.parentElement.children[2].innerText=newquantity;
        $(this)[0].parentElement.parentElement.children[3].innerText=newquantity*price;
    }else{
        alert("ITEM cannot be less than 0 and greater than 10")
    }

        // console.log(item);

        
    });
})