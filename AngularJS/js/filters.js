app.filter('ola', function(){
    return function(name){
        if(name){
            return "Ola "  + name + "!";
        }else{
            return "Bem Vindo!";
        }
    }
});
