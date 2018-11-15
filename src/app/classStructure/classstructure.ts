class SellerAdress {
    city_id: string;
    city_name: string;
    state_id: string;
    state_name: string;

    constructor(city_id?: string, city_name?: string, state_id?: string, state_name?: string) {
        this.city_id = (city_id ? city_id : "");
        this.city_name = (city_name ? city_name : "");
        this.state_id = (state_id ? state_id : "");
        this.state_name = (state_name ? state_name : "");
    }
}

class Shipping {
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    store_pick_up: boolean;
    tags: Array<any>;

    constructor() {
        this.free_shipping = false;
        this.logistic_type = "";
        this.mode = "";
        this.store_pick_up = false;
        this.tags = new Array<any>();
    }
}

export class ProductList {
    id: string;
    title: string;
    price: string;
    thumbnail: string;
    address: SellerAdress;
    shipping: Shipping;

    constructor(id?: string, title?: string, thumbnail?: string, address?: SellerAdress, shipping?: Shipping) {
        this.id = (id ? id : "");
        this.title = (title ? title : "");
        this.thumbnail = (thumbnail ? thumbnail : "");
        this.address = (address ? address : new SellerAdress());
        this.shipping = (shipping ? shipping : new Shipping());
    }
}

class Picture {
    id: string;
    max_size: string;
    quality: string;
    secure_url: string;
    size: string;
    url: string;

    constructor() {
        this.id = "";
        this.max_size = "";
        this.quality = "";
        this.secure_url = "";
        this.size = "";
        this.url = "";
    }
}

class Attribute {
    attribute_group_id: string;
    attribute_group_name: string;
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: any;

    constructor() {
        this.attribute_group_id = "";
        this.attribute_group_name = "";
        this.id = "";
        this.name = "";
        this.value_id = "";
        this.value_name = "";
        this.value_struct = null;
    }
}

export class ProductDetail {
    id: string;
    condition: string;
    sold_quantity: number;
    price: number;
    pictures: Array<Picture>;
    attributes: Array<Attribute>

    constructor() {
        this.id = "";
        this.condition = "";
        this.sold_quantity = -1;
        this.price = -1;
        this.pictures = new Array<Picture>();
        this.attributes = new Array<Attribute>();
    }
}