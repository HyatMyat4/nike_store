interface Sidebase {
  Link: string;
  Icon: any;
  Name: string;
}

interface formdata {
  Image: string;
  BgColour: string;
  ShadowColour: string;
  shoeName: string;
  shoePrice: number;
  shoeTitle: string;
  shoeImformation: string;
  Rating: number;
}

interface ShoeCardData {
  id: string;
  image: string;
  backgroundcolour: string;
  shadow: string;
  shoename: string;
  price: number;
  title: string;
  shoeimformation: string;
  rating: number;
}
interface ShoeCardDataResponse {
  message: string;
  data: [
    {
      id: string;
      image: string;
      backgroundcolour: string;
      shadow: string;
      shoename: string;
      price: number;
      title: string;
      shoeimformation: string;
      rating: number;
    }
  ];
}

interface Stories {
  id: string;
  title: string;
  text: string;
  img: string;
  likecount: number;
  time: any;
}

interface StoriesProps {
  id: string;
  title: string;
  text: string;
  img: string;
  likecount: number;
}

interface ResponseStories {
  message: string;
  data: [
    {
      id: string;
      title: string;
      text: string;
      img: string;
      likecount: number;
      time: any;
    }
  ];
}

interface SendUserdata {
  email: string;
  image: string;
  name: string;
}
interface SendUserdataNike {
  email: string;
  image: string | undefined;
  name: string;
  password: string;
  roleCode?: string;
}
interface User_data {
  id: string;
  email: string;
  password: string;
  img: string;
  name: string;
  role: string;
  time: any;
}

interface Auth_data {
  email: string;
  iat?: number;
  id: string;
  img: string;
  name: string;
  password: string;
  role: string;
  time: any;
}

type salesByCategory = {
  NikeAddapt: number;
  NikeAir: number;
  NikeSmart: number;
  NikeZoom: number;
  NikeMartine: number;
  NikeJordan: number;
};

type monthlyData = {
  month: string;
  totalSales: number;
  totalUnits: number;
};
//  --legacy-peer-deps

type Dailydata = {
  date: string;
  totalSales: number;
  totalUnits: number;
};

interface Order_data {
  id: number;
  email: string;
  email2: string;
  name: string;
  userimage: string;
  totalamount: string;
  phone: number;
  city: string;
  country: string;
  town: string;
  postal_code: string;
  state: string;
  time: string | Date | any;
  orderdata: Items[];
}

interface Items {
  id: number;
  image: string;
  backgroundcolour: string;
  shadow: string;
  shoename: string;
  price: number;
  title: string;
  shoeimformation: string;
  rating: number;
  cartQuantity: number;
}
