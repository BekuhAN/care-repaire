import { BaseModel } from "./base-model";

export interface Comments extends BaseModel  {
    author: string;
    image: string;
    text: string;
  }