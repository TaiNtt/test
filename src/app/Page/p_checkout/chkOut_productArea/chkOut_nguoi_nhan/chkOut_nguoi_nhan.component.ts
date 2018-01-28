import { Component, OnInit } from "@angular/core";
import { Country } from "../../../../models/countries";
import { ds_quoc_gia } from "../../../../models/mock_contries";
import { UserService } from "../../../../services/user.service";
import { Menu } from "../../../../models/menu";
import { NguoiDung } from "../../../../models/nguoi_dung";
import { SVInstanceNguoiDungService } from "../../../../services/sv_instance_nguoi_dung.service";
import { SVInstanceNguoiMuaService } from "../../../../services/sv_instance_nguoi_mua.service";

@Component({
  selector: "chkOut_nguoi_nhan",
  templateUrl: "./chkOut_nguoi_nhan.component.html"
})
export class ChkOutNguoiNhancomponent implements OnInit {
  mang_quoc_gia: any[] = [];
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
  is_ship_to_different_address: boolean = true;
  constructor(private sv_instance_nguoi_mua: SVInstanceNguoiMuaService) {
    this.mang_quoc_gia = ds_quoc_gia;

    this.sv_instance_nguoi_mua.lang_nghe.subscribe(data => {
      console.log(data);
      if (data) this.nguoi_dung = data;
    });
  }
  ngOnInit() {}
  fnClickGiaoDiaChiKhac(cke: boolean) {
    this.is_ship_to_different_address = cke;
    if (!cke) {
      this.sv_instance_nguoi_mua.lang_nghe.subscribe(data => {
        console.log(data);
        if (data) this.nguoi_dung = data;
      });
    } else {
      this.nguoi_dung = new NguoiDung(
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
    }
    console.log(this.is_ship_to_different_address);
  }
}
