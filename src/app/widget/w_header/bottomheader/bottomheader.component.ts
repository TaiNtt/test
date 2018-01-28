import { Component, OnInit } from "@angular/core";
import { SanPham } from "../../../models/san_pham";
import { ds_san_pham } from "../../../models/mock_san_pham";
import { ProductService } from "../../../services/product.service";
import { ServiceInstanceGioHangService } from "../../../services/service_instance_gio_hang.service";

declare var $: any;
@Component({
  selector: "bottom_header",
  templateUrl: "./bottomheader.component.html"
})
export class BottomComponent implements OnInit {
  san_pham: SanPham = new SanPham("", "", "", "", "", "", "","");
  mang_gio_hang: any = [];

  thong_tin_gio_hang: any = [];

  mang_san_pham: SanPham[];
  constructor(
    private service_instance_gio_hang: ServiceInstanceGioHangService,
    private service_product: ProductService
  ) {
    this.InitGioHang();
    this.service_instance_gio_hang.lang_nghe.subscribe(data => {
      this.service_product.themgiohang(data).then(data => {
        this.mang_gio_hang = data;
        this.service_product
          .dem_so_luong_gio_hang()
          .then(data_thong_tin_gio_hang => {
            console.log(this.thong_tin_gio_hang);

            this.thong_tin_gio_hang = data_thong_tin_gio_hang;
            console.log(this.thong_tin_gio_hang);
          });
      });
    });

    this.mang_san_pham = ds_san_pham;
  }
  ngOnInit() {
    this.service_product.dem_so_luong_gio_hang().then(data => {
      this.thong_tin_gio_hang = data;
    });
  }
  InitGioHang() {
    if (localStorage.getItem("thong_tin_gio_hang")) {


      this.service_product.dem_so_luong_gio_hang().then(data => {
        this.thong_tin_gio_hang = data;
        console.log(data);
        this.mang_gio_hang = JSON.parse(localStorage.getItem("thong_tin_gio_hang"));
        console.log(this.mang_gio_hang);
      });
    }
  }
  openGiohang() {
    this.InitGioHang();

    if (this.mang_gio_hang == null || this.mang_gio_hang.length < 1) {
      alert("Bạn đã mua gì đâu mà xem");
    } else {
      console.log(this.mang_gio_hang);
      $("#modal_GioHang").removeClass("fade");
      $("#modal_GioHang").addClass("fadein");
      $("#modal_GioHang").show();
    }
  }

  dong_gio_hang() {
    $("#modal_GioHang").addClass("fade");
    $("#modal_GioHang").removeClass("fadein");
    $("#modal_GioHang").hide();
  }
  fnThemSanPham(ma_san_pham: any) {
    if (this.mang_gio_hang.length > 0) {
      // trường hợp đã có phần tử
      let kiem_tra = 0; // biến đại diện kiểm tra có sản phẩm trong giỏ hàng hay chưa

      this.mang_gio_hang.forEach(san_pham_gio_hang => {
        if (san_pham_gio_hang.ma_san_pham == ma_san_pham) {
          // sản phẩm đã có trong giỏ hàng
          san_pham_gio_hang.so_luong += 1;
          kiem_tra = 1;
        }
      });
    }

    this.fnsuccess();
  }
  fnBotSanPham(ma_san_pham) {
    if (this.mang_gio_hang.length > 0) {
      // trường hợp đã có phần tử

      this.mang_gio_hang.forEach(san_pham_gio_hang => {
        if (san_pham_gio_hang.ma_san_pham == ma_san_pham) {
          // sản phẩm đã có trong giỏ hàng
          if (san_pham_gio_hang.so_luong > 1) {
            san_pham_gio_hang.so_luong -= 1;
          }
        }
      });
    }
    this.fnsuccess();
  }
  fnXoaSanPham(ma_san_pham) {
    if (this.mang_gio_hang.length > 0) {
      this.mang_gio_hang.forEach((san_pham_gio_hang, index) => {
        if (san_pham_gio_hang.ma_san_pham == ma_san_pham) {
          this.mang_gio_hang.splice(index, 1);
        }
      });
    }

    if (this.mang_gio_hang.length < 1) {
      this.dong_gio_hang();
    }

    this.fnsuccess();
  }

  fnsuccess() {
    let tong_tien = 0;
    let tong_so_luong_gio_hang = 0;

    this.mang_gio_hang.forEach(san_pham_gio_hang => {
      tong_tien += san_pham_gio_hang.don_gia * san_pham_gio_hang.so_luong;
      tong_so_luong_gio_hang += san_pham_gio_hang.so_luong;
    });
    $(".cart-amunt").html("đ"+ tong_tien*1);
    $(".product-count").html( tong_so_luong_gio_hang);
    localStorage.setItem(
      "thong_tin_gio_hang",
      JSON.stringify(this.mang_gio_hang)
    );
  }
}
