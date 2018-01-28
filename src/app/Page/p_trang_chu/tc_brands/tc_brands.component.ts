import { Component, OnInit } from "@angular/core";
import { BrandService } from "../../../services/brand.service";
import { Brand } from "../../../models/brand";

@Component({
  selector: "tc_brands",
  templateUrl: "./tc_brands.component.html"
})
export class TcBrandcomponent implements OnInit {
  brand_lst: any[] = [];
  constructor(private brand_service: BrandService) {
    this.brand_service.getListBrand().then(data => {
      console.log(data);
      if (data) this.brand_lst = data;
    });
  }
  ngOnInit() {}
}
