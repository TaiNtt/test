import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../../services/product.service";
import { ServiceInstanceTimKiemService } from "../../../../services/service_instance_tim_kiem.service";

declare var $: any;

@Component({
  selector: "shop_tim_kiem",
  templateUrl: "./shop_tim_kiem.component.html"
})
export class ShopTimKiemComponent implements OnInit {
  tim_theo_gia_tu: number = 0;
  tim_theo_gia_den: number = 0;
  mang_san_pham: any[] = [];
  constructor(
    private service_product: ProductService,
    private service_instance_tim_kiem: ServiceInstanceTimKiemService
  ) {
    this.tim_theo_gia_den = 100000000;
    this.service_product.getListProduct().then(data => {
      this.service_product
        .sort_product_by_condition("name_az", data)
        .then(datasort => {
          this.mang_san_pham = datasort;
        });
    });
  }

  tim_san_pham(chuoi_tim: any, tien_thap_nhat, tien_cao_nhat: any, sl: any) {
    this.service_product
      .getListByMultiCondition(chuoi_tim, tien_cao_nhat, tien_thap_nhat)
      .then(data => {
        this.mang_san_pham = data;
        if (data) {
          this.service_instance_tim_kiem.goi_event_component_khac(data);
        }
      });
  }

  cap_nhat_gia_tu(tim_gia_tu: any, gia_tien_den: any) {
    if (this.tim_theo_gia_den * 1 <= tim_gia_tu.value * 1) {
      this.tim_theo_gia_den = tim_gia_tu.value * 1 + 100000;
      gia_tien_den.value = this.tim_theo_gia_den;
    }

    this.tim_theo_gia_tu = tim_gia_tu.value;
  }

  cap_nhat_gia_den(tim_gia_den: any, tim_gia_tu: any) {
    if (this.tim_theo_gia_tu * 1 >= tim_gia_den.value * 1) {
      this.tim_theo_gia_tu = tim_gia_den.value * 1 - 100000;
      tim_gia_tu.value = this.tim_theo_gia_tu;
    }

    this.tim_theo_gia_den = tim_gia_den.value;
  }

  tim_san_pham_keyPress(event, chuoi_tim, tien_thap_nhat, tien_cao_nhat, sl) {
    if (event.keyCode == 13) {
      this.tim_san_pham(chuoi_tim, tien_thap_nhat, tien_cao_nhat, sl);
    }
  }

  sort_change(sl: any) {
    this.service_product
      .sort_product_by_condition(sl.value, this.mang_san_pham)
      .then(data => {
        if (data) {
          this.service_instance_tim_kiem.goi_event_component_khac(data);
        }
      });
  }

  ngOnInit() {}
}
