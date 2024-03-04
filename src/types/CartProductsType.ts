import { SelectedImgType } from "./SelectedImgType";

export type CartProductsType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImg: SelectedImgType;
    quantity: number;
    price: number;
};