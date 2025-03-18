import {BaseModel} from './base-model';

export interface Services extends BaseModel {
    title: string,
    image: string,
    categoryId: number,
    price: number,
    info: Array<{
        id: number,
        name: string,
        price: number,
    }>
}