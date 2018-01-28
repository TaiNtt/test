import { Component, OnInit } from "@angular/core";
import { Md5 } from "ts-md5/dist/md5";
import { NguoiDung } from "../../../models/nguoi_dung";
import { MatKhau } from "../../../models/mat_khau";
import { UserService } from "../../..//services/user.service";
import { SVInstanceNguoiDungService } from "../../../services/sv_instance_nguoi_dung.service";

declare var $: any;
@Component({
  selector: "top_header",
  templateUrl: "./topheader.component.html"
})
export class TopHeaderComponent implements OnInit {
  ten_dang_nhap_hien_thi: string;
  editableText = "myText";
  isLogin: boolean;
  submited: boolean = false;
  dangky_or_thay_thoi: boolean = false; //true : dang ky, false : thay doi
  mat_khau_obj = new MatKhau("", "", "");
  valid_email: boolean = true;
  nguoi_dung: NguoiDung = new NguoiDung(
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );
  nguoi_dung_list: any[] = [];
  nhap_lai_mat_khau: string = "";
  constructor(
    private nguoi_dung_service: UserService,
    private _sv_instance_tk: SVInstanceNguoiDungService
  ) {
    this.ten_dang_nhap_hien_thi = localStorage.getItem("nguoi_dung_dang_nhap");
    this.nguoi_dung_list = this.nguoi_dung_service.getListNguoiDung();
    console.log(this.nguoi_dung_list);
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
      // xu ly ajax lên server
    }
  }
  dang_nhap(ten_dang_nhap: any, mat_khau: any) {
    if (ten_dang_nhap.value == "hungnguyen" && mat_khau.value == "123456") {
      this.LoginSuccess(ten_dang_nhap.value);
    } else {
      let objthong_tin_dang_ky = localStorage.getItem("thong_tin_dang_ky");
      let thong_tin_dang_ky = JSON.parse(objthong_tin_dang_ky);
      console.log(thong_tin_dang_ky);
      if (!thong_tin_dang_ky) {
        if (this.nguoi_dung_service.Login(ten_dang_nhap.value, mat_khau.value)) {
          this.LoginSuccess(ten_dang_nhap.value);
        }
      } else if (
        thong_tin_dang_ky.ten_tai_khoan == ten_dang_nhap.value &&
        Md5.hashAsciiStr(mat_khau.value) == thong_tin_dang_ky.mat_khau
      ) {
        this.LoginSuccess(ten_dang_nhap.value);
      } else {
        alert("mật khẩu hoặc tài khoản không chính xác!");
      }
    }
  }
  fnLogOut() {
    this.LogOutSuccess();
  }
  LoginSuccess(ten_dang_nhap) {
    localStorage.setItem("nguoi_dung_dang_nhap", ten_dang_nhap);
    console.log(localStorage.getItem("nguoi_dung_dang_nhap"));
    this.ten_dang_nhap_hien_thi = ten_dang_nhap;
    this.isLogin = true;
    $("#myModal .close").click();
    this._sv_instance_tk.goi_event_component_khac(ten_dang_nhap);
  }
  LogOutSuccess() {
    localStorage.removeItem("nguoi_dung_dang_nhap");
    this.ten_dang_nhap_hien_thi = null;
    this._sv_instance_tk.goi_event_component_khac("");
  }
  fnResetDangky() {
    $("#frmDangKy")
      .find("input[type=text], textarea")
      .val(""); // không chịu chạy
    this.submited = false;

    this.nguoi_dung = new NguoiDung("", "", "", "", "", "", "", "", "", "", "");
  }
  fn_doi_mat_khau(frm) {
    this.mat_khau_obj.current_password = Md5.hashAsciiStr(
      this.mat_khau_obj.current_password
    );
    let objthong_tin_dang_ky = localStorage.getItem("thong_tin_dang_ky");
    let thong_tin_dang_ky = JSON.parse(objthong_tin_dang_ky);

    if (this.mat_khau_obj.current_password == thong_tin_dang_ky.mat_khau) {
      thong_tin_dang_ky.mat_khau = Md5.hashAsciiStr(this.mat_khau_obj.mat_khau);
      thong_tin_dang_ky.re_mat_khau = Md5.hashAsciiStr(
        this.mat_khau_obj.mat_khau
      );

      localStorage.setItem(
        "thong_tin_dang_ky",
        JSON.stringify(thong_tin_dang_ky)
      );
      alert("Đổi mật khẩu thành công!");
    } else {
      alert("Mật khẩu hiện tại không đúng!");
    }
  }
  btnDangKyClick() {
    this.dangky_or_thay_thoi = true;
  }
  btnThayDoiClick() {
    this.dangky_or_thay_thoi = false;
    let objthong_tin_dang_ky = localStorage.getItem("thong_tin_dang_ky");
    let thong_tin_dang_ky = JSON.parse(objthong_tin_dang_ky);
    this.nguoi_dung = thong_tin_dang_ky;
  }
  saveEditable_Email(value) {
    if (this.ValidateEmail(value)) {
      this.nguoi_dung.email = value;
      this.valid_email = true;
    } else {
      let objthong_tin_dang_ky = localStorage.getItem("thong_tin_dang_ky");
      let thong_tin_dang_ky = JSON.parse(objthong_tin_dang_ky);
      this.valid_email = false;
      this.nguoi_dung.email = thong_tin_dang_ky.email;
      alert("Email không hợp lệ!");
    }
  }
  saveEditable_TenTaiKhoan(value) {
    this.nguoi_dung.ten_tai_khoan = value;
  }
  fn_thay_doi_thong_tin(frm) {
    localStorage.setItem("thong_tin_dang_ky", JSON.stringify(this.nguoi_dung));
    alert("Cập nhật thông tin thành công!");
  }
  myHandleError(ev) {}
  ValidateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
}
