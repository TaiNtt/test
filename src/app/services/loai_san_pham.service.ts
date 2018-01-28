import { Injectable } from "@angular/core";
import { LoaiSanPham } from "../models/loai_san_pham";
import { ds_loai_san_pham } from "../models/mock_loai_san_pham";

@Injectable()
export class CategoryProductService {
  constructor() {}

  getListCategoryProduct() {
    return ds_loai_san_pham;
  }
}
