import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => ({ "bg-emerald-50 text-emerald-600": a0, "bg-rose-50 text-rose-600": a1, "bg-slate-100 text-slate-500": a2 });
function StatCardComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 6);
    i0.ɵɵelement(1, "path", 9);
    i0.ɵɵelementEnd();
} }
function StatCardComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 6);
    i0.ɵɵelement(1, "path", 10);
    i0.ɵɵelementEnd();
} }
export class StatCardComponent {
    constructor() {
        this.stat = input.required(...(ngDevMode ? [{ debugName: "stat" }] : []));
    }
    static { this.ɵfac = function StatCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatCardComponent, selectors: [["app-stat-card"]], inputs: { stat: [1, "stat"] }, decls: 14, vars: 13, consts: [[1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5", "hover:shadow-card-hover", "transition-shadow", "duration-200", "cursor-default"], [1, "flex", "items-start", "justify-between", "mb-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3", "h-3"], [1, "text-2xl", "font-bold", "text-slate-900", "leading-none", "mb-1"], [1, "text-sm", "text-slate-500", "font-medium"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"]], template: function StatCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "span", 5);
            i0.ɵɵconditionalCreate(6, StatCardComponent_Conditional_6_Template, 2, 0, ":svg:svg", 6);
            i0.ɵɵconditionalCreate(7, StatCardComponent_Conditional_7_Template, 2, 0, ":svg:svg", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div")(10, "p", 7);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.stat().accentClass);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("d", ctx.stat().iconPath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(9, _c0, ctx.stat().trend === "up", ctx.stat().trend === "down", ctx.stat().trend === "neutral"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.stat().trend === "up" ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.stat().trend === "down" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate2(" ", ctx.stat().change > 0 ? "+" : "", "", ctx.stat().change, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.stat().value, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.stat().label, " ");
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatCardComponent, [{
        type: Component,
        args: [{
                selector: 'app-stat-card',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="bg-white rounded-xl border border-slate-200 p-5
                hover:shadow-card-hover transition-shadow duration-200 cursor-default">

      <div class="flex items-start justify-between mb-3">

        <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
             [ngClass]="stat().accentClass">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
                  [attr.d]="stat().iconPath" />
          </svg>
        </div>

        <span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
              [ngClass]="{
                'bg-emerald-50 text-emerald-600': stat().trend === 'up',
                'bg-rose-50 text-rose-600': stat().trend === 'down',
                'bg-slate-100 text-slate-500': stat().trend === 'neutral'
              }">
          @if (stat().trend === 'up') {
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          }
          @if (stat().trend === 'down') {
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          }
          {{ stat().change > 0 ? '+' : '' }}{{ stat().change }}
        </span>

      </div>

      <div>
        <p class="text-2xl font-bold text-slate-900 leading-none mb-1">
          {{ stat().value }}
        </p>
        <p class="text-sm text-slate-500 font-medium">
          {{ stat().label }}
        </p>
      </div>

    </div>
  `
            }]
    }], null, { stat: [{ type: i0.Input, args: [{ isSignal: true, alias: "stat", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatCardComponent, { className: "StatCardComponent", filePath: "src/app/shared/components/stat-card/stat-card.component.ts", lineNumber: 58 }); })();
