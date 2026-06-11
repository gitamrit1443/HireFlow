import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ScoreRingComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3, "/ 100");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.textColor());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.score());
} }
export class ScoreRingComponent {
    constructor() {
        this.score = input(0, ...(ngDevMode ? [{ debugName: "score" }] : []));
        this.size = input(80, ...(ngDevMode ? [{ debugName: "size" }] : []));
        this.showLabel = input(true, ...(ngDevMode ? [{ debugName: "showLabel" }] : []));
        this.circumference = 2 * Math.PI * 32;
        this.dashOffset = computed(() => this.circumference - (this.score() / 100) * this.circumference, ...(ngDevMode ? [{ debugName: "dashOffset" }] : []));
        this.ringColor = computed(() => this.score() >= 80 ? '#10B981' : this.score() >= 60 ? '#F59E0B' : '#EF4444', ...(ngDevMode ? [{ debugName: "ringColor" }] : []));
        this.textColor = computed(() => this.score() >= 80 ? 'text-emerald-600' : this.score() >= 60 ? 'text-amber-600' : 'text-rose-500', ...(ngDevMode ? [{ debugName: "textColor" }] : []));
    }
    static { this.ɵfac = function ScoreRingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScoreRingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScoreRingComponent, selectors: [["app-score-ring"]], inputs: { score: [1, "score"], size: [1, "size"], showLabel: [1, "showLabel"] }, decls: 6, vars: 6, consts: [[1, "relative", "inline-flex", "items-center", "justify-center"], ["viewBox", "0 0 80 80", 1, "-rotate-90"], ["cx", "40", "cy", "40", "r", "32", "fill", "none", "stroke", "#F1F5F9", "stroke-width", "7"], ["cx", "40", "cy", "40", "r", "32", "fill", "none", "stroke-width", "7", "stroke-linecap", "round", 2, "transition", "stroke-dashoffset 0.6s ease"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "text-lg", "font-bold", "leading-none", 3, "ngClass"], [1, "text-xs", "text-slate-400", "leading-none", "mt-0.5"]], template: function ScoreRingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 1);
            i0.ɵɵelement(2, "circle", 2)(3, "circle", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵconditionalCreate(5, ScoreRingComponent_Conditional_5_Template, 4, 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("width", ctx.size())("height", ctx.size());
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("stroke", ctx.ringColor())("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.dashOffset());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showLabel() ? 5 : -1);
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScoreRingComponent, [{
        type: Component,
        args: [{
                selector: 'app-score-ring',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="relative inline-flex items-center justify-center">
      <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 80 80" class="-rotate-90">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="7" />
        <circle cx="40" cy="40" r="32" fill="none"
                [attr.stroke]="ringColor()" stroke-width="7" stroke-linecap="round"
                [attr.stroke-dasharray]="circumference"
                [attr.stroke-dashoffset]="dashOffset()"
                style="transition: stroke-dashoffset 0.6s ease" />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        @if (showLabel()) {
          <span class="text-lg font-bold leading-none" [ngClass]="textColor()">{{ score() }}</span>
          <span class="text-xs text-slate-400 leading-none mt-0.5">/ 100</span>
        }
      </div>
    </div>
  `
            }]
    }], null, { score: [{ type: i0.Input, args: [{ isSignal: true, alias: "score", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], showLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "showLabel", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScoreRingComponent, { className: "ScoreRingComponent", filePath: "src/app/shared/components/score-ring/score-ring.component.ts", lineNumber: 27 }); })();
