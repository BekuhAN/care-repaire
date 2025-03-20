import {BaseModel} from './base-model';

export interface Team extends BaseModel {
    name: string;
    image: string;
    position: string;
}