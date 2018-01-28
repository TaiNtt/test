import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { Menu } from "./models/menu";
import { SVInstanceNguoiDungService } from "./services/sv_instance_nguoi_dung.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // templateUrl: './admin.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isQuanTri: boolean = false;
  constructor(
    private nguoi_dung_service: UserService,
    private sv_instance_nguoi_dung: SVInstanceNguoiDungService
  ) {
    this.sv_instance_nguoi_dung.lang_nghe.subscribe(dataNguoiDung => {
      let nguoi_dung = this.nguoi_dung_service.getThongTinNguoiDung();
      if (nguoi_dung) {
        if (nguoi_dung.loai_tai_khoan_id == 2) {
          this.isQuanTri = true;
        } else {
          this.isQuanTri = false;
        }
      } else {
        this.isQuanTri = false;
      }
    });
    if (this.nguoi_dung_service.getThongTinNguoiDung()) {
      if (
        this.nguoi_dung_service.getThongTinNguoiDung().loai_tai_khoan_id == 2
      ) {
        this.isQuanTri = true;
        console.log(this.isQuanTri);
      }
    }
  }
  ngOnInit() {}
}
