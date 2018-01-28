import { Component, OnInit, trigger, state, style, transition, animate } from "@angular/core";
import { MenuService } from "../../services/menu.service";
import { Menu } from "../../models/menu";
import { SVInstanceNguoiDungService } from "../../services/sv_instance_nguoi_dung.service";

@Component({
  selector: "w_menu",
  templateUrl: "./w_menu.component.html",
  animations: [
    trigger("hieu_ung_an_hien_menu_con", [
      state("an_menu_con", style({
        height: "0px",
        overflow: "hidden"
      })),
      state("hien_menu_con", style({
        height: "*",
        overflow: "hidden"
      })),
      transition("an_menu_con <=> hien_menu_con", animate("0.4s ease"))
    ])
  ]
})
export class W_MenuComponent implements OnInit {
  mang_menu: any[] = [];

  constructor(
    private menu_service: MenuService,
    private sv_instance_nguoi_dung: SVInstanceNguoiDungService
  ) {
    this.sv_instance_nguoi_dung.lang_nghe.subscribe(dataNguoiDung => {
      this.menu_service.getListMenu().then(data => {
        this.mang_menu = data;
        console.log(data);
      });
    });

    this.menu_service.getListMenu().then(data => {
      this.mang_menu = data;
      console.log(data);
    });
  }
  ngOnInit() {}

  hien_thi_menu_con(menu: any){
    menu.trang_thai = "hien_menu_con";
  }

  an_menu_con(menu: any){
    menu.trang_thai = "an_menu_con";
  }
}
