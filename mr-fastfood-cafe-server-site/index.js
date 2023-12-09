
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// token genarate
const jwt =require('jsonwebtoken');
const cookieParser = require('cookie-parser');


// import env 
require('dotenv').config()

// middle use 
app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}));
app.use(cookieParser())


// mongodb file start 


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@atlascluster.ynftepn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {



  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");



    const foodCollection = client.db('foodDB').collection('food');
    const cartCollection = client.db('cartDB').collection('cart');

    // for brand
    const brandCollection=client.db('brandDB').collection('brand');



    // token related start

    app.post('/jwt',async(req,res)=>{

        const user=req.body;
        console.log(user);
        const token=jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:'12h'});
        
        res
        .cookie('token',token,{
          httpOnly:true,
          secure:false
        })
        .send({success:true})
    })

    // token related end



    // [Get method]
    app.get('/brand', async (req, res) => {

      const cursor = brandCollection.find();
      const result = await cursor.toArray();
      res.send(result);


    })



    // [Get method]
    app.get('/food', async (req, res) => {

      const cursor = foodCollection.find();
      const result = await cursor.toArray();
      res.send(result);


    })


    // [GeT Method according to Category]

    app.get('/food/:brand', async (req, res) => {

      const brand = req.params.brand;
      const query = { brand: brand };
      const result = await foodCollection.find(query).toArray();
      res.send(result);


    })

    // [GeT Method according to id]

    app.get('/food/:brand/:id', async (req, res) => {

      const id = req.params.id;
      const brand = req.params.brand;
      const query = { _id: new ObjectId(id), brand: brand }
      const result = await foodCollection.findOne(query);
      res.send(result)


    })


    // [post method]

    app.post('/food', async (req, res) => {

      const newFood = req.body;
      console.log(newFood);

      const result = await foodCollection.insertOne(newFood);
      res.send(result);

    })


    // [put and update method]

    app.put('/food/:brand/:id', async (req, res) => {

      const id = req.params.id;
      const brand = req.params.brand;
      const filter = { _id: new ObjectId(id), brand: brand }
      const optinons = { upsert: true }
      const updateFood = req.body;
      const food = {
        $set: {

          name: updateFood.name,
          price: updateFood.price,
          brand: updateFood.brand,
          type: updateFood.type,
          description: updateFood.description,
          rating: updateFood.rating,
          photo: updateFood.photo,

        }
      }

      const result = await foodCollection.updateOne(filter, food, optinons);
      res.send(result)

    })



    // <------- For cart -------->


    // [Get method for cart]

    app.get('/cart', async (req, res) => {

      const cursor = cartCollection.find();
      const result = await cursor.toArray();
      res.send(result);


    })


    // // single Data show method [GET METHOD SINGLE DATA]

    app.get('/cart/:id',async(req,res)=>{

      const id = req.params.id;
      console.log(id)
      // const brand = req.params.brand;, brand: brand

      const query = { _id: new ObjectId(id) }
      const result = await cartCollection.findOne(query);
      console.log(result)
      res.send(result)

    })



    // [post method for cart]

    app.post('/cart', async (req, res) => {

      const newFood = req.body;
      console.log(newFood);

      const result = await cartCollection.insertOne(newFood);
      res.send(result);

    })


    // [Delete method from cart]

    app.delete('/cart/:id',async(req,res)=>{

      const id=req.params.id;
      const query={_id: new ObjectId(id)};
      const result= await cartCollection.deleteOne(query);
      res.send(result);

    })



  }


  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// mongodb file end



// test the server 
app.get('/', (req, res) => {
  res.send('Allah is all mighty')
})



// listen port
app.listen(port, (req, res) => {
  console.log(`server is running port ${port}`)
})