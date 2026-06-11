import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AvatarComponent {
    constructor() {
        this.name = input.required(...(ngDevMode ? [{ debugName: "name" }] : []));
        this.color = input('#6366F1', ...(ngDevMode ? [{ debugName: "color" }] : [])); // Default: indigo
        this.size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : []));
        this.initials = computed(() => this.name()
            .split(' ')
            .map(n => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase(), ...(ngDevMode ? [{ debugName: "initials" }] : []));
        this.sizeClass = computed(() => ({
            sm: 'w-7 h-7 text-xs',
            md: 'w-9 h-9 text-sm',
            lg: 'w-11 h-11 text-base',
        }[this.size()]), ...(ngDevMode ? [{ debugName: "sizeClass" }] : []));
    }
    static { this.ɵfac = function AvatarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AvatarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AvatarComponent, selectors: [["app-avatar"]], inputs: { name: [1, "name"], color: [1, "color"], size: [1, "size"] }, decls: 2, vars: 5, consts: [[1, "rounded-full", "flex", "items-center", "justify-center", "font-semibold", "text-white", "select-none", "flex-shrink-0", 3, "ngClass"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("background-color", ctx.color());
            i0.ɵɵproperty("ngClass", ctx.sizeClass());
            i0.ɵɵattribute("title", ctx.name());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.initials(), " ");
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AvatarComponent, [{
        type: Component,
        args: [{
                selector: 'app-avatar',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div
      class="rounded-full flex items-center justify-center font-semibold
             text-white select-none flex-shrink-0"
      [ngClass]="sizeClass()"
      [style.background-color]="color()"
      [attr.title]="name()"
    >
      {{ initials() }}
    </div>
  `
            }]
    }], null, { name: [{ type: i0.Input, args: [{ isSignal: true, alias: "name", required: true }] }], color: [{ type: i0.Input, args: [{ isSignal: true, alias: "color", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AvatarComponent, { className: "AvatarComponent", filePath: "src/app/shared/components/avatar/avatar.component.ts", lineNumber: 21 }); })();
