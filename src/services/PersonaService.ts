// Importamos el tipo de dato IPersona y la clase BackendClient
import { IPersona } from "../types/IPersona";
import { BackendClient } from "./BackEndClient";

// Clase PersonaService que extiende BackendClient para interactuar con la API de personas
export class PersonaService extends BackendClient<IPersona> {}
