import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";
@Component({
  selector: "tc_maincontent",
  templateUrl: "./tc_maincontent.component.html"
})
export class TcMaincontentComponent implements OnInit {
  mang_san_pham: any[] = [];
  constructor(private service_product: ProductService) {
    this.service_product.getListProduct().then(data => {
      this.service_product
        .sort_product_by_condition("updateDate_za", data)
        .then(datasort => {
          this.mang_san_pham = datasort;
          console.log(this.mang_san_pham);
        });
    });
  }

  ngOnInit() {}
}
