import { Component, OnInit } from "@angular/core";
import { NguoiDung } from "../../models/nguoi_dung";
import { MatKhau } from "../../models/mat_khau";

import { Md5 } from "ts-md5/dist/md5";
@Component({
  selector: "p-register",
  templateUrl: "./p_register.component.html"
})
export class PageRegisterComponent implements OnInit {
  submited: boolean = false;
  mat_khau_obj = new MatKhau("", "","");
  nguoi_dung: NguoiDung = new NguoiDung("", "","", "", "", "", "", "", "", "", "");
  nhap_lai_mat_khau: string = "";

  constructor() {
    console.log(this.nguoi_dung);
  }

  ngOnInit() {}

  gui_form(form_dang_ky: any) {
    if (form_dang_ky.form.valid) {
      this.submited = true;
      this.nguoi_dung.mat_khau = Md5.hashAsciiStr(this.nguoi_dung.mat_khau);
      this.nguoi_dung.re_mat_khau = Md5.hashAsciiStr(
        this.nguoi_dung.re_mat_khau
      );
      localStorage.setItem(
        "thong_tin_dang_ky",
        JSON.stringify(this.nguoi_dung)
      );
      //xu ly ajax lên server
    }
  }
}
