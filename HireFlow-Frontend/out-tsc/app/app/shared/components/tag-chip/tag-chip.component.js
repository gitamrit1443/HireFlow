import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class TagChipComponent {
    constructor() {
        this.label = input.required(...(ngDevMode ? [{ debugName: "label" }] : []));
    }
    static { this.ɵfac = function TagChipComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TagChipComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TagChipComponent, selectors: [["app-tag-chip"]], inputs: { label: [1, "label"] }, decls: 2, vars: 1, consts: [[1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded", "text-xs", "font-medium", "bg-slate-100", "text-slate-600", "whitespace-nowrap"]], template: function TagChipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.label(), " ");
        } }, dependencies: [CommonModule], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagChipComponent, [{
        type: Component,
        args: [{
                selector: 'app-tag-chip',
                standalone: true,
                imports: [CommonModule],
                template: `
    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                 bg-slate-100 text-slate-600 whitespace-nowrap">
      {{ label() }}
    </span>
  `
            }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TagChipComponent, { className: "TagChipComponent", filePath: "src/app/shared/components/tag-chip/tag-chip.component.ts", lineNumber: 16 }); })();
