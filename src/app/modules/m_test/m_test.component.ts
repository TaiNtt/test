import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
declare var $:any;

@Component({
    selector: 'm_test',
    templateUrl: './m_test.component.html',
    animations: [
        trigger("an_hien_m_chat", [
            state("an", style({
                opacity: 0,
                display: "none"
            })),
            state("hien", style({
                opacity: 1,
                display: "block"
            })),
            transition("an => hien", animate("100ms ease")),
            transition("hien => an", animate("100ms ease"))
        ])
    ]
})

export class MTestComponent implements OnInit {
    thongbao: string;
    solan : number = 0;
    tin_nhan : string;

    hieu_ung: string;
    
    constructor() {
        this.hieu_ung = "an";
    }

    an_hien(){
        if(this.hieu_ung == "an"){
            this.hieu_ung = "hien";
        }
        else{
            this.hieu_ung = "an";
        }
    }
    
    demclick(){
        this.thongbao = " Bạn đã click" +this.solan++;
    }
    /*gui_tin_nhan(event:any){
        if(event.keyCode == 13)
        {
            console.log("đã gửi tin nhắn");
            this.tin_nhan= event.target.value;
            event.target.value = "";
        }
    }*/
    /*xemtruocmail : string;
    xemmail(textarea : any){
        this.xemtruocmail = textarea.value;
    }*/
    danhsachtinnhan : string[] = [];
    noidungchat : string[] = [];
    xylyenter(event:any)
    {
        if(event.keyCode == 13)
        {
            this.danhsachtinnhan.push(event.target.value);
            event.target.value = "";
            this.scroll_div_chat();
        }
    }
    xulyclick(textarea1:any){
        this.danhsachtinnhan.push(textarea1.value);
        textarea1.value="";
        this.scroll_div_chat();
    }

    //#scrollBottom [scrollTop]="scrollBottom.scrollHeight"
    scroll_div_chat(){
        //console.log($(".component_tin_nhan")[0].scrollHeight);
        setTimeout(() => {
            $(".component_tin_nhan").scrollTop($(".component_tin_nhan")[0].scrollHeight);
        }, 10);
    }

    ngOnInit() { }
}