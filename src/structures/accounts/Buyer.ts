import { BuyerData } from "../../typings/interface";

export class Buyer {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  buyHistory: object[];

  constructor(data: BuyerData) {
    this.address = data.address;
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.password = data.password;
    this.buyHistory = data.buyHistory || [];
  }
}
