import { Component, OnInit } from "@angular/core";
import { Route, ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { SanPham } from "../../../models/san_pham";
declare var $:any;

@Component({
  selector: "sp_productArea",
  templateUrl: "./sp_productArea.component.html"
})
export class SpProductAreacomponent implements OnInit {
  san_pham: SanPham = new SanPham("", "", "", "", "", "", "","");
  list_realted_product: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private service_product: ProductService
  ) {
    this.route.params.subscribe((param: Params) => {
      this.service_product
        .GetProductByMaSanPham(param.ma_san_pham)
        .then(data => {
          console.log(data);
          if (data) {
            this.san_pham = data;
            this.getDanhSachSanPhamLienQuan(data.ma_san_pham);
          }
        });
    });
  }

  getDanhSachSanPhamLienQuan(productId) {
    this.service_product
      .GetListRelatedProductbyProductId(productId)
      .then(data => {
        this.list_realted_product = data;
        console.log(data);
      });
  }

  ngOnInit() {
    setTimeout(() => {
      $('.related-products-carousel').owlCarousel({
          loop:true,
          nav:true,
          margin:20,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:2,
              },
              1000:{
                  items:2,
              },
              1200:{
                  items:3,
              }
          }
      });  
    }, 50)
  }
}
