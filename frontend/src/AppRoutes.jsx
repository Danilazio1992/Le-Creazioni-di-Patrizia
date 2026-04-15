import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

//useRoutes prende il path creato in routes.jsx quindi i vari percorsi parent+children
// fa si che dove viene messa i path vengono richiamati io l'ho messa tra topbar e footer

function AppRoutes() {
  return useRoutes(routes);
}
export default AppRoutes;
