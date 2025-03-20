import { BaseModel } from "./base-model";
import { Services } from "./services";

export interface Categories extends BaseModel  {
    title: string;
    icon: string;
    image: string;
    services?: Array<Services>;
  }