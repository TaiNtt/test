import { Child } from "./child";
export class ArrL extends Child {
  ma_san_pham: any;
  ten_san_pham: any;
  don_gia: any;
  hinh: any;
  trang_thai: any;
  id_loai_san_pham: any;
  id_thuong_hieu: any;
  ngay_cap_nhat: any;
  
  constructor(
    ma_san_pham,
    ten_san_pham,
    don_gia,
    hinh,
    trang_thai,
    id_loai_san_pham,
    id_thuong_hieu,
    ngay_cap_nhat,
    myId,
    name
  ) {
    super(myId, name);
  }
}
