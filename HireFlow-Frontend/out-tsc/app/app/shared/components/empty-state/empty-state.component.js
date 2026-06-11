import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class EmptyStateComponent {
    constructor() {
        this.heading = input('Nothing here yet', ...(ngDevMode ? [{ debugName: "heading" }] : []));
        this.body = input('Get started by creating your first entry.', ...(ngDevMode ? [{ debugName: "body" }] : []));
        this.iconPath = input('M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', ...(ngDevMode ? [{ debugName: "iconPath" }] : []));
        this.iconBgClass = input('bg-slate-100', ...(ngDevMode ? [{ debugName: "iconBgClass" }] : []));
        this.iconColorClass = input('text-slate-400', ...(ngDevMode ? [{ debugName: "iconColorClass" }] : []));
    }
    static { this.ɵfac = function EmptyStateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EmptyStateComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { heading: [1, "heading"], body: [1, "body"], iconPath: [1, "iconPath"], iconBgClass: [1, "iconBgClass"], iconColorClass: [1, "iconColorClass"] }, ngContentSelectors: _c0, decls: 10, vars: 7, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-6", "text-center"], [1, "w-14", "h-14", "rounded-2xl", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-sm", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "max-w-xs"], [1, "mt-5"]], template: function EmptyStateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(2, "svg", 2);
            i0.ɵɵdomElement(3, "path", 3);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(4, "h3", 4);
            i0.ɵɵtext(5);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "p", 5);
            i0.ɵɵtext(7);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(8, "div", 6);
            i0.ɵɵprojection(9);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.iconBgClass());
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.iconColorClass());
            i0.ɵɵadvance();
            i0.ɵɵattribute("d", ctx.iconPath());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.heading());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.body());
        } }, dependencies: [CommonModule], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyStateComponent, [{
        type: Component,
        args: [{
                selector: 'app-empty-state',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
           [class]="iconBgClass()">
        <svg class="w-7 h-7" [class]="iconColorClass()"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="iconPath()" />
        </svg>
      </div>
      <h3 class="text-sm font-semibold text-slate-800 mb-1">{{ heading() }}</h3>
      <p class="text-sm text-slate-500 max-w-xs">{{ body() }}</p>
      <div class="mt-5"><ng-content /></div>
    </div>
  `
            }]
    }], null, { heading: [{ type: i0.Input, args: [{ isSignal: true, alias: "heading", required: false }] }], body: [{ type: i0.Input, args: [{ isSignal: true, alias: "body", required: false }] }], iconPath: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconPath", required: false }] }], iconBgClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconBgClass", required: false }] }], iconColorClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconColorClass", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src/app/shared/components/empty-state/empty-state.component.ts", lineNumber: 23 }); })();
