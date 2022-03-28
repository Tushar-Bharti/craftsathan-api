export class Buyer {
    constructor(data) {
        this.address = data.address;
        this.email = data.email;
        this.name = data.name;
        this.phone = data.phone;
        this.password = data.password;
        this.buyHistory = data.buyHistory || [];
    }
}
//# sourceMappingURL=Buyer.js.map