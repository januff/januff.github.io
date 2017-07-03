import {Directive, ElementRef, Renderer, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../common/index';
let $ = require('jquery');

@Directive({selector: '[sidebarWatch]' })

export class SidebarWatchDirective implements OnInit{
  constructor(private el: ElementRef, private _store: Store<fromRoot.AppState>) {}

  /*
   Doing the checks on ngOnInit makes sure the DOM is fully loaded and the
   elements are available to be selected
   */
  ngOnInit() {
    /*
     Watch for the left sidebar state
     */
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className == 'left-sidebar') {
        if (state) {
          $('#main-content').css('left', '75%');
          $('.left-sidebar').css('left', '0');
          $('.top-sidebar').css('left', '75%');
          $('.right-sidebar').css('left', '125%');
          $('.bottom-sidebar').css('left', '75%');
        } else {
          $('#main-content').css('left', '25%');
          $('.left-sidebar').css('left', '-50%');
          $('.top-sidebar').css('left', '25%');
          $('.right-sidebar').css('left', '75%');
          $('.bottom-sidebar').css('left', '0');
        }
      }
    });

    /*
     Watch for the right sidebar state
     */
    this._store.select(fromRoot.getLayoutRightSidenavState).subscribe((state) => {
      /*
       You can use classes (addClass/removeClass) instead of using jQuery css(), or you
       can go completely vanilla by using selectors such as windiw.getElementById(). .
       */
      if (this.el.nativeElement.className == 'right-sidebar') {
        if (state) {
          $('#main-content').css('left', '-25%');
          $('.right-sidebar').css('left', '25%');
          $('.left-sidebar').css('left', '-75%');
          $('.top-sidebar').css('left', '-50%');
          $('.bottom-sidebar').css('left', '-50%');
        } else {
          $('#main-content').css('left', '25%');
          $('.right-sidebar').css('left', '75%');
          $('.left-sidebar').css('left', '-50%');
          $('.top-sidebar').css('left', '25%');
          $('.bottom-sidebar').css('left', '0');
        }
      }
    });

    /*
     Watch for the top sidebar state
     */
    this._store.select(fromRoot.getLayoutTopSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className == 'top-sidebar') {
        if (state) {
          $('#main-content').css('top', '75%');
          $('.top-sidebar').css('top', '0');
          $('.bottom-sidebar').css('top', '125%');
          $('.left-sidebar').css('top', '0');
          $('.right-sidebar').css('top', '75%');
        } else {
          $('#main-content').css('top', '25%');
          $('.top-sidebar').css('top', '-50%');
          $('.bottom-sidebar').css('top', '75%');
          $('.left-sidebar').css('top', '0');
          $('.right-sidebar').css('top', '0');
        }
      }
    });

      /*
     Watch for the bottom sidebar state
     */
    this._store.select(fromRoot.getLayoutBottomSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className == 'bottom-sidebar') {
        if (state) {
          $('#main-content').css('top', '-25%');
          $('.bottom-sidebar').css('top', '25%');
          $('.top-sidebar').css('top', '-75%');
        } else {
          $('#main-content').css('top', '25%');
          $('.bottom-sidebar').css('top', '75%');
          $('.top-sidebar').css('top', '-50%');
        }
      }
    });
  }
}
