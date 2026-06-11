import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
function SkeletonComponent_For_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 3);
    i0.ɵɵdomElement(2, "div", 4)(3, "div", 5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElement(4, "div", 6)(5, "div", 7);
    i0.ɵɵdomElementEnd();
} }
function SkeletonComponent_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "tr", 1)(1, "td", 8)(2, "div", 9);
    i0.ɵɵdomElement(3, "div", 10);
    i0.ɵɵdomElementStart(4, "div", 11);
    i0.ɵɵdomElement(5, "div", 12)(6, "div", 13);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(7, "td", 14);
    i0.ɵɵdomElement(8, "div", 15);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "td", 14);
    i0.ɵɵdomElement(10, "div", 16);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(11, "td", 14);
    i0.ɵɵdomElement(12, "div", 17);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "td", 14);
    i0.ɵɵdomElement(14, "div", 18);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(15, "td", 14);
    i0.ɵɵdomElement(16, "div", 19);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElement(17, "td", 14);
    i0.ɵɵdomElementEnd();
} }
function SkeletonComponent_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElement(0, "div", 20);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r0.width())("height", ctx_r0.height());
} }
function SkeletonComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, SkeletonComponent_For_1_Conditional_0_Template, 6, 0, "div", 0);
    i0.ɵɵconditionalCreate(1, SkeletonComponent_For_1_Conditional_1_Template, 18, 0, "tr", 1);
    i0.ɵɵconditionalCreate(2, SkeletonComponent_For_1_Conditional_2_Template, 1, 4, "div", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.variant() === "card" ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.variant() === "row" ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.variant() === "text" ? 2 : -1);
} }
export class SkeletonComponent {
    constructor() {
        this.variant = input('card', ...(ngDevMode ? [{ debugName: "variant" }] : []));
        this.count = input(4, ...(ngDevMode ? [{ debugName: "count" }] : []));
        this.width = input('100%', ...(ngDevMode ? [{ debugName: "width" }] : []));
        this.height = input('16px', ...(ngDevMode ? [{ debugName: "height" }] : []));
        this.items = () => Array.from({ length: this.count() }, (_, i) => i);
    }
    static { this.ɵfac = function SkeletonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SkeletonComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SkeletonComponent, selectors: [["app-skeleton"]], inputs: { variant: [1, "variant"], count: [1, "count"], width: [1, "width"], height: [1, "height"] }, decls: 2, vars: 0, consts: [[1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5", "space-y-3"], [1, "border-b", "border-slate-100"], [1, "shimmer", "rounded", 3, "width", "height"], [1, "flex", "items-start", "justify-between"], [1, "shimmer", "w-10", "h-10", "rounded-xl"], [1, "shimmer", "w-14", "h-5", "rounded-full"], [1, "shimmer", "w-16", "h-7", "rounded"], [1, "shimmer", "w-28", "h-4", "rounded"], [1, "px-5", "py-3.5"], [1, "flex", "items-center", "gap-3"], [1, "shimmer", "w-7", "h-7", "rounded-full"], [1, "space-y-1.5"], [1, "shimmer", "w-28", "h-3.5", "rounded"], [1, "shimmer", "w-20", "h-3", "rounded"], [1, "px-4", "py-3.5"], [1, "shimmer", "w-36", "h-3.5", "rounded"], [1, "shimmer", "w-20", "h-5", "rounded-full"], [1, "shimmer", "w-16", "h-3.5", "rounded"], [1, "shimmer", "w-12", "h-3.5", "rounded"], [1, "shimmer", "w-14", "h-3.5", "rounded"], [1, "shimmer", "rounded"]], template: function SkeletonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, SkeletonComponent_For_1_Template, 3, 3, null, null, i0.ɵɵrepeaterTrackByIdentity);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.items());
        } }, dependencies: [CommonModule], styles: ["@keyframes _ngcontent-%COMP%_shimmer {\n      0%   { background-position: -400px 0; }\n      100% { background-position: 400px 0; }\n    }\n    .shimmer[_ngcontent-%COMP%] {\n      background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);\n      background-size: 800px 100%;\n      animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n      border-radius: 6px;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SkeletonComponent, [{
        type: Component,
        args: [{ selector: 'app-skeleton', standalone: true, imports: [CommonModule], template: `
    @for (i of items(); track i) {
      @if (variant() === 'card') {
        <div class="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
          <div class="flex items-start justify-between">
            <div class="shimmer w-10 h-10 rounded-xl"></div>
            <div class="shimmer w-14 h-5 rounded-full"></div>
          </div>
          <div class="shimmer w-16 h-7 rounded"></div>
          <div class="shimmer w-28 h-4 rounded"></div>
        </div>
      }
      @if (variant() === 'row') {
        <tr class="border-b border-slate-100">
          <td class="px-5 py-3.5">
            <div class="flex items-center gap-3">
              <div class="shimmer w-7 h-7 rounded-full"></div>
              <div class="space-y-1.5">
                <div class="shimmer w-28 h-3.5 rounded"></div>
                <div class="shimmer w-20 h-3 rounded"></div>
              </div>
            </div>
          </td>
          <td class="px-4 py-3.5"><div class="shimmer w-36 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-20 h-5 rounded-full"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-16 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-12 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-14 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"></td>
        </tr>
      }
      @if (variant() === 'text') {
        <div class="shimmer rounded" [style.width]="width()" [style.height]="height()"></div>
      }
    }
  `, styles: ["\n    @keyframes shimmer {\n      0%   { background-position: -400px 0; }\n      100% { background-position: 400px 0; }\n    }\n    .shimmer {\n      background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);\n      background-size: 800px 100%;\n      animation: shimmer 1.4s infinite;\n      border-radius: 6px;\n    }\n  "] }]
    }], null, { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], count: [{ type: i0.Input, args: [{ isSignal: true, alias: "count", required: false }] }], width: [{ type: i0.Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SkeletonComponent, { className: "SkeletonComponent", filePath: "src/app/shared/components/skeleton/skeleton.component.ts", lineNumber: 58 }); })();
