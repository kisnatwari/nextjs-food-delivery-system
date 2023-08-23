export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};


export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
}

export type OrderType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  products: ProductType[];
  createdAt?: Date;
  options?: { title: string; additionalPrice: number }[];
  status: string;
}