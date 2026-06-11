import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class StageBadgeComponent {
    constructor() {
        this.stage = input.required(...(ngDevMode ? [{ debugName: "stage" }] : []));
        this.STAGE_CONFIG = {
            applied: { label: 'Applied', badgeClass: 'bg-blue-100 text-blue-700', dotClass: 'bg-blue-500' },
            shortlisted: { label: 'Shortlisted', badgeClass: 'bg-indigo-100 text-indigo-700', dotClass: 'bg-indigo-500' },
            assessment: { label: 'Assessment', badgeClass: 'bg-amber-100 text-amber-700', dotClass: 'bg-amber-500' },
            interview: { label: 'Interview', badgeClass: 'bg-violet-100 text-violet-700', dotClass: 'bg-violet-500' },
            hr_round: { label: 'HR Round', badgeClass: 'bg-orange-100 text-orange-700', dotClass: 'bg-orange-500' },
            selected: { label: 'Selected', badgeClass: 'bg-emerald-100 text-emerald-700', dotClass: 'bg-emerald-500' },
            rejected: { label: 'Rejected', badgeClass: 'bg-rose-100 text-rose-700', dotClass: 'bg-rose-500' },
        };
        this.stageConfig = computed(() => this.STAGE_CONFIG[this.stage()], ...(ngDevMode ? [{ debugName: "stageConfig" }] : []));
        this.badgeClass = computed(() => this.stageConfig().badgeClass, ...(ngDevMode ? [{ debugName: "badgeClass" }] : []));
        this.dotClass = computed(() => this.stageConfig().dotClass, ...(ngDevMode ? [{ debugName: "dotClass" }] : []));
    }
    static { this.ɵfac = function StageBadgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StageBadgeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StageBadgeComponent, selectors: [["app-stage-badge"]], inputs: { stage: [1, "stage"] }, decls: 3, vars: 3, consts: [[1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", "whitespace-nowrap", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", "flex-shrink-0", 3, "ngClass"]], template: function StageBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelement(1, "span", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.badgeClass());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.dotClass());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.stageConfig().label, " ");
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StageBadgeComponent, [{
        type: Component,
        args: [{
                selector: 'app-stage-badge',
                standalone: true,
                imports: [CommonModule],
                template: `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
                 text-xs font-semibold whitespace-nowrap"
          [ngClass]="badgeClass()">
      <span class="w-1.5 h-1.5 rounded-full flex-shrink-0"
            [ngClass]="dotClass()">
      </span>
      {{ stageConfig().label }}
    </span>
  `
            }]
    }], null, { stage: [{ type: i0.Input, args: [{ isSignal: true, alias: "stage", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StageBadgeComponent, { className: "StageBadgeComponent", filePath: "src/app/shared/components/stage-badge/stage-badge.component.ts", lineNumber: 21 }); })();
