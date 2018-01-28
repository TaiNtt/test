import { Component, OnInit } from "@angular/core";
import { Route, ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "p_single_product",
  templateUrl: "./p_single_product.component.html"
})
export class PagepsingleproductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service_product: ProductService
  ) {}

  ngOnInit() {
  }
}
