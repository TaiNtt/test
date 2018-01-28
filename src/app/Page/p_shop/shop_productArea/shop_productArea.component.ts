import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { ServiceInstanceGioHangService } from "../../../services/service_instance_gio_hang.service";
import { ServiceInstanceTimKiemService } from "../../../services/service_instance_tim_kiem.service";

declare var $: any;

@Component({
  selector: "shop_productArea",
  templateUrl: "./shop_productArea.component.html"
})
export class ShopProductAreacomponent implements OnInit {
  tieude: string = "";
  mang_tieu_de: string[] = ["shop abc", "shop def", "shop gih", "shop imn"];
  ngay_tao = new Date().getTime();
  mang_san_pham: any[] = [];
  so_san_pham: number = 4;

  mang_gio_hang: any[] = [];

  tim_theo_gia_tu: number = 0;
  tim_theo_gia_den: number = 0;
  demsanpham() {
    this.so_san_pham += 4;
  }

  constructor(
    private service_product: ProductService,
    private service_instance_gio_hang: ServiceInstanceGioHangService,
    private service_instance_tim_kiem: ServiceInstanceTimKiemService
  ) {

    this.service_instance_tim_kiem.lang_nghe.subscribe(dataTimKiem => {
      this.mang_san_pham = dataTimKiem;
    });
  
    this.service_product.getListProduct().then(data => {
      this.service_product
        .sort_product_by_condition("name_az", data)
        .then(datasort => {
          this.mang_san_pham = datasort;
        });
    });

    setInterval(() => {
      let vi_tri_tieu_de = Math.round(
        Math.random() * (this.mang_tieu_de.length - 1)
      );
      this.tieude = this.mang_tieu_de[vi_tri_tieu_de];
    }, 5000);
    // Khởi tạo thông tin giỏ hàng từ session.
    let thong_tin_gio_hang_session = localStorage.getItem("thong_tin_gio_hang");
    if (thong_tin_gio_hang_session)
      this.mang_gio_hang = JSON.parse(thong_tin_gio_hang_session);
  }

  themgiohang(ma_san_pham: any) {
    this.service_instance_gio_hang.goi_event_component_khac(ma_san_pham);
  }

  ngOnInit() {}
}
