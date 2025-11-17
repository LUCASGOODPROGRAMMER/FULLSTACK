const fs = require("fs").promises; // file system, módulo do node js que nos permite interagir de diversas formas com o sistema de arquivos
const path = require("path"); // usado para lidar com diretórios

// BUSCA DE ARQUIVOS COM THEN E CATCH
// fs.readdir(path.resolve(__dirname)) // método readdir é usado para ler todos arquivos e pastas do diretório especificado de forma assíncrona, e no fim ele me retorna um array da busca realizada
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

// BUSCA DE ARQUIVOS COM FUNÇÃO ASSÍNCRONA
async function readdir(rootDir) {
  // caso não seja passado o parâmetro não tenha argumento, vai ser usado um diretório padrão
  rootDir = rootDir || path.resolve(__dirname);
  // esperando o file system ler todos os arquivos
  const files = await fs.readdir(rootDir);
  // chamando a função responsável por exibir ou tratar os dados buscados
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  // acessando diretamente o valor de cada elemento do array retornado pelo método readdir do módulo fs
  for (let file of files) {
    // pegando guardando o caminho completo do arquivo
    const fileFullPath = path.resolve(rootDir, file);

    // fazendo uma varredura nesses arquivos, recebendo informações sobre cada arquivo com o método stat
    const stats = await fs.stat(fileFullPath);

    // se tiver uma endpoint com extensão git eu ignoro
    if (/\.git/g.test(fileFullPath)) continue;

    // para ignorar os pacotes instalados
    if(/node_modules/g.test(fileFullPath)) continue

    // se a endpoint for um diretório
    if (stats.isDirectory()) {
        // passando o caminho desse diretório achado para o readdir
        readdir(fileFullPath);
        // pulando o laço atual, eu não que quero que liste os diretórios, somente arquivos.
        continue;
    }

    // exemplo de filtragem de saida
    if(!/\.css$/g.test(fileFullPath)) continue;
    
    // exibindo o nome do arquivo e seus dados (suas estatísticas)
    console.log(rootDir + ":", file); // usando o método isDirectory para saber se é um diretório (uma pasta que pode ser acessada) ou não, a endpoint exibida
  }
}

readdir("/home/lucas/Documentos/estudos/fullstack/");
