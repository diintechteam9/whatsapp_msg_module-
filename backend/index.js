const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');


dotenv.config({quiet:true});

const app=express();
app.use(express.json());
app.use(cors());

const whatsappRoutes=require('./router/whatsapproutes');


const PORT=4000;

app.use('/api/whatsapp',whatsappRoutes);

app.get("/",(req,res)=>{
    res.send("this is the custom whatsapp app");
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});