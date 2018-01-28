import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Subject } from "rxjs";

@Injectable()
export class SVInstanceNguoiMuaService {
  private doi_tuong_goi: Subject<any> = new ReplaySubject(1);

  constructor() {}

  get lang_nghe(): Observable<any> {
    return this.doi_tuong_goi.asObservable();
  }

  goi_event_component_khac(chuoi: any) {
    this.doi_tuong_goi.next(chuoi);
  }

  khoi_tao_lai_doi_tuong_goi() {
    this.doi_tuong_goi = new ReplaySubject(1);
  }
}
