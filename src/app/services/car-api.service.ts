import { HttpClient, HttpParams } from "@angular/common/http";
import { Car } from "../models/car";
import { Collection } from "../models/collection";
import { Injectable } from "@angular/core";
import { BracketsConverter } from "../helpers/bracets-converter";
import { UrlConstants } from "../constants/url.constants";

@Injectable({
    providedIn: 'root'
})
export class CarApiService {

    carItems: Collection<Car>;

    constructor(private http: HttpClient){}

    getCar(carId: number){
      let endpoint: string = UrlConstants.getCarEndoint;
      endpoint = endpoint.replace('{carId}', carId.toString());
      return this.http.get<Car>(endpoint);
    }

    getAllCarsList() {
        return this.http.get<Collection<Car>>(UrlConstants.getAllCarsEndpoint);
    }

    getFilteredCarsList(carSearchItem) {
        let params = new HttpParams({
            encoder: new BracketsConverter()
          });
     
          if (carSearchItem){
            if (carSearchItem.brand){
              params = params.append('search[brand]', carSearchItem.brand);
            }
            if (carSearchItem.model){
              params = params.append('search[model]', carSearchItem.model);
            }
            if (carSearchItem.priceMin){
             params = params.append('search[price>]', carSearchItem.priceMin);
            }
            if (carSearchItem.priceMax){
             params = params.append('search[price<]', carSearchItem.priceMax);
            }
            if (carSearchItem.body){
              params = params.append('search[body]', carSearchItem.body);
            }
           //  if (carSearchItem.fuel != null){
           //   params = params.set('search[fuelType.fuelType]', carSearchItem.fuel);
           //  }
          }
        
          return this.http.get<Collection<Car>>(UrlConstants.getAllCarsEndpoint, {params});
    }
}