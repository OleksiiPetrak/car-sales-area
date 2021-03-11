import { from } from "rxjs";
import { FuelType } from "./fuelType";
import { SalesArea } from "./salesArea";
import { Photo } from "./photo";

export class Car{
    href: string;
    id: number;
    brand: string;
    model: string;
    year: Date;
    engineVolume: number;
    mileage: number;
    description: string;
    price: number;
    vinCode: string;
    color: string;
    body: string;
    salesArea: SalesArea;
    fuelType: FuelType;
    photos: Array<Photo>;
}