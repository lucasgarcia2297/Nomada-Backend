import app from "./app";
import "reflect-metadata";
import AppDataSource from "./database/data-source";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Datos inicializados!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al inicializar los datos", error);
  });

