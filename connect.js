//connect mongodb database
const dbusername = process.env.dbusername;
const dbpassword = process.env.dbpassword;
const url = "mongodb+srv://dbusername:dbpassword@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const mclient = new MongoClient(url);

async function run() {
    try {
        await mclient.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await mclient.close();
    }
}

run().catch(console.dir);