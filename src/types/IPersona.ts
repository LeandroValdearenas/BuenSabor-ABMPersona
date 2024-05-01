/**
 * Interfaz que define la estructura de un objeto persona.
 * Contiene propiedades relacionadas con la información personal de una persona.
 */
export interface IPersona {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthdate: string;
  [key: string]: any;
}
