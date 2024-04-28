import AbstractBackendClient, { DataModel } from "./AbstractBackEndClient";

class BackendClient<T extends DataModel<T>> extends AbstractBackendClient<T> {
    constructor(baseUrl: string) {
        super("http://localhost:8080/api/" + baseUrl);
    }

    async getAll(): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}`);
        const data = await response.json();
        return data as T[];
    }

    async getById(id: number): Promise<T | null> {
        const response = await fetch(`${this.baseUrl}/${id}`);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data as T;
    }

    async post(data: T): Promise<T> {
        const response = await fetch(`${this.baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const newData = await response.json();
        return newData as T;
    }

    async put(id: number, data: T): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const updatedData = await response.json();
        return updatedData as T;
    }

    async delete(id: number): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
        });
        const deletedData = await response.json();
        return deletedData as T;
    }
}


export default BackendClient;