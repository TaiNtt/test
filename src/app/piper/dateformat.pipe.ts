import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})
export class dateFormatPipe implements PipeTransform {
    transform(value: string, language: string, type: string) {
    //    var datePipe = new DatePipe("vi-VI");
    //    var weekday,day,month,year;
    //     weekday = datePipe.transform(value, 'EEEE');
    //     day = datePipe.transform(value, 'dd');
    //     month = datePipe.transform(value, 'MM');
    //     year = datePipe.transform(value, 'yyyy');
    //     return weekday+' - ngày '+day+' - tháng '+month+' - năm '+year;
        let ngay_chuyen = new Date(value);
        
        let mang_ngay_vi = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
        let mang_ngay_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let mang_thang_vi = ["giêng", "hai", "ba", "tư", "năm", "sáu", "bảy", "tám", "chín", "mười", "mười một", "mười hai"];
        let mang_thang_en = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        //console.log(language, type);
        let days = ngay_chuyen.getDate();
        let weekday = ngay_chuyen.getDay();
        let month = ngay_chuyen.getMonth();
        let year = ngay_chuyen.getFullYear();

        if(language == "vi"){
            if(type == "short"){
                return days + '/' + (month + 1) + '/' + year;
            }
            else{
                return mang_ngay_vi[weekday] + ' ngày ' + days + ' tháng ' + mang_thang_vi[month] + ' năm ' + year; 
            }
        }
        else
        {
            if(type == "short"){
                return (month + 1) + '/' + days + '/' + year;
            }
            else{
                return mang_ngay_en[weekday] + ' ' + mang_thang_en[month] + ' ' + days + ' ' + year; 
            }
        }
    }
}