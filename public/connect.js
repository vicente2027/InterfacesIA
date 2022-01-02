
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://vicente:87654321@cluster0.2pdmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("test");
        // Use the collection "people"
        const col = db.collection("objetosAprendizaje");
        // Construct a document
        let objeto = {
            "nombreObjeto": 'ia.zip',
            "tema": 'IA',
            "materia": 'Inteligencia Artificial',
            "descripcion": 'Prueba',
            "usuario": 'uploader',
            "ruta" : '/firebase/bucket'
            
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(objeto);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}
run().catch(console.dir);