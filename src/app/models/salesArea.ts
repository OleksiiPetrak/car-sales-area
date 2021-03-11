import { Manager } from "./manager";

export class SalesArea{
    href: string;
    id: number;
    areaLocation: string;
    capacity: number;
    managers: Array<Manager>
}