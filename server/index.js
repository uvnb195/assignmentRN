const express = require('express')
const cors = require('cors')

const app = express()

const connectDb = require('./src/configs/connectDb');
const { register, getUserByEmail, signIn, checkpoint } = require('./src/controllers/authController');
const { addToDb, getGroceryIndex, addItem, getGroceryItem, getProducts } = require('./src/controllers/productController');
// const UserModel = require('./src/model/User');
connectDb();

const PORT = '3070'

app.use(express.json())
app.use(cors())

app.get('/home', (_req, res) => {
    res.send('<h1>Đào Hữu Quân</h1>')

})

app.post('/register', register)

// get user by email
app.get('/user', getUserByEmail)
app.get('/addData', addToDb)
app.get('/index', getGroceryIndex)
app.get('/add', addItem)
app.get('/item', getGroceryItem)
app.post('/signIn', signIn)
app.post('/checkpoint', checkpoint)
app.post('/products', getProducts)

app.listen(PORT, (error) => {
    if (error) {
        console.log('>>> Error: ', error);
        return
    }

    console.log(`Server starting at http://localhost:${PORT}`);

})