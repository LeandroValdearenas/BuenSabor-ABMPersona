export interface DataModelKey<T> {
    [key: string]: T; // Permite propiedades dinámicas con tipos genéricos
}
export type DataModel<T> = DataModelKey<T> & {
    id?: number; // Ejemplo de propiedad con tipo genérico
}

abstract class AbstractBackendClient<T extends DataModel<T>> {
    protected baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    abstract getAll(): Promise<T[]>;

    abstract getById(id: number): Promise<T | null>;

    abstract post(data: T): Promise<T>;

    abstract put(id: number, data: T): Promise<T>;
}

export default AbstractBackendClient;