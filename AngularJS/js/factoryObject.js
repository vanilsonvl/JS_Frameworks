app.factory('ObjectHtml', function(){
    var ObjectHtml = function(){
        this.name = '';
        this.code = '';

        this.Hello = function(){
            console.log("Hello");
        }
    }

    return ObjectHtml;
});
