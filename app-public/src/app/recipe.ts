export class Banners {
    isNewer: boolean;
    isFeatured: boolean;
}

export class Recipe {
    _id: string;
    name: string;
    type: string;
    info: string;
    ingredients: string[];
    banners: Banners;
}
