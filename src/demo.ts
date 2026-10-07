/* let x: number 
let y: string
let z: boolean
let a: Date
let b: string[]

b = "Hello!" as any
b = 1234 */

interface Contact extends Address {
    id: number;
    name: ContactName;
    birthDate: Date;
    status: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;

}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}


let prumaryContact: Contact = {
    birthDate: new Date("1987-05-24"),
    id: 12345,
    name: "Lionel Messi",
    status: ContactStatus.Active
};

type ContactName = string 