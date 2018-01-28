import { MatKhau } from "./mat_khau";
export class NguoiDung extends MatKhau {
  ho_ten: string;
  ten_tai_khoan: string;
  ngay_sinh: number;
  noi_sinh: string;
  cmnd: string;
  email: string;
  so_dien_thoai: string;
  dia_chi: string;
  loai_tai_khoan_id: any;
  quoc_gia_id: any;
  ten_cong_ty: any;
  ma_so_thue: any;
  constructor(
    ho_ten,
    ten_tai_khoan,
    mat_khau,
    re_mat_khau,
    current_password,
    ngay_sinh,
    noi_sinh,
    cmnd,
    email,
    so_dien_thoai,
    dia_chi
  ) {
    super(mat_khau, re_mat_khau, current_password);
  }
}
