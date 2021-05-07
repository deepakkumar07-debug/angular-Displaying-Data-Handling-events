import { Pipe,PipeTransform } from "@angular/core";
// Pipe decorator function
// PipeTransform interface it defines the shape of our pipes

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform {
    // transform(value: any, args?: any) { optional ?

    // transform(value: any, ...args: any[]) {
    transform(value: string, limit?: number) {
        if(! value) return null;//empty str undefined
        // throw new Error("Method not implemented.");
        
        let actualLimit=(limit) ? limit :50;
        return value.substr(0,actualLimit)+'...';
    }

}