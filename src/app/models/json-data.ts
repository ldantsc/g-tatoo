export interface jsonData {
  logo: {
    title: string;
    subtitle: string;
  };
  contact: {
    address: string;
    phone: string;
    instagram: string;
  };
  quote: {
    describe: string;
    button: {
      title: string;
    };
    ambientList: {
      symbol: string;
      title: string;
    }[];
    ratings: {
      title: string;
      person: {
        name: string;
        comment: string;
        imgsrc: string;
      }[];
    };
  };
  artist: {
    name: string;
    description: string;
  };
}
