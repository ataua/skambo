export interface Product {
  [x: string]: any | any[];
  // userId?: number;
  // views?: number;
  // usersAccess?: number;
  // usability: string;
  // value: string;
  // boost?: string;
  // name: string;
  // description: string;
  // images: string[];
  // thumbnail: null | string;
  // category: string;
  // interests?: string;
}
export interface Data {
  [x: string]: any | any[];
//   usability: string;
//   value: string;
//   boost?: string;
//   name: string;
//   description: string;
//   images: string;
//   category: string;
//   interests?: string;
}

export interface TokenDecoded {
  sub: number;
  userId: number;
  exp: Date;
}

export interface Categoria {
  key: number;
  value: string;
  text: string;
}

export interface Session {
  session: { token: string };
}