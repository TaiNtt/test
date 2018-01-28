import { RouterModule, Routes } from "@angular/router";

import { PageTrangchuComponent } from "./Page/p_trang_chu/p_trang_chu.component";
import { PageShopComponent } from "./Page/p_shop/p_shop.component";
import { PagepsingleproductComponent } from "./Page/p_single_product/p_single_product.component";
import { PageCartComponent } from "./Page/p_cart/p_cart.component";
import { PageCheckoutComponent } from "./Page/p_checkout/p_checkout.component";
import { PageCategoryComponent } from "./Page/p_category/p_category.component";
import { PageOthersComponent } from "./Page/p_others/p_others.component";
import { CateMobilePhoneComponent } from "./Page/p_category/cate_mobile_phone/cate_mobile_phone.component";
import { CateLapTopComponent } from "./Page/p_category/cate_laptop/cate_laptop.component";
import { CateMayNgheNhacComponent } from "./Page/p_category/cate_may_nghe_nhac/cate_may_nghe_nhac.component";
import { CateMayTinhPcComponent } from "./Page/p_category/cate_pc/cate_pc.component";
import { CatePhuKienComponent } from "./Page/p_category/cate_phu_kien/cate_phu_kien.component";
import { CateCardDienThoaiComponent } from "./Page/p_category/cate_card_dien_thoai/cate_card_dien_thoai.component";
import { CateSimComponent } from "./Page/p_category/cate_sim/cate_sim.component";
import { CateTabletComponent } from "./Page/p_category/cate_tablet/cate_tablet.component";
import { CatePlayStaytionComponent } from "./Page/p_category/cate_ps/cate_ps.component";
import { CateServerComponent } from "./Page/p_category/cate_server/cate_server.component";

const routes: Routes = [
  { path: "", component: PageTrangchuComponent },
  { path: "home", component: PageTrangchuComponent },
  { path: "shop_page", component: PageShopComponent },
  { path: "sing_product", component: PagepsingleproductComponent },
  { path: "cart", component: PageCartComponent },
  { path: "checkout", component: PageCheckoutComponent },
  { path: "Category", component: PageCategoryComponent },
  { path: "Others", component: PageOthersComponent },
  { path: "dien_thoai", component: CateMobilePhoneComponent },
  { path: "pc", component: CateMayTinhPcComponent },
  { path: "phu_kien", component: CatePhuKienComponent },
  { path: "ps", component: CatePlayStaytionComponent },
  { path: "sim", component: CateSimComponent },
  { path: "tablet", component: CateTabletComponent },
  { path: "card_dien_thoai", component: CateCardDienThoaiComponent },
  { path: "may_nghe_nhac", component: CateMayNgheNhacComponent },
  { path: "server", component: CateServerComponent },
  { path: "laptop", component: CateLapTopComponent },

  { path: "san-pham/:ma_san_pham", component: PagepsingleproductComponent },
  { path: "category/:id_thuong_hieu", component: PageCategoryComponent }
];

export const routing = RouterModule.forRoot(routes);
