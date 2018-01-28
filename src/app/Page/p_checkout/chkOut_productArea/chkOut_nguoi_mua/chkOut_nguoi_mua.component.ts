import { Component, OnInit } from "@angular/core";
import { Country } from "../../../../models/countries";
import { ds_quoc_gia } from "../../../../models/mock_contries";
import { UserService } from "../../../../services/user.service";
import { Menu } from "../../../../models/menu";
import { NguoiDung } from "../../../../models/nguoi_dung";

import { SVInstanceNguoiDungService } from "../../../../services/sv_instance_nguoi_dung.service";
import { SVInstanceNguoiMuaService } from "../../../../services/sv_instance_nguoi_mua.service";

@Component({
  selector: "chkOut_nguoi_mua",
  templateUrl: "./chkOut_nguoi_mua.component.html"
})
export class ChkOutNguoiMuacomponent implements OnInit {
  isLogin: boolean = false;
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
  constructor(
    private nguoi_dung_service: UserService,
    private sv_instance_nguoi_dung: SVInstanceNguoiDungService,
    private sv_instance_nguoi_mua: SVInstanceNguoiMuaService
  ) {
    this.mang_quoc_gia = ds_quoc_gia;
    this.sv_instance_nguoi_dung.lang_nghe.subscribe(dataNguoiDung => {
      if (dataNguoiDung) {
        this.nguoi_dung = this.nguoi_dung_service.getThongTinNguoiDung();
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

      if (this.nguoi_dung) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });

    if (this.nguoi_dung_service.getThongTinNguoiDung()) {
      this.nguoi_dung = this.nguoi_dung_service.getThongTinNguoiDung();
      this.isLogin = true;
      console.log(this.nguoi_dung);
    }
  
    if (!this.is_ship_to_different_address) {
      this.sv_instance_nguoi_mua.goi_event_component_khac(this.nguoi_dung);
    } else {
      this.sv_instance_nguoi_mua.goi_event_component_khac(new NguoiDung("","","","","","","","","","",""));
    }
  }

  ngOnInit() {}
  
  is_ship_to_different_address: boolean = true;

  fnClickGiaoDiaChiKhac(cke: boolean) {
    this.is_ship_to_different_address = cke;
    if (!cke) {
      this.sv_instance_nguoi_mua.goi_event_component_khac(this.nguoi_dung);
    } else {
      this.sv_instance_nguoi_mua.goi_event_component_khac(new NguoiDung("","","","","","","","","","",""));
    }
    console.log(this.is_ship_to_different_address);
  }
}
