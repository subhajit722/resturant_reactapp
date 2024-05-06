// Server.js

import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
// import Products from './Router/ProductRouter.js';
// import table from './Router/TableRouter.js'
// import foodlist from './Router/FoodlistRouter.js'
import item from './Router/ItemRoute.js'


const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001" , "http://localhost:5500" , 'http://192.168.1.10:3000'], 
    credentials: true // Enable CORS credentials
}));

app.use(express.json({ limit: '50mb' }));

// app.use('/api/product', Products);
// app.use('/api/table', table);
app.use('/api/item', item);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
