const path = require('path');

module.exports = {
  mode: 'development', // Режим сборки
  entry: './src/main.js', // Точка входа приложения
  output: { // Настройка выходного файла
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map',
  devServer: {
    static:{
      directory: path.join(__dirname,'public') // Где искать сборку
    },
    compress: true,
    port: 8080 // Веб адрес сборки
  }
};
