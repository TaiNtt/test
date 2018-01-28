import { Injectable } from "@angular/core";
import { SanPham } from "../models/san_pham";
import { Child } from "../models/child";
import { ArrL } from "../models/arrL";


import { ds_san_pham } from "../models/mock_san_pham";
import { promise } from "selenium-webdriver";
import { UserService } from "./user.service";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
  mang_gio_hang: any[] = [];
  mang_san_pham: any[] = [];

  constructor(private service_nguoi_dung: UserService, private http: Http) {
    this.getListProduct().then(data => {
      this.mang_san_pham = data;
    });

    let thong_tin_gio_hang = localStorage.getItem("thong_tin_gio_hang");
    if (thong_tin_gio_hang) this.mang_gio_hang = JSON.parse(thong_tin_gio_hang);
  }

  getListProduct(): Promise<SanPham[]> {
    // console.log(ds_san_pham);
    // if (this.service_nguoi_dung.CheckLogin() == true) {
    //   return Promise.resolve(ds_san_pham);
    // } else {
    //   return Promise.resolve(ds_san_pham.filter(item => item.trang_thai < 2));
    // }
    var arrL= this.http.get("http://localhost:3000/")
      .toPromise()
      .then(data =>         
        (data.json() as SanPham[]).find(x=>x.ten_san_pham==="Alienware") );
     console.log(arrL)
    return Promise.resolve([]);
  }
  getListChild(): Promise<any> {   
    var arrL= this.http.get("http://localhost:3000/")
      .toPromise()
      .then(data =>         
        (data.json() as ArrL[]).find(x=>x.name==="Khuyễn Mãi"));
     console.log(arrL)
    return Promise.resolve(arrL);
  }

  getListProductByName(
    chuoi_can_tim: any,
    ds_can_tim: any = []
  ): Promise<SanPham[]> {
    let ds_san_pham_tim = [];

    if (ds_can_tim.length > 0) {
      ds_san_pham_tim = ds_can_tim.filter(
        item => item.ten_san_pham.toLowerCase().indexOf(chuoi_can_tim) !== -1
      );
    } else {
      ds_san_pham_tim = ds_san_pham.filter(
        item => item.ten_san_pham.toLowerCase().indexOf(chuoi_can_tim) !== -1
      );
    }

    return Promise.resolve(ds_san_pham_tim);
  }

  getListProductByMaxPrice(max_price: any, ds_can_tim: any = []) {
    let ds_san_pham_tim = [];

    if (ds_can_tim.length > 0) {
      ds_san_pham_tim = ds_can_tim.filter(item => item.don_gia < max_price);
    } else {
      ds_san_pham_tim = ds_san_pham.filter(item => item.don_gia < max_price);
    }

    return Promise.resolve(ds_san_pham_tim);
  }
  getListProductByMinPrice(min_price: any, ds_can_tim: any = []) {
    let ds_san_pham_tim = [];
    if (ds_can_tim.length > 0) {
      ds_san_pham_tim = ds_can_tim.filter(item => item.don_gia > min_price);
    } else {
      ds_san_pham_tim = ds_san_pham.filter(item => item.don_gia > min_price);
    }

    return Promise.resolve(ds_san_pham_tim);
  }
  getListByMultiCondition(
    chuoi_can_tim: any,
    max_price: any,
    min_price: any
  ): Promise<SanPham[]> {
    if (max_price > 0 && chuoi_can_tim != "" && min_price > 0) {
      return this.getListProductByName(chuoi_can_tim).then(data => {
        let ds_san_pham_tim = this.getListProductByMaxPrice(
          max_price,
          data
        ).then(datamin => {
          let ds_min = this.getListProductByMinPrice(min_price, datamin);
          return Promise.resolve(ds_min);
        });
        return Promise.resolve(ds_san_pham_tim);
      });
    } else if (max_price > 0 && chuoi_can_tim != "" && min_price == 0) {
      return this.getListProductByName(chuoi_can_tim).then(data => {
        let ds_san_pham_tim = this.getListProductByMaxPrice(max_price, data);
        return Promise.resolve(ds_san_pham_tim);
      });
    } else if (min_price > 0 && max_price > 0 && chuoi_can_tim == "") {
      return this.getListProductByMaxPrice(max_price).then(data => {
        let ds_san_pham_tim = this.getListProductByMinPrice(min_price, data);
        return Promise.resolve(ds_san_pham_tim);
      });
    } else if (max_price > 0 && min_price == 0 && chuoi_can_tim == "") {
      return Promise.resolve(this.getListProductByMaxPrice(max_price));
    } else if (chuoi_can_tim != "" && max_price == 0 && min_price == 0) {
      return Promise.resolve(this.getListProductByName(chuoi_can_tim));
    }
  }

  sort_product_by_condition(
    sl: any,
    ds_san_pham_hien_tai: any[]
  ): Promise<SanPham[]> {
    let ds_sau_sort = [];
    switch (sl) {
      case "name_az":
        ds_sau_sort = ds_san_pham_hien_tai.sort(
          this.dynamicSort("ten_san_pham")
        );

        break;
      case "name_za":
        ds_sau_sort = ds_san_pham_hien_tai.sort(
          this.dynamicSort("-ten_san_pham")
        );
        break;
      case "price_az":
        ds_sau_sort = ds_san_pham_hien_tai.sort(this.dynamicSort("don_gia"));
        break;
      case "price_za":
        ds_sau_sort = ds_san_pham_hien_tai.sort(this.dynamicSort("-don_gia"));
        break;
      case "updateDate_az":
        ds_sau_sort = ds_san_pham_hien_tai.sort(
          this.dynamicSort("ngay_cap_nhat")
        );
        break;
      case "updateDate_za":
        ds_sau_sort = ds_san_pham_hien_tai.sort(
          this.dynamicSort("-ngay_cap_nhat")
        );
        break;
      default:
        break;
    }
    return Promise.resolve(ds_sau_sort);
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  themgiohang(ma_san_pham: any): Promise<any[]> {
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

      if (kiem_tra == 0) {
        //sản phẩm chưa có trong giỏ hàng
        this.mang_san_pham.forEach(san_pham => {
          if (san_pham.ma_san_pham == ma_san_pham) {
            san_pham.so_luong = 1;
            this.mang_gio_hang.push(san_pham);
          }
        });
      }
    } else {
      // chưa có phần tử
      this.mang_san_pham.forEach(san_pham => {
        if (san_pham.ma_san_pham == ma_san_pham) {
          san_pham.so_luong = 1;
          this.mang_gio_hang.push(san_pham);
        }
      });
    }
    localStorage.setItem(
      "thong_tin_gio_hang",
      JSON.stringify(this.mang_gio_hang)
    );

    return Promise.resolve(this.mang_gio_hang);
  }

  dem_so_luong_gio_hang(): Promise<any> {
    let tong_tien = 0;
    let tong_so_luong_gio_hang = 0;
    this.mang_gio_hang.forEach(san_pham_gio_hang => {
      tong_tien += san_pham_gio_hang.don_gia * san_pham_gio_hang.so_luong;
      tong_so_luong_gio_hang += san_pham_gio_hang.so_luong;
    });

    return Promise.resolve({
      tong_tien: tong_tien,
      tong_so_luong: tong_so_luong_gio_hang
    });
  }

  GetProductByMaSanPham(ma_san_pham: any): Promise<any> {
    return this.getListProduct().then(list_product => {
      return Promise.resolve(
        list_product.find(item => item.ma_san_pham == ma_san_pham)
      );
    });
  }
  GetListProductByCategoryId(categoryId): Promise<any> {
    return this.getListProduct().then(list_product => {
      return Promise.resolve(
        list_product.filter(item => item.id_loai_san_pham == categoryId)
      );
    });
  }
  GetListRelatedProductbyProductId(productId): Promise<any> {
    return this.GetProductByMaSanPham(productId).then(san_pham => {
      return this.getListProduct().then(data => {
        let dsTemp = data.filter(
          item => item.id_loai_san_pham == san_pham.id_loai_san_pham
        );
        dsTemp.forEach((sp_related, index) => {
          if (sp_related.ma_san_pham == productId) {
            dsTemp.splice(index, 1);
          }
        });

        return Promise.resolve(dsTemp);
      });
    });
  }

  GetListProductByBrandId(id_thuong_hieu): Promise<any> {
    return this.getListProduct().then(list_product => {
      return Promise.resolve(
        list_product.filter(item => item.id_thuong_hieu == id_thuong_hieu)
      );
    });
  }
}
