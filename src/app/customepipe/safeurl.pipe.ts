import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
