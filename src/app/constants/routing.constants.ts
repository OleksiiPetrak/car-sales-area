import { Routes } from "@angular/router";
import { CarCreationComponent } from "../components/car-creation/car-creation.component";
import { CarDetailsComponent } from "../components/car-details/car-details.component";
import { CarListComponent } from "../components/car-list/car-list.component";

export const appRoutes: Routes =[
    { path: "", component: CarListComponent },
    { path:"details/:id", component: CarDetailsComponent },
    { path:"addverticementcreation", component: CarCreationComponent}
  ]