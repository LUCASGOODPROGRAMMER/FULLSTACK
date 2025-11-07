class people {
    constructor(firstName, lastName, age, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job
    }

    infoPeople() {
        Object.keys(this).forEach((pessoa) => {
            console.log(`${this[pessoa]}`)
        } )
    }
}

// npm init -y
// npm install --save-dev @babel/cli @babel/core @babel/preset-env babel-loader webpack webpack-cli regenerator-runtime core-js@3
// --save-dev serve para dizer que os próximos pacotes instalados são dependências de desenvolvimento (devDependencies)
// @babel/core é o núcleo do Babel, um motor que faz a conversão de código
// @babel/cli Permite usar o babel pele linha de comando
// @babel/preset-env Um conjunto de regras que diz para o babel converter meu javascript moderno ES6+ para um javascript antigo que é compatível com todos navegadores antigos
// o Webpack é um module bundler - ele pega todos os arquivos do meu projeto e gera um único arquivo final otimizado, geralmente chamado bundle.js.
// webpack-cli interface de linha de comando
// babel loader é um plugin loader que conecta Babel ao Webpack, usado para poder lidar com código moderno. Webpack por si só não consegue interpretar ES6+.
// core-js é uma biblioteca de polyfills. Polyfill é um código que simula uma funcionalidade moderna que o navegador ainda não entende
// core-js@3 versão mais moderna
// regenerator-runtime é uma biblioteca responsável por executar código com async/await ou generetor functions em navegadores que não suportam esses recursos. O Babel transform o código async/await em código que usa generators, e quem faz funcionar os generators é o runtime

// npx babel js/main.js -o js/bundle.js --presets=@babel/env
// Rodando o babel para transpilar (converter) o js/main.js e gerar uma versão compatível chama js/bundle.js
