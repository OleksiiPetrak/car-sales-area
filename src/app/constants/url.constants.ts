import { environment } from "src/environments/environment"

const host: string = environment.apiUrl;

export const UrlConstants: {[key: string]: string} = {
    getAllCarsEndpoint: `${host}/car/cars`,
    getCarEndoint: `${host}/car/{carId}`,
    createCar: `${host}/car/car`,
    uploadMedia: `${host}/media`
};