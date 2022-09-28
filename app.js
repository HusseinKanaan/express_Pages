import express from 'express'

const PORT = 9090
const app = express()

app.use((req, _, next) => {
    console.log('Request trifft ein:', req.method, req.url)
    next()
})

app.use(express.static('./assets'))
app.use(express.static('./public'))


app.get('/', (_, res) => { 
    res.send('ok')

})

app.use((_, res) => {
    res.status(404).send('die Seite ist gerade nicht zu erreichen!')
})

app.listen(PORT, () => console.log('Server runs on Port:', PORT))