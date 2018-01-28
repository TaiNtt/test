export class Menu {
  id_menu: any;
  ten_menu: any;
  page_url: any;
  isPublic: any;
  ds_menu_con: any[];
  trang_thai: any;
  constructor(id_menu, ten_menu, page_url, isPublic, ds_menu_con, trang_thai) {
    this.id_menu = id_menu;
    this.ten_menu = ten_menu;
    this.page_url = page_url;
    this.isPublic = isPublic;
    this.ds_menu_con = ds_menu_con;
    this.trang_thai = trang_thai;
  }
}
