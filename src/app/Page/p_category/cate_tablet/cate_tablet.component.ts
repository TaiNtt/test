import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "cate_tablet",
  templateUrl: "./cate_tablet.component.html"
})
export class CateTabletComponent implements OnInit {
  mang_san_pham: any[] = [];
  so_san_pham: number = 4;
  constructor(private sanpham_service: ProductService) {
    this.sanpham_service.GetListProductByCategoryId("tablet").then(data => {
      this.mang_san_pham = data;
      console.log(this.mang_san_pham);

      console.log(data);
    });
  }
  demsanpham() {
    this.so_san_pham += 4;
  }
  ngOnInit() {}
}
