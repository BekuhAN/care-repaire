import {BaseModel} from './base-model';

export interface Services extends BaseModel {
    name: string,
    img: string,
    description: string,
    info: Array<{
        id: number,
        name: string,
        price: string,
        list: Array<string>
    }>
}