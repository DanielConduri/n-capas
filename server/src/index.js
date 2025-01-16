import app from "./app.js";
import { variableConfig } from "./config/variables.config.js";
import { sequelize } from "./database/database.js";

import client from 'prom-client';
const register = new client.Registry();

const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duración de las solicitudes HTTP en segundos',
    labelNames: ['method', 'route', 'status'],
  });
  

// Métricas DORA (ejemplo de métricas fijas)
const leadTimeGauge = new client.Gauge({
    name: 'dora_lead_time_seconds',
    help: 'Lead Time for Changes (seconds)',
    labelNames: ['pipeline']
  });
  const deploymentFreqCounter = new client.Counter({
    name: 'dora_deployment_frequency_count',
    help: 'Deployment Frequency count',
    labelNames: ['pipeline']
  });
  const meanTimeToRestoreGauge = new client.Gauge({
    name: 'dora_mean_time_to_restore_seconds',
    help: 'Mean Time to Restore (seconds)',
    labelNames: ['pipeline']
  });
  const changeFailureRateGauge = new client.Gauge({
    name: 'dora_change_failure_rate',
    help: 'Change Failure Rate',
    labelNames: ['pipeline']
  });
  
  // Registramos las métricas
  register.registerMetric(leadTimeGauge);
  register.registerMetric(deploymentFreqCounter);
  register.registerMetric(meanTimeToRestoreGauge);
  register.registerMetric(changeFailureRateGauge);
  
  // Asignamos valores a las métricas (puedes actualizarlos según el estado del pipeline)
  leadTimeGauge.set({ pipeline: 'ci' }, 120); // Tiempo de lead time en segundos
  deploymentFreqCounter.inc({ pipeline: 'ci' }, 5); // Frecuencia de despliegue
  meanTimeToRestoreGauge.set({ pipeline: 'ci' }, 200); // MTTR en segundos
  changeFailureRateGauge.set({ pipeline: 'ci' }, 0.02); // Tasa de fallos de cambios
  
  // Endpoint para exponer las métricas
  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });
  

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