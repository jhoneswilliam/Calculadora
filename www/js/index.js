/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {      
        console.log('Received Event: ' + id);
    }
};
