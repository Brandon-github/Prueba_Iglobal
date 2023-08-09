type UserGender = "male" | "female"

export interface User {
  gender: UserGender;
  name: {
    title: string;
    first: string;
    last: string;
  },
  location: {
    country: string;
    city: string;
  },
  email: string;
  phone: string;
  picture: {
    large: string;
  }
}