import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InlineEditorModule } from "ng2-inline-editor";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";

//validator
import { EqualValidator } from "./validators/retype_pass";
import { KiemTraTuoiValidator } from "./validators/test_validate";

// Page
import { PageTrangchuComponent } from "./Page/p_trang_chu/p_trang_chu.component";
import { PagepsingleproductComponent } from "./Page/p_single_product/p_single_product.component";
import { PageCartComponent } from "./Page/p_cart/p_cart.component";
import { PageShopComponent } from "./Page/p_shop/p_shop.component";
import { PageCheckoutComponent } from "./Page/p_checkout/p_checkout.component";
import { PageRegisterComponent } from "./Page/p_register/p_register.component";
import { PageAdminTempComponent } from "./Page/p_admin_temp/p_admin_temp.component";
import { PageCategoryComponent } from "./Page/p_category/p_category.component";
import { PageOthersComponent } from "./Page/p_others/p_others.component";

//Page con Trang chu
import { TcBrandcomponent } from "./Page/p_trang_chu/tc_brands/tc_brands.component";
import { TcMaincontentComponent } from "./Page/p_trang_chu/tc_maincontent/tc_maincontent.component";

import { TcProductComponent } from "./Page/p_trang_chu/tc_product/tc_product.component";
import { TCProductLeftComponent } from "./Page/p_trang_chu/tc_product/tc_product_left/tc_product_left.component";
import { TCProductCenterComponent } from "./Page/p_trang_chu/tc_product/tc_product_center/tc_product_center.component";
import { TCProductRightComponent } from "./Page/p_trang_chu/tc_product/tc_product_right/tc_product_right.component";

import { TcPromoComponent } from "./Page/p_trang_chu/tc_promo/tc_promo.component";
import { TcSliderComponent } from "./Page/p_trang_chu/tc_Slider/tc_Slider.component";
//end page trang chu

//page con cua Single Product

import { SpProductAreacomponent } from "./Page/p_single_product/sp_productArea/sp_productArea.component";
import { SideBarLeftSingleProductComponent } from "./Page/p_single_product/sp_productArea/side_bar_left/side_bar_left_single_product.component";
//end page con cua Single Product

//page con cua Shop

import { ShopProductAreacomponent } from "./Page/p_shop/shop_productArea/shop_productArea.component";
import { ShopTimKiemComponent } from "./Page/p_shop/shop_productArea/shop_tim_kiem/shop_tim_kiem.component";

//end page con cua Shop

//page con cua checkOut

import { ChkOutProductAreacomponent } from "./Page/p_checkout/chkOut_productArea/chkOut_productArea.component";
//end page con cua checkOut

//page con cua checkOut

import { CartProductAreacomponent } from "./Page/p_cart/cart_productArea/cart_productArea.component";
import { ChkOutNguoiMuacomponent } from "./Page/p_checkout/chkOut_productArea/chkOut_nguoi_mua/chkOut_nguoi_mua.component";
import { ChkOutNguoiNhancomponent } from "./Page/p_checkout/chkOut_productArea/chkOut_nguoi_nhan/chkOut_nguoi_nhan.component";

//end page con cua checkOut

//page con của Category
import { CateMobilePhoneComponent } from "./Page/p_category/cate_mobile_phone/cate_mobile_phone.component";
import { CateLapTopComponent } from "./Page/p_category/cate_laptop/cate_laptop.component";
import { CateMayNgheNhacComponent } from "./Page/p_category/cate_may_nghe_nhac/cate_may_nghe_nhac.component";
import { CateMayTinhPcComponent } from "./Page/p_category/cate_pc/cate_pc.component";
import { CatePhuKienComponent } from "./Page/p_category/cate_phu_kien/cate_phu_kien.component";
import { CatePlayStaytionComponent } from "./Page/p_category/cate_ps/cate_ps.component";
import { CateSimComponent } from "./Page/p_category/cate_sim/cate_sim.component";
import { CateTabletComponent } from "./Page/p_category/cate_tablet/cate_tablet.component";
import { CateCardDienThoaiComponent } from "./Page/p_category/cate_card_dien_thoai/cate_card_dien_thoai.component";
import { CateServerComponent } from "./Page/p_category/cate_server/cate_server.component";

//end page con category

// end Page

// Header
import { WheaderComponent } from "./widget/w_header/w_header.component";
import { TopHeaderComponent } from "./widget/w_header/topheader/topheader.component";
import { BottomComponent } from "./widget/w_header/bottomheader/bottomheader.component";
// end header

// footer
import { WFooterComponent } from "./widget/w_footer/w_footer.component";
import { TopfooterComponent } from "./widget/w_footer/top_footer/top_footer.component";
import { BottomfooterComponent } from "./widget/w_footer/bottom_footer/bottom_footer.component";
// end footer

//Menu
import { W_MenuComponent } from "./widget/w_menu/w_menu.component";

//list module
import { ModuleSearchProductComponent } from "./modules/m_search_product/m_search_product.component";
import { MTestComponent } from "./modules/m_test/m_test.component";
//

//list service
import { ProductService } from "./services/product.service";
import { UserService } from "./services/user.service";
import { MenuService } from "./services/menu.service";
import { CategoryProductService } from "./services/loai_san_pham.service";
import { BrandService } from "./services/brand.service";

//

//list service instance
import { ServiceInstanceGioHangService } from "./services/service_instance_gio_hang.service";
import { ServiceInstanceTimKiemService } from "./services/service_instance_tim_kiem.service";
import { SVInstanceNguoiDungService } from "./services/sv_instance_nguoi_dung.service";
import { SVInstanceNguoiMuaService } from "./services/sv_instance_nguoi_mua.service";

@NgModule({
  declarations: [
    AppComponent,

    EqualValidator,
    KiemTraTuoiValidator,

    PageTrangchuComponent,
    PagepsingleproductComponent,
    PageCartComponent,
    PageShopComponent,
    PageCheckoutComponent,
    PageRegisterComponent,
    PageAdminTempComponent,
    PageCategoryComponent,
    PageOthersComponent,

    TcBrandcomponent,
    TcMaincontentComponent,

    TcProductComponent,
    TcPromoComponent,
    TcSliderComponent,
    TCProductLeftComponent,
    TCProductCenterComponent,
    TCProductRightComponent,

    SpProductAreacomponent,
    SideBarLeftSingleProductComponent,

    ShopProductAreacomponent,
    ShopTimKiemComponent,

    ChkOutProductAreacomponent,
    ChkOutNguoiNhancomponent,
    ChkOutNguoiMuacomponent,

    CartProductAreacomponent,

    CateMobilePhoneComponent,
    CateLapTopComponent,
    CateMayNgheNhacComponent,
    CateMayTinhPcComponent,
    CatePhuKienComponent,
    CatePlayStaytionComponent,
    CateSimComponent,
    CateTabletComponent,
    CateCardDienThoaiComponent,
    CateServerComponent,

    WheaderComponent,
    TopHeaderComponent,
    BottomComponent,
    WFooterComponent,
    TopfooterComponent,
    BottomfooterComponent,
    W_MenuComponent,

    ModuleSearchProductComponent,
    MTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InlineEditorModule,
    AngularFontAwesomeModule,
    RouterModule,
    routing,
    HttpModule
  ],
  providers: [
    ProductService,
    UserService,
    MenuService,
    CategoryProductService,
    BrandService,

    ServiceInstanceGioHangService,
    ServiceInstanceTimKiemService,
    SVInstanceNguoiDungService,
    SVInstanceNguoiMuaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
