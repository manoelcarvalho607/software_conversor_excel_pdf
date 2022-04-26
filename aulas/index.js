const fs = require("fs");
const { json } = require("stream/consumers");


function modificarCategoria(nome,curso,categoria){

    fs.readFile("./usuario.json",{encoding:'utf-8'}, (err, data) => {

        if(err){
            console.log("Erro ao ler o arquivo" + err);
        }else{
           var conteudo = JSON.parse(data); // transforma string em objeto java script
           
           conteudo.nome = nome;
           conteudo.curso = curso;
           conteudo.categoria = categoria;
    
           fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err) => {
    
                if(err){
                    console.log("erro ao editar arquivo" + err);
                }
    
           });
        }
    
    })

};



modificarCategoria("jose","java","programação");

