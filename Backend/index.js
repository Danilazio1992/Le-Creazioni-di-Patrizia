// IMPORT
const express = require('express')

// APP
const app = express()
const PORT = 3000

// MIDDLEWARE (fondamentale per leggere JSON dal frontend)
app.use(express.json())

// ROUTE BASE (test)
app.get('/', (req, res) => {
  res.send('API attiva 🚀')
})

// ROUTE PRODOTTI (esempio)
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Hydrogen System X16', price: 499 },
    { id: 2, name: 'Hydrogen System X28', price: 799 },
  ]

  res.json(products)
})

// ROUTE ORDINI (POST)
app.post('/api/orders', (req, res) => {
  const order = req.body

  if (!order || !order.products) {
    return res.status(400).json({ error: 'Dati ordine non validi' })
  }

  // qui in futuro salverai su DB
  console.log('Nuovo ordine:', order)

  res.status(201).json({
    message: 'Ordine ricevuto',
    order,
  })
})

// SERVER START
app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`)
})