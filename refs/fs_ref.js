const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw new Error(err)

//   console.log('folder was created')
// })

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world',
//   (err) => {
//     if (err) throw err
//     console.log('File was created')
//   }
// )

// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data)
//   }
// )

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err
    console.log('Good')
  }
)