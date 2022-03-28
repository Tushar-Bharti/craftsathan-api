export interface SellerData {
    name: string;
    email?: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pinCode: number;
    aadhar: number;
    password: string;

}

export interface BuyerData {
    buyHistory: object[];
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
}
