const http = require('http')

http.createServer( (req, res) => {
  const s = ``+
  `REQ.URL:           ${req.url}      \n` +
  `REQ.METHOD:        ${req.method}   \n` + 
  `REQ.HEADERS.HOST:  ${req.headers.host}  \n` +
  `___`;

  const username = req.url.indexOf(`?user=`) !== -1 ? req.url.slice(req.url.indexOf(`?user=`) + 6) : `matherfuckers`

  res.setHeader(`Content-Type`, `text/html`)
  res.write(`
    <html
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <h1>Hello, ${username}!</h1>
      </body>
    </html>
  `)
  res.end()
}).listen(3000)

