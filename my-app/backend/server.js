const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend API.');
});

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://divhackproject01:YNiOsHj3lW2WgnEp@divhacks.4befy.mongodb.net/stageDB?retryWrites=true&w=majority&appName=divhacks'; // replace with your MongoDB URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => console.log(err));

// Define a schema and model for user data
const userSchema = new mongoose.Schema({
    username: String,
    collegeName: String,
    contributionPoints: Number
});

const campusSchema = new mongoose.Schema({
    name: String,  // Name of the campus
    communityPoints: Number
});

const Campus = mongoose.model('Campus', campusSchema);

const User = mongoose.model('User', userSchema);

// API endpoint to fetch user data
app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving user' });
    }
});

// API endpoint to fetch campus data
// API endpoint to fetch campus data
app.get('/api/campus/:id', async (req, res) => {
    try {
        const campus = await Campus.findById(req.params.id);
        if (!campus) {
            return res.status(404).json({ message: 'Campus not found' });
        }
        res.json(campus);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving campus data' });
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
