import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header-popout-menu',
  templateUrl: './header-popout-menu.component.html',
  styleUrls: ['./header-popout-menu.component.less'],
  animations: [
  trigger('openClose', [
    // ...
    state('open', style({
      width: '288px',
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      width: '0px',
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),
],
})
export class HeaderPopoutMenuComponent implements OnInit {
  constructor() { }

  @HostBinding('style.top') y = '72px';
  @HostBinding('style.left') x = '0px';
  @HostBinding('style.visibility') visibility = 'hidden';
  @Input() @HostBinding('style.width') width = '288px';
  @Input() links: any[];

  isOpen = true;

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

  toggle() {
    if (this.isOpen) {
      this.isOpen = !this.isOpen;
    }
    else {
      this.isOpen = true;
    }

  }


  @HostListener('document:click')
  public onDocumentClick(): void {
    if (this.visibility === 'visible') {
      this.close();
    }
  }
}
