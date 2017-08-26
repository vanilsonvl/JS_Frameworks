appResource.factory('Book', function($resource){
	return $resource('api/index.php/livros/:livroId', {livroId: '@livroId'});
})

.controller('ResourceController', function($scope, Book){

	$scope.loadBook = function(){
 		Book.get(function(data){
 			$scope.message = data.mensagem; 		
 		});
 	};
 	
 	$scope.getBook = function(livroId){
 		Book.get({ livroId: livroId }, function(data){
 			$scope.message = data.mensagem;
 		});
 	};	
 	
 	$scope.saveBook = function(){
 		book = {
 			"id": 10,
 			"titulo": "Titulo Livro"
 		}
 		Book.save({}, book, function(data){
 			$scope.message = data.mensagem;
 		});
 	}
});