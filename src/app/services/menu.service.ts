import { Injectable } from "@angular/core";
import { Menu } from "../models/menu";
import { ds_menu } from "../models/mock_menu";
import { UserService } from "./user.service";

@Injectable()
export class MenuService {
  constructor(private service_nguoi_dung: UserService) {}
  getListMenu(): Promise<Menu[]> {
    var nguoi_dung = this.service_nguoi_dung.getThongTinNguoiDung();
    if (!nguoi_dung || nguoi_dung.loai_tai_khoan_id == 1)// khách vãn lai hoặc là người dùng
      return Promise.resolve(ds_menu.filter(item => item.isPublic == 1));
    else
      return Promise.resolve(ds_menu);// quản trị load hết menu
  }
}
