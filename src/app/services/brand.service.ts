import { Injectable } from "@angular/core";
import { Brand } from "../models/brand";
import { ds_thuong_hieu } from "../models/mock_brand";

@Injectable()
export class BrandService {
  constructor() {}
  getListBrand(): Promise<Brand[]> {
    return Promise.resolve(ds_thuong_hieu);
  }
  getBrandByBrandId(brandId): Promise<Brand> {
    return this.getListBrand().then(data => {
      return Promise.resolve(data.find(item => item.id_thuong_hieu == brandId));
    });

    //
  }
}
