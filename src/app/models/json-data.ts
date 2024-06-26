export interface JsonData {
  subscribe(): unknown;
  logo: Logo;
  contact: Contact;
  quote: Quote;
  ambient?: (Ambient)[] | null;
  ratings: Ratings;
  artist: Artist;
  images: [];
}

export interface Logo {
  img: string;
  title: string;
  subtitle: string;
}

export interface Contact {
  address: string;
  phone: string;
  instagram: string;
}

export interface Quote {
  describe: string;
  videosrc: string;
  button: Button;
}

export interface Button {
  title: string;
}

export interface Ambient {
  symbol: string;
  title: string;
}

export interface Ratings {
  title: string;
  person?: (Person)[] | null;
}

export interface Person {
  name: string;
  comment: string;
  imgsrc: string;
}

export interface Artist {
  img: string;
  name: string;
  description: string;
}
