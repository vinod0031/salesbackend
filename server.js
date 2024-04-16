const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());


const MONGODB_URI = process.env.MONGODB_URI;;//setup MongoDB your device 
mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));


const ItemSchema = new mongoose.Schema({
images: String,
mrp: String,
discount:String
});

const Item = mongoose.model('Item', ItemSchema);


app.get('/api/items', async (req, res) => {
try {
const items = await Item.find();
res.json(items);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server Error' });
}
});

const WomenSchema = new mongoose.Schema({
    images: String,
    mrp: String,
    discount:String
    });

const Women = mongoose.model('Women', WomenSchema);

app.get('/api/Womens', async (req, res) => {
    try {
    const items = await Women.find();
    res.json(items);
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
    }
    });


const KidsSchema = new mongoose.Schema({
    images: String,
    mrp: String,
    discount:String
    });

const Kids = mongoose.model('Kids', KidsSchema);

app.get('/api/kids', async (req, res) => {
    try {
    const items = await Kids.find();
    res.json(items);
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
    }
    });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));