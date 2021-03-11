import { Resource } from "./resource";

export class Collection<T> extends Resource{
    value: Array<T>;
}