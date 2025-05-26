export type Parametr = {
  name: string;
  value: string;
};

export type ProductType = {
  id: number;
  title: string;
  img: string;
  price: number;
  discountedPrice?: number;
  rating?: 1 | 2 | 3 | 4 | 5;
  isNew?: boolean;
  reviewsCount: number;
  subcategory: string;
  images: string[];
  subCategoryId: number;
  parameters: Parametr[];
  notAvailable?: true;
  categoryId: number;
};
export type BasketsProduct = ProductType & {
  count: number;
};
// export const Products: ProductType[] = [
//   {
//     id: 1,
//     title: 'Монітор ACER 23.8" EK241YEbi Black (UM.QE1EE.E03)',
//     img: "https://files.foxtrot.com.ua/PhotoNew/img_0_10_5811_0_1_NIlkq2.webp",
//     price: 3499,
//     isNew: true,
//     reviewsCount: 1,
//     subcategory: "Acer",
//     images: [""],
//     parameters: [{ name: "Діагональ екрану", value: "13,3" }],
//     categoryId: 2,
//   },
//   {
//     id: 2,
//     title: "Ноутбук APPLE MacBook Air M1 13' 256GB Space Grey (MGN63UA/A)",
//     img: "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_0.webp",
//     price: 39499,
//     rating: 4,
//     reviewsCount: 12,
//     discountedPrice: 36999,
//     subcategory: "Apple",
//     images: [
//       "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_0.webp",
//       "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_1.webp",
//       "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_2.webp",
//       "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_3.webp",
//       "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18009_4.webp",
//     ],
//     parameters: [{ name: "Діагональ екрану", value: "13,3" }],
//     notAvailable: true,
//     categoryId: 4,
//   },
//   {
//     id: 3,
//     title: "APPLE iPhone 16 Pro Max 256GB Desert Titanium (MYWX3SX/A)",
//     img: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_10324_0_1_IXXijT.webp",
//     price: 73999,
//     rating: 5,
//     reviewsCount: 12,
//     discountedPrice: 68499,
//     subcategory: "Apple",
//     images: [""],
//     parameters: [
//       { name: "Діагональ екрану", value: "13,3" },
//       { name: "Діагональ екрану", value: "13,3" },
//       { name: "Діагональ екрану", value: "13,3" },
//       { name: "Діагональ екрану", value: "13,3" },
//       { name: "Діагональ екрану", value: "13,3" },
//     ],
//     categoryId: 7,
//   },
// ];
export type ComparProduct = {
  category: string;
  products: ProductType[];
};
