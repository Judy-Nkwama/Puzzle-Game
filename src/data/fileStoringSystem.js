// Creating a text file
const fileContent = 'This is the sample file content'
const filename = 'sample.txt'

// Using the FileWriter API
const fileEntry = new Promise((resolve, reject) => {
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, (fs) => {
    fs.root.getFile(filename, { create: true, exclusive: false }, resolve, reject)
  })
})

fileEntry.then((file) => {
  file.createWriter((writer) => {
    writer.write(fileContent)
    console.log(`Success: File ${filename} has been created!`)
  })
}).catch(console.error)

// Reading a text file
const readFile = (filename) => {
  const reader = new FileReader()

  reader.onload = (event) => {
    console.log(`The content of the file is: ${event.target.result}`)
  }

  reader.readAsText(filename)
}

const readfileEntry = new Promise((resolve, reject) => {
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, (fs) => {
    fs.root.getFile(filename, { create: false, exclusive: false }, resolve, reject)
  })
})

readfileEntry.then((fileEntry) => {
  fileEntry.file(readFile.bind(this, fileEntry))
}).catch(console.error)

// Writing to a text file
const overwritefileEntry = new Promise((resolve, reject) => {
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, (fs) => {
    fs.root.getFile(filename, { create: false, exclusive: false }, resolve, reject)
  })
})

overwritefileEntry.then((fileEntry) => {
  fileEntry.createWriter((writer) => {
    writer.seek(writer.length)
    writer.write('\n This is the appended text')
    console.log(`Success: File ${filename} has been updated!`)
  })
}).catch(console.error)


// Create a new instance of FileReader
const reader = new FileReader();

// Define a function that will be called when the reader is done reading the file
reader.onload = () => {
  // Get the contents of the file as a string
  const fileContent = reader.result;

  // Split the file content into an array of lines
  const lines = fileContent.split('\n');

  // Log each line to the console
  for (let i = 0; i < lines.length; i++) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
  }
};

// Read the file
reader.readAsText(file);