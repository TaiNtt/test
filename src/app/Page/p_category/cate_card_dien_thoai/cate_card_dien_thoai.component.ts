import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "cate_card_dien_thoai",
  templateUrl: "./cate_card_dien_thoai.component.html"
})
export class CateCardDienThoaiComponent implements OnInit {
  mang_san_pham: any[] = [];
  so_san_pham: number = 4;
  constructor(private sanpham_service: ProductService) {
    this.sanpham_service.GetListProductByCategoryId("card_dien_thoai").then(data => {
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
