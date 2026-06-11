import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { LayoutService } from '../../../core/services/layout.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class RecruiterLayoutComponent {
    constructor() {
        this.router = inject(Router);
        this.layout = inject(LayoutService);
        this.pageTitle = toSignal(this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(() => {
            let route = this.router.routerState.root;
            while (route.firstChild)
                route = route.firstChild;
            const title = route.snapshot.title ?? 'HireFlow';
            return title.replace(' — HireFlow', '');
        })), { initialValue: 'Dashboard' });
    }
    static { this.ɵfac = function RecruiterLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecruiterLayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecruiterLayoutComponent, selectors: [["app-recruiter-layout"]], decls: 7, vars: 1, consts: [[1, "flex", "h-screen", "min-h-[100dvh]", "overflow-hidden", "bg-slate-50"], [1, "flex-1", "flex", "flex-col", "overflow-hidden", "min-w-0"], [3, "pageTitle"], [1, "flex-1", "min-w-0", "overflow-y-auto", "overflow-x-hidden", "scrollbar-thin", "pb-16", "lg:pb-0"]], template: function RecruiterLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-sidebar");
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelement(3, "app-topbar", 2);
            i0.ɵɵelementStart(4, "main", 3);
            i0.ɵɵelement(5, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "app-bottom-nav");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("pageTitle", ctx.pageTitle());
        } }, dependencies: [RouterOutlet, SidebarComponent, TopbarComponent, BottomNavComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecruiterLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'app-recruiter-layout',
                standalone: true,
                imports: [RouterOutlet, SidebarComponent, TopbarComponent, BottomNavComponent],
                template: `
    <div class="flex h-screen min-h-[100dvh] overflow-hidden bg-slate-50">

      <app-sidebar />

      <div class="flex-1 flex flex-col overflow-hidden min-w-0">

        <app-topbar [pageTitle]="pageTitle()" />

        <main class="flex-1 min-w-0 overflow-y-auto overflow-x-hidden scrollbar-thin pb-16 lg:pb-0">
          <router-outlet />
        </main>

        <app-bottom-nav />
      </div>
    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecruiterLayoutComponent, { className: "RecruiterLayoutComponent", filePath: "src/app/shared/layout/recruiter-layout/recruiter-layout.component.ts", lineNumber: 34 }); })();
