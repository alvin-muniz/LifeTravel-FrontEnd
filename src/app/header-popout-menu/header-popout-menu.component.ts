import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-popout-menu',
  templateUrl: './header-popout-menu.component.html',
  styleUrls: ['./header-popout-menu.component.less']
})
export class HeaderPopoutMenuComponent implements OnInit {

  @HostBinding('style.top') y = '72px';
  @HostBinding('style.left') x = '0px';
  @HostBinding('style.visibility') visibility = 'hidden';
  @Input() @HostBinding('style.width') width = '288px';
  @Input() links: any[];
  constructor() { }

  ngOnInit(): void {
  }

  open(e: MouseEvent): void {
  //   this.x = `${e.pageX}px`;
  //   this.y = `${e.pageY}px`;

    this.visibility = 'visible';

    e.stopPropagation();
  }

  close(): void {
    this.visibility = 'hidden';
  }

  @HostListener('document:click')
  public onDocumentClick(): void {
    if (this.visibility === 'visible') {
      this.close();
    }
  }
}
