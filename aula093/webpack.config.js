const path = require("path"); // CommonJS
// Importando o módulo 'path' nativo do Node.js
// Usado para manipular caminhos de arquivos e diretórios de forma segura,
// independente do sistema operacional.

module.exports = {
  /** Modo de operação do Webpack
   * 'development': inclui ferramentas de depuração (como source-map),
   *                não minifica o código e mostra mensagens detalhadas.
   * 'production': otimiza e minifica tudo para o ambiente de produção (deploy).
   * 'none': desativa todas as otimizações automáticas.
   */
  mode: 'production',

  // 'entry': ponto de entrada onde o Webpack começa a ler o código.
  entry: './src/index.js',

  // 'output': define onde o Webpack vai gerar e salvar o bundle final.
  output: {
    // 'path': cria o caminho absoluto de saída.
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    // 'filename': nome do arquivo final gerado.
    filename: 'bundle.js'
  },

  // 'module': define regras sobre como tratar certos tipos de arquivos (js, css, imagens etc.).
  module: {
    rules: [
      {
        // 'exclude': usado para ignorar pastas ou arquivos desnecessários.
        exclude: /node_modules/,

        // 'test': aplica a regra apenas a arquivos que terminam com .js.
        // Obs: a barra invertida (\.) serve para escapar o ponto, e o '$' indica o fim da expressão.
        test: /\.js$/,

        use: {
          loader: 'babel-loader', // Usa o Babel para transpilar código JS moderno (ES6+).
          options: {
            presets: ['@babel/env'] // Define o preset do Babel (configuração padrão de compatibilidade).
          }
        }
      }
    ]
  },

  // 'devtool': gera um mapeamento entre o código original e o código empacotado.
  // Isso facilita encontrar a linha exata do erro durante o desenvolvimento.
  devtool: 'source-map'
};

// 'module.exports = { ... }' é a forma CommonJS (usada no Node.js) de exportar um objeto.
// O Webpack lê esse objeto para saber como gerar o bundle final.

