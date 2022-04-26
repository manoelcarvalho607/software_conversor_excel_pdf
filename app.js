const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const table = require("./table");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWriter");



const leitor = new Reader();
const escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./planilha.csv"); //forma de escrever codigo assicrono de forma sincrona
    
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() + ".PDF",html);
}

main();
 