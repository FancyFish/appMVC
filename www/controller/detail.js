angular.module('starter').controller('detailsController',function($state){
    var vm = this;
    var guitarristName=$state.params.guitarrist;
    switch(guitarristName){
        case 'Carl Johann Grimmark':
        vm.detalles={
            nombre: "C.J Grimmark",
            nacimiento:"1970/01/09",
            resumen:"Is one of the greatest power metal guitarrists",
            url:"img/grimmark.png"    
        };
    }
    vm.goBack= function(){
        $state.go('lista');

    };
});