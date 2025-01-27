import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';
export interface Product {
    size: ReactNode | Iterable<ReactNode>;
    imageUrl: string | StaticImport;
    name: string;
    _id: string;
    productName: string;
    _type: "Product";
    image: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description: string;
    color:string;
    gender:string;
    tag:string;
    inventory : number;
    slug:{
        _type:"slug",
        current:"string"

    }
};
