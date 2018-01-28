
export class SanPham {
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
    ngay_cap_nhat
  ) {
    this.ma_san_pham = ma_san_pham;
    this.ten_san_pham = ten_san_pham;
    this.don_gia = don_gia;
    this.hinh = hinh;
    this.trang_thai = trang_thai;
    this.id_thuong_hieu = id_thuong_hieu;
    this.id_loai_san_pham = id_loai_san_pham;
    this.ngay_cap_nhat = ngay_cap_nhat;
  }
}
