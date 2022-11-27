import path from 'path';

module.exports = {
  mode: 'development', // Режим сборки
  entry: './src/main.js', // Точка входа приложения
  output: { // Настройка выходного файла
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map', // Подключаем sourcemaps
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Где искать сборку
    },
    compress: true,
    port: 9000 // Веб адрес сборки
  }
};
