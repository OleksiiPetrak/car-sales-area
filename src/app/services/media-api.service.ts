import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UrlConstants } from "../constants/url.constants";

@Injectable({
    providedIn: 'root'
})
export class MediaApiService {

    constructor(private http: HttpClient){}

    saveNewCarMedia(formData:FormData){
        let endpoint: string = UrlConstants.uploadMedia;
        return this.http.post(endpoint, formData);
    }
}