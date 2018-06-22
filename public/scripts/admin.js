$(function(){

    $('#submititem').click(function(){
        
         var item=($('#title')[0]).value;
         var description=($('#description')[0]).value;
        var image=($('#imglink')[0]).value;
        var price=($('#price')[0]).value;
        var element={item:item,
                     description:description,
                     image:image,
                     price:price
                    }

        $.post(
            '/additem',
            {
                'json':JSON.stringify(element)
            },
            function(){

            }
        );
    });
});