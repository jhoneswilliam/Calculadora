$('#tela').val(0);

$('#Limpar').click(function(){
	$('#tela').val(0);
})

angular.module("calculadora", []);

angular.module("calculadora").controller("calculadoraCtrl", function ($scope){
	$scope.novoNumero = function(numero){
		if($('#tela').val() == 0){
			$('#tela').val(numero);
		}else{
			$('#tela').val($('#tela').val() + numero);
		}
	}
	$scope.novoOperador = function(operador){
		var tela = $('#tela').val();
		var ultimoDigito = $('#tela').val().slice(tela.length - 1, tela.length);
		
		if(!isNaN(ultimoDigito)){
			$('#tela').val(tela + operador);
			;
		}else{
			tela = tela.slice(0,tela.length - 1) + operador;
			$('#tela').val(tela)
		}	
	}
	$scope.resultado = function(){
		var expressao = $('#tela').val();
		var primeiroOperando = "";
		var segundoOperando = "";
		var operador = "";
		for (var i = 0; i <= expressao.length - 1; i++) {
			if((!isNaN(expressao[i])) && (operador == "")){
				primeiroOperando += expressao[i];
			}
			if(isNaN(expressao[i])){
				operador = expressao[i];
			}
			if((!isNaN(expressao[i])) && (operador != "")){
				segundoOperando +=expressao[i];
			}
		};		
		primeiroOperando = parseFloat(primeiroOperando);
		segundoOperando = parseFloat(segundoOperando);

		console.log(primeiroOperando);	
		console.log(segundoOperando);	
		console.log(operador);	

		$('#tela').val(cacula(primeiroOperando,operador,segundoOperando));	
		function cacula(dig1,operacao,dig2){
			switch(operacao){
				case '+':return (dig1 + dig2); break;
				case '-':return (dig1 - dig2); break;
				case '/':return (dig1 / dig2); break;
				case '*':return (dig1 * dig2); break;
			}
		}				
	}
});

$( "#tela" ).focus(function() {
  $('#tela').blur();
});

$('#Excluir').click(function(){
	var tela = document.getElementById('tela').value;	
	if(tela != 0){
		if(tela.length <= 1){
			tela = 0;
		}else{
			tela = tela.slice(0,tela.length - 1);
		}
	}
	$('#tela').val(tela);	
});

$(document).keypress(function(e){
	if(e.keyCode == 13){
		console.log("implementar")
	}

	var tela = $('#tela').val();
	var ultimoDigito = $('#tela').val().slice(tela.length - 1, tela.length);
	var tecla;
	tecla = String.fromCharCode(e.which);

	if(!isNaN(tecla)){
		if(tela == 0){
			tela = tecla;
		}else{
			tela = tela + tecla;
		}
		$('#tela').val(tela);
	}else{
		adiciona(tecla);
	}		

	function adiciona(digito){
		switch(digito){
			case "/":
				$('#tela').val(function(value){
			 		return $('#tela').val() + digito;
				});
				break;
			case "*":
				$('#tela').val(function(value){
			 		return $('#tela').val() + digito;
				});
				break;
			case "+":
				$('#tela').val(function(value){
			 		return $('#tela').val() + digito;
				});
				break;
			case "-":
				$('#tela').val(function(value){
			 		return $('#tela').val() + digito;
				});
				break;
			case ".":
				$('#tela').val(function(value){
			 		return $('#tela').val() + digito;
				});
				break;
			case "=":
				var expressao = tela;
				var primeiroOperando = "";
				var segundoOperando = "";
				var operador = "";
				for (var i = 0; i <= expressao.length - 1; i++) {
					if((!isNaN(expressao[i])) && (operador == "")){
						primeiroOperando += expressao[i];
					}
					if(isNaN(expressao[i]) && (expressao[i] != ".")){
						operador = expressao[i];
					}
					if((!isNaN(expressao[i])) && (operador != "")){
						segundoOperando +=expressao[i];
					}
				};		
				primeiroOperando = parseFloat(primeiroOperando);
				segundoOperando = parseFloat(segundoOperando);

				console.log(primeiroOperando);	
				console.log(segundoOperando);	
				console.log(operador);	

				$('#tela').val(cacula(primeiroOperando,operador,segundoOperando));	
				function cacula(dig1,operacao,dig2){
					switch(operacao){
						case '+':return (dig1 + dig2); break;
						case '-':return (dig1 - dig2); break;
						case '/':return (dig1 / dig2); break;
						case '*':return (dig1 * dig2); break;
					}
				}
				break;
		}
	}
});

