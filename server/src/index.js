import app from "./app.js";
import { variableConfig } from "./config/variables.config.js";
import { sequelize } from "./database/database.js";
async function startServer(port) {
    let server;
    try {
        //Sincroniza la base de datos
        //await sequelize.sync({});
        //sequelize
        //    .authenticate() //Conectarse a la base de datos
        //   .then(() => {
               server =  app.listen(port);   //Iniciar el servidor
                console.log('Server is listening on port', port);
                console.log('Connection has been established successfully');
        //    })
        //    .catch((err) => {
        //        console.error("Unable to connect to the database:", err)
        //    })
    } catch (error) {
        console.log(error.message)
    }
}
// Start server main


function stop() {
    console.log("Stopping server");
    server.close();
}

startServer(variableConfig.port)
export default { startServer }