const fs = require('fs');
//Модуль fs (file system) нужен для работы с файлами и папками. 
//Он умеет создавать и удалять файлы и папки, переименовывать их, записывать и считывать данные.
const path = require('path');
//Модуль path предназначен для того, чтобы работать с путями в Node.js. 
//При помощи него можно получить имя файла, расширение файла, имя папки, указать путь к файлу.
const txtFromFile = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(txtFromFile, 'utf-8');
readStream.pipe(process.stdout);




