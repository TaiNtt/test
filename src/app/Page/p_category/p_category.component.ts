import { Component, OnInit } from "@angular/core";
import { CategoryProductService } from "../../services/loai_san_pham.service";
import { Route, ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { SanPham } from "../../models/san_pham";
import { Brand } from "../../models/brand";
import { BrandService } from "../../services/brand.service";

@Component({
  selector: "p_category",
  templateUrl: "./p_category.component.html"
})
export class PageCategoryComponent implements OnInit {
  ds_loai_san_pham: any[] = [];
  mang_san_pham_by_brand: any[] = [];
  brand: Brand = new Brand("", "", "");

  constructor(
    private _ds_loai_sp_service: CategoryProductService,
    private product_service: ProductService,
    private route: ActivatedRoute,
    private brand_service: BrandService
  ) {
    this.ds_loai_san_pham = this._ds_loai_sp_service.getListCategoryProduct();

    this.route.params.subscribe((param: Params) => {
      console.log(param);
      this.brand_service.getBrandByBrandId(param.id_thuong_hieu).then(data => {
        if (data) {
          this.brand = data;
        }
      });
      this.product_service
        .GetListProductByBrandId(param.id_thuong_hieu)
        .then(data => {
          // console.log(data);
          if (data) {
            this.mang_san_pham_by_brand = data;
          }
        });
    });
  }
  ngOnInit() {
  
  }
}
