require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000


const app = express()

// middleware here 
app.use(cors())
app.use(express.json())


// routes here
app.get('/', (req, res) => {
    res.send('tourist management server is running')
})



const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.2umnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

        const database = client.db("travel_nest");
        const spotsCollection = database.collection("spots");

        // Get all spots from the database 
        app.get('/spots', async (req, res) => {
            const cursor = spotsCollection.find(
                {},
                {
                    projection: {
                        cost: 1, visitor: 1, duration: 1, summer: 1, winter: 1, image: 1, spot_name: 1,
                    }
                })
            const result = await cursor.toArray()
            res.send(result)
        })

        // Get one spot data from whole spots collection
        app.get('/spot/:id', async (req, res) => {
            const cursor = await spotsCollection.findOne({ _id: new ObjectId(req.params.id) })
            res.send(cursor)
        })

        // Get popular spots from the database (top 6)
        app.get('/popular_spots', async (req, res) => {
            const cursor = spotsCollection.find(
                {},
                {
                    projection: {spot_name: 1, location: 1, country: 1, visitor: 1, image: 1,},
                    sort: { visitor: -1 },
                    limit: 6
                }
            )
            const result = await cursor.toArray()
            res.send(result)
        })


        // spots collection of an user 
        app.get('/spots/:usr_email', async (req, res) => {
            const cursor = spotsCollection.find(
                { 'usr_email': req.params.usr_email },
                {
                    projection: {
                        spot_name: 1, location: 1, country: 1, visitor: 1,
                    }
                }
            )
            const result = await cursor.toArray()
            res.send(result)
        })

        // Add a new spot to the database 
        app.post('/spots', async (req, res) => {
            const spot = req.body
            const result = await spotsCollection.insertOne(spot)
            res.send(result);
        })

        // Update a spot in the database
        app.put('/spots/:id', async (req, res) => {
            const result = await spotsCollection.updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: req.body })
            res.send(result);
        })

        //delete a spot from the database
        app.delete('/spots/:id', async (req, res) => {
            const result = await spotsCollection.deleteOne({ _id: new ObjectId(req.params.id) });
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})