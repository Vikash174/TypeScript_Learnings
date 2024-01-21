interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
}

let newContact: Contact = {
  id: 1232,
  name: "Vikash",
  line1: "",
  line2: "",
  province: "",
  region: "",
  postalCode: "",
};

type ContactName = string;
