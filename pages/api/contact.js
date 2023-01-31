import { MongoClient } from 'mongodb';
async function handler(req, res){
    if(req.method === 'POST'){
        const { email, name, text} = req.body;
        if(
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({text: 'Invalid Input.'});
            return;
        }
        const newMessage = {
            email,
            name,
            text
        };
        let client;
        try{
            client = await MongoClient.connect('mongodb+srv://tintran:KqqI4IzFlltp2VMz@cluster0.ek232vn.mongodb.net/my-site?retryWrites=true&w=majority')
        } catch(error){
            res.status(500).json({message: 'Could not connect to database. '})
            return;
        }
        const db = client.db();
        try{
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId; // id created automatically
        } catch (error){
            client.close();
            res.status(500).json({
                message: 'Storing message failed'
            });
            return;
        }
        client.close();
        console.log(newMessage);
        res.status(201).json({text:'Added Comment', massage: newMessage})
    }
}
export default handler;