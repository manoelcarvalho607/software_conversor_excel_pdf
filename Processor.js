class Processor{
    static Process(data){
        var a = data.split("\r\n");
        var rows = [];

        a.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;

/* 
1- seperar cada linha em uma string diferente usando metodo split ("\n") 
2- criar um array para cada linha usando forEach  = a.forEach(row => { row.split(",");}) sendo assim cada linha sendo um elemento texto, vai retornar um array de cada 'palavra do texto'.
2- seperar uma string em partes, usando o metodo split, definir com qual caractere irar dividir a string( ",") cada corte vira um objeto um array 
*/