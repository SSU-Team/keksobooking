// const fs = require(`fs`)

// fs.writeFileSync(`hello.txt`, `Hello from Node JS!`)

const fetchData = (callback) => {
  setTimeout( ()=> {
    callback("Done!")
  }, 2000 )
}

setTimeout

fetchData( (data) => {
  console.log(data)
})
