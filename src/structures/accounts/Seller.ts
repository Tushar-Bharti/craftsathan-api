import { SellerData } from "../../typings/interface";

export class Seller {
  name: string;
  email?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: number;
  aadhar: number;
  password: string;

  constructor(data: SellerData) {
    this.aadhar = data.aadhar;
    this.address = data.address;
    this.city = data.city;
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.state = data.state;
    this.pinCode = data.pinCode;
    this.password = data.password;
  }
}
