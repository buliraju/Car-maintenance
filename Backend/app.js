import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import car from './Models/car';
import spares from './Models/spares';
import login from './Models/login';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://buddanavaraprasad:MVdDKXcTAc5IMdH4@cluster0.ci86jca.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(5000, () => {
    console.log("Connected to Database & Listening to localhost 3001");
});

const cartItemSchema = new mongoose.Schema({
    title: String,
    price: Number,
  });

  const CartItem = mongoose.model('CartItem', cartItemSchema);

  app.post('/api/addToCart', async (req, res) => {
    try {
      const { title, price } = req.body;
      const cartItem = new CartItem({ title, price });
      await cartItem.save();
      res.status(201).json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  

  app.get('/getitems', async (req, res, next) => {
    let cart;
    try {
      cart = await CartItem.find(); // Use the correct model here
    } catch (err) {
      console.log(err);
    }
  
    if (!cart) {
      return res.status(404).json({ message: "No items found in the cart" });
    }
    return res.status(200).json({ cart });
  });
  

app.post('/addservice', (req, res) => {
    console.log(req.body.formdata);
    const { fname, address, number, anumber, vnumber, engine, model, year, colour } = req.body.formdata;
    const stud = new car({
        fname, address, number, anumber, vnumber, engine, model, year, colour});        
    stud.save()
        .then(() => {
            res.send({});
            
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error while saving data");
        });
});

app.delete('/deleteitem/:id', (req, res) => {
  const cartId = req.params.id;

  CartItem.findByIdAndRemove(cartId)
    .then(() => {
      res.send({ message: 'Cart Item Deleted Successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error while deleting cart item' });
    });
});

app.post('/addproduct', (req, res) => {
  console.log(req.body);
  const {  title, price, category, image } = req.body;
  const stud = new spares({
    title, price, category, image});        
  stud.save()
      .then(() => {
          res.send({});
          
      })
      .catch((err) => {
          console.log(err);
          res.status(500).send("Error while saving data");
      });
});

app.get('/getspares', async (req, res, next) => {
  let cart;
  try {
    cart = await spares.find(); // Use the correct model here
  } catch (err) {
    console.log(err);
  }

  if (!cart) {
    return res.status(404).json({ message: "No items found in the cart" });
  }
  return res.status(200).json({ cart });
});


app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await login.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new login({ username, password });
    await newUser.save();

    return res.status(200).json({ message: 'Registration successful',newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await login.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    return res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

app.get('/userData', async (req, res) => {
  try {
    const username = req.query.username;
    const user = await login.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
  }
});




app.use('/', (req, res, next) => {
    res.send('Hi, Dude');
});