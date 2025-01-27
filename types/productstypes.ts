export interface Product {
    size: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
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
