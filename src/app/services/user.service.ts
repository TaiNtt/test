import { Injectable } from "@angular/core";
import { NguoiDung } from "../models/nguoi_dung";
import { ds_nguoi_dung } from "../models/mock_nguoi_dung";
import { Md5 } from 'ts-md5/dist/md5';


@Injectable()
export class UserService {
  isLogined: boolean = false;
  thong_tin_dang_nhap: any;
  constructor() {
    this.thong_tin_dang_nhap = localStorage.getItem("nguoi_dung_dang_nhap");
    if (this.thong_tin_dang_nhap) {
      this.isLogined = true;
    }
  }

  CheckLogin() {
    return this.isLogined;
  }
  getListNguoiDung() {
    return ds_nguoi_dung;
  }

  Login(user, pass) {
    console.log(user,pass)
    let checktk = ds_nguoi_dung.find(x => x.ten_tai_khoan == user);
    console.log(checktk)
    if (checktk) {
      let checkmk = ds_nguoi_dung.find(x => x.mat_khau == Md5.hashAsciiStr(pass));
    console.log(checkmk)

      if (checkmk) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getThongTinNguoiDung() {
    console.log(localStorage.getItem("nguoi_dung_dang_nhap"));
    if (!localStorage.getItem("nguoi_dung_dang_nhap")) return null;
    else {
      let nguoi_dung = ds_nguoi_dung.find(
        data => data.ten_tai_khoan == localStorage.getItem("nguoi_dung_dang_nhap")
      );
      return nguoi_dung;
    }
  }
}
