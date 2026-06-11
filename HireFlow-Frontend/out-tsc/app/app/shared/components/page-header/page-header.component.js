import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function PageHeaderComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle());
} }
export class PageHeaderComponent {
    constructor() {
        this.title = input.required(...(ngDevMode ? [{ debugName: "title" }] : []));
        this.subtitle = input('', ...(ngDevMode ? [{ debugName: "subtitle" }] : []));
    }
    static { this.ɵfac = function PageHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PageHeaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"] }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "flex", "items-center", "gap-2", "flex-shrink-0"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div")(2, "h1", 1);
            i0.ɵɵtext(3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(4, PageHeaderComponent_Conditional_4_Template, 2, 1, "p", 2);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "div", 3);
            i0.ɵɵprojection(6);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subtitle() ? 4 : -1);
        } }, dependencies: [CommonModule], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'app-page-header',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-lg font-bold text-slate-900">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-sm text-slate-500 mt-0.5">{{ subtitle() }}</p>
        }
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <ng-content />
      </div>
    </div>
  `
            }]
    }], null, { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], subtitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src/app/shared/components/page-header/page-header.component.ts", lineNumber: 23 }); })();
