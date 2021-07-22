
angular.module("meuMundo")
.controller("indexController", function($scope){
    $scope.titulo="Martinho";
    $scope.alunos=[
        {
            nome:"Martinho", nota1:1, nota2:3, nota3:5
        },
        {
            nome:"Correia", nota1:2, nota2:4, nota3:10
        },
        {
            nome:"Mussamba", nota1:7, nota2:8, nota3:6
        },
        {
            nome:"Djamila", nota1:10, nota2:8, nota3:10
        },
        {
            nome:"Rodrigues", nota1:10, nota2:10, nota3:10
        }
    ];

    $scope.busca="";
    $scope.editando=false;

    var init =function(){
        $scope.alunos.forEach(
            function(aluno){
                aluno.media=media(aluno);
            }
            
            
        );
       // resetForm();
    }

    var media =function(aluno){

        var media=(parseFloat(aluno.nota1) +parseFloat(aluno.nota2) +parseFloat( aluno.nota3))/3
        return media.toFixed(2);
             }
    $scope.addAluno= function(Aluno){
    Aluno.media=media(Aluno);
    $scope.alunos.push(Aluno);
    resetForm();
    $('#modal1').modal('close');

   };

    init();

    resetForm=function(){
        $scope.aluno = {
            nome: "", nota1: '', nota2: '', nota3: ''
        }
    }
    var alunoEditar;
    $scope.editarAluno =function(Aluno){
         $scope.editando=true;
         angular.copy(Aluno, $scope.aluno);
         $('#modal1').modal('open');
         alunoEditar=Aluno;

    };

    $scope.salvarAluno=function(Aluno){
        alunoEditar.nome=Aluno.nome;
        alunoEditar.nota1=Aluno.nota1;
        alunoEditar.nota2=Aluno.nota2;
        alunoEditar.nota3=Aluno.nota3;
        alunoEditar.media=Aluno.media;
        $('#modal1').modal('close');
    }

    $scope.deletarAluno=function (Aluno){

        for(var index in $scope.alunos){
            var aux=$scope.alunos[index];
            if(aux==Aluno){
                $scope.alunos.splice(index,1);
            }
        }
    }

    $scope.abreAddAluno=function(){
        $scope.editando=false
        $('#modal1').modal('open');
    }


});

