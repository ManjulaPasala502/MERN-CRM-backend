const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./Config/db');

dotenv.config();
const app=express();

app.use(cors());
app.use(cors({origin:'*'}))
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/auth'));

app.use('/api/customers', require('./routes/customers'))

const Port = process.env.PORT;
app.listen(Port, ()=>console.log(`Server running on port ${Port}`))