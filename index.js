const mongoose = require("mongoose");
const app = require("./src/server");

require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
}).then(() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))
}).catch((error) => console.error(error));