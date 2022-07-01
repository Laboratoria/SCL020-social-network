import express from 'express'

const app = express()

app.use(express.static('src'));


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/src/index.html')
    })

    app.get('*', (req, res)=> {
        res.redirect('/')
    })

    const PORT = process.env.PORT || 8000
    app.listen(PORT, ()=> { console.log(`Server running on port ${PORT}`)})
