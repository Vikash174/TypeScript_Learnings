interface Contact extends Adderess {
  id: number;
  name: string;
  birthDate?: Date;
}

interface Adderess {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

let primaryContact: Contact = {
  id: 1234,
  name: "Vikash Rai",
  line1: "Medical College",
  line2: "Jabalpur",
  province: "",
  region: "Asia",
  postalCode: "35252352356",
};
