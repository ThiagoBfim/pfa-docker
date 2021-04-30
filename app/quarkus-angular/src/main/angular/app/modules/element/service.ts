import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/**
 * Manages interactions with the server.
 */
@Injectable({providedIn: "root"})
export class ElementService {
    private static BASE_URL = "http://localhost:8080/subjects";

    constructor(private http: HttpClient) {
    }

    /**
     * Gets all available elements.
     */
    async list() {
        try {
            return await this.http.get(ElementService.BASE_URL).toPromise();
        } catch (error) {
            console.error(`Unable to fetch elements due to error: ${error}`);
        }
    }

    async save(element) {
        try {
            return await this.http.post(ElementService.BASE_URL, element).toPromise();
        } catch (error) {
            console.error(`Unable to save element due to error: ${error}`);
        }
    }

    async remove(element) {
        try {
            console.log(element);
            return await this.http.delete(ElementService.BASE_URL + "/" + element).toPromise();
        } catch (error) {
            console.error(`Unable to delete element due to error: ${error}`);
        }
    }
}
