const fs = require('fs');



//Borrar archivos

//fs.unlinkSync('./del.txt')



//Mover archivos

/*
var oldPath = './origen/file.txt'
var newPath = './destino/file.txt'

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})
*/



//Copiar archivos

/*
fs.copyFile('./origen/file.txt', './destinoCopias/file.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });
  */


  
//Renombrar archivos

/*
fs.rename( './origen/file.txt', './origen/fileRenamed', (err) => {
    if (err) throw err;
    console.log('renamed');
  });
  */



//Crear carpeta si no existe

/*
  if (!fs.existsSync('./nuevaCarpeta')){
    fs.mkdirSync('./nuevaCarpeta');
}
*/



//Borrar carpeta vacia

/*
fs.rmdir('./nuevaCarpeta', function(err) {
    if (err) {
      throw err
    } else {
      console.log("Successfully removed the empty directory!")
    }
  })
  */



  //Borrar carpeta con archivos
/*
  const path = require("path")

const removeDir = function(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)

    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename)
        } else {
          fs.unlinkSync(path + "/" + filename)
        }
      })
      fs.rmdirSync(path)
    } else {
      fs.rmdirSync(path)
    }
  } else {
    console.log("Directory path not found.")
  }
}

pathToDir = './nuevaCarpeta'

removeDir(pathToDir)
*/