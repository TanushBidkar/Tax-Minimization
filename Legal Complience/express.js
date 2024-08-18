const express = require('express');
const app = express();
const port = 3000;

// Sample product data (in a real application, this data should come from a database)
const products = [
  { id: 1, name: 'Product A', price: 100, gstPercentage: 18 },
  { id: 2, name: 'Product B', price: 50, gstPercentage: 12 },
];

// Calculate GST amount
function calculateGST(amount, gstPercentage) {
  return (amount * gstPercentage) / 100;
}

app.use(express.json());

// Endpoint to get product list
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint to calculate GST for a product
app.post('/calculate-gst', (req, res) => {
  const productId = req.body.productId;
  const amount = req.body.amount;

  // Find the product by ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const gstAmount = calculateGST(amount, product.gstPercentage);
  const totalAmount = amount + gstAmount;

  res.json({ gstAmount, totalAmount });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});