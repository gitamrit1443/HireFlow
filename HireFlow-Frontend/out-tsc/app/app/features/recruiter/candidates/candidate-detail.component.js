import { Component, inject, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import { TagChipComponent } from '../../../shared/components/tag-chip/tag-chip.component';
import { ScoreRingComponent } from '../../../shared/components/score-ring/score-ring.component';
import { PlagiarismCheckComponent } from '../../../shared/components/plagiarism-check/plagiarism-check.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => ({ "border-indigo-600 bg-indigo-600": a0, "border-emerald-500 bg-emerald-500": a1, "border-slate-200 bg-white": a2 });
const _c1 = (a0, a1, a2) => ({ "text-indigo-600": a0, "text-emerald-600": a1, "text-slate-400": a2 });
const _forTrack0 = ($index, $item) => $item.stage;
const _forTrack1 = ($index, $item) => $item.key;
function CandidateDetailComponent_Conditional_1_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-tag-chip", 19);
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    i0.ɵɵproperty("label", tag_r1);
} }
function CandidateDetailComponent_Conditional_1_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "app-score-ring", 45);
    i0.ɵɵelementStart(2, "p", 46);
    i0.ɵɵtext(3, "Composite Score");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("score", ctx_r1.candidate().score)("size", 80);
} }
function CandidateDetailComponent_Conditional_1_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function CandidateDetailComponent_Conditional_1_Conditional_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.advanceStage()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Move to ", ctx_r1.nextStageLabel(), " \u2192 ");
} }
function CandidateDetailComponent_Conditional_1_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵtext(1, " Reject Candidate ");
    i0.ɵɵelementEnd();
} }
function CandidateDetailComponent_Conditional_1_For_46_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 50);
    i0.ɵɵelement(1, "path", 55);
    i0.ɵɵelementEnd();
} }
function CandidateDetailComponent_Conditional_1_For_46_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 51);
} }
function CandidateDetailComponent_Conditional_1_For_46_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 52);
} }
function CandidateDetailComponent_Conditional_1_For_46_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 54);
} if (rf & 2) {
    const step_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.isStageComplete(step_r4.stage) ? "bg-emerald-400" : "bg-slate-200");
} }
function CandidateDetailComponent_Conditional_1_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49);
    i0.ɵɵconditionalCreate(2, CandidateDetailComponent_Conditional_1_For_46_Conditional_2_Template, 2, 0, ":svg:svg", 50)(3, CandidateDetailComponent_Conditional_1_For_46_Conditional_3_Template, 1, 0, "span", 51)(4, CandidateDetailComponent_Conditional_1_For_46_Conditional_4_Template, 1, 0, "span", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 53);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, CandidateDetailComponent_Conditional_1_For_46_Conditional_7_Template, 1, 1, "div", 54);
} if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const ɵ$index_93_r5 = ctx.$index;
    const ɵ$count_93_r6 = ctx.$count;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.getStepState(step_r4.stage) === "current" ? "w-32" : "w-24");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c0, ctx_r1.getStepState(step_r4.stage) === "current", ctx_r1.getStepState(step_r4.stage) === "done", ctx_r1.getStepState(step_r4.stage) === "upcoming"));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.getStepState(step_r4.stage) === "done" ? 2 : ctx_r1.getStepState(step_r4.stage) === "current" ? 3 : 4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(10, _c1, ctx_r1.getStepState(step_r4.stage) === "current", ctx_r1.getStepState(step_r4.stage) === "done", ctx_r1.getStepState(step_r4.stage) === "upcoming"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(step_r4.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(ɵ$index_93_r5 === ɵ$count_93_r6 - 1) ? 7 : -1);
} }
function CandidateDetailComponent_Conditional_1_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", skill_r7, " ");
} }
function CandidateDetailComponent_Conditional_1_Conditional_56_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "span", 63);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 64);
    i0.ɵɵelement(4, "div", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 66);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const dim_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dim_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.getScore(dim_r8.key) / 10 * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getScore(dim_r8.key), "/10 ");
} }
function CandidateDetailComponent_Conditional_1_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 56)(2, "h2", 57);
    i0.ɵɵtext(3, "Evaluation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 58);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 59);
    i0.ɵɵrepeaterCreate(7, CandidateDetailComponent_Conditional_1_Conditional_56_For_8_Template, 7, 4, "div", 60, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 61)(10, "span", 41);
    i0.ɵɵtext(11, " Evaluated by ");
    i0.ɵɵelementStart(12, "strong", 62);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r1.getRecommendationStyle(ctx_r1.score().recommendation));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getRecommendationLabel(ctx_r1.score().recommendation), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.scoreDimensions);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.score().evaluatedBy);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" on ", ctx_r1.formatDate(ctx_r1.score().evaluatedAt), " ");
} }
function CandidateDetailComponent_Conditional_1_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "h2", 67);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 3);
    i0.ɵɵelement(3, "path", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Recruiter Notes ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "p", 69);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().notes);
} }
function CandidateDetailComponent_Conditional_1_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "h2", 70);
    i0.ɵɵtext(2, "Interview Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.score().notes);
} }
function CandidateDetailComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 3);
    i0.ɵɵelement(2, "path", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Back to Candidates ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 5)(5, "div", 6);
    i0.ɵɵelement(6, "app-avatar", 7);
    i0.ɵɵelementStart(7, "div", 8)(8, "div", 9)(9, "h1", 10);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "app-stage-badge", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 12);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 13)(15, "span", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(16, "svg", 15);
    i0.ɵɵelement(17, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(19, "span", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(20, "svg", 15);
    i0.ɵɵelement(21, "path", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 18);
    i0.ɵɵrepeaterCreate(28, CandidateDetailComponent_Conditional_1_For_29_Template, 1, 1, "app-tag-chip", 19, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 20);
    i0.ɵɵconditionalCreate(31, CandidateDetailComponent_Conditional_1_Conditional_31_Template, 4, 2, "div", 21);
    i0.ɵɵelementStart(32, "div", 22);
    i0.ɵɵconditionalCreate(33, CandidateDetailComponent_Conditional_1_Conditional_33_Template, 2, 1, "button", 23);
    i0.ɵɵelementStart(34, "a", 24);
    i0.ɵɵtext(35, " Schedule Interview ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "a", 25);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(37, "svg", 26);
    i0.ɵɵelement(38, "path", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(39, " Start HireMeet ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(40, CandidateDetailComponent_Conditional_1_Conditional_40_Template, 2, 0, "button", 28);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(41, "div", 29)(42, "h2", 30);
    i0.ɵɵtext(43, "Pipeline Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 31);
    i0.ɵɵrepeaterCreate(45, CandidateDetailComponent_Conditional_1_For_46_Template, 8, 14, null, null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 32)(48, "div", 33)(49, "div", 34)(50, "h2", 35);
    i0.ɵɵtext(51, "Skills");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 36);
    i0.ɵɵrepeaterCreate(53, CandidateDetailComponent_Conditional_1_For_54_Template, 2, 1, "span", 37, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(55, "app-plagiarism-check", 38);
    i0.ɵɵconditionalCreate(56, CandidateDetailComponent_Conditional_1_Conditional_56_Template, 15, 4, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div", 39)(58, "div", 34)(59, "h2", 35);
    i0.ɵɵtext(60, "Application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "dl", 40)(62, "div")(63, "dt", 41);
    i0.ɵɵtext(64, "Applied For");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "dd", 42);
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div")(68, "dt", 41);
    i0.ɵɵtext(69, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "dd", 43);
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "div")(73, "dt", 41);
    i0.ɵɵtext(74, "Applied On");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "dd", 43);
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "div")(78, "dt", 41);
    i0.ɵɵtext(79, "Assigned To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "dd", 43);
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(82, CandidateDetailComponent_Conditional_1_Conditional_82_Template, 7, 1, "div", 44);
    i0.ɵɵconditionalCreate(83, CandidateDetailComponent_Conditional_1_Conditional_83_Template, 5, 1, "div", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_27_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", ctx_r1.candidate().name)("color", ctx_r1.candidate().avatarColor);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stage", ctx_r1.candidate().stage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().currentRole);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.candidate().email, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.candidate().phone, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.candidate().experience, " years exp.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().location);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.candidate().tags);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.candidate().score > 0 ? 31 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.canAdvance() ? 33 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.candidate().stage !== "rejected" && ctx_r1.candidate().stage !== "selected" ? 40 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.pipelineSteps);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.candidate().skills);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("applicationId", ctx_r1.candidate().id)("candidateName", ctx_r1.candidate().name)("candidateEmail", ctx_r1.candidate().email)("coverLetter", ctx_r1.candidate().coverLetter ?? "")("autoRun", false);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.score() ? 56 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().jobTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().department);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(ctx_r1.candidate().appliedDate));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.candidate().assignedTo);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.candidate().notes ? 82 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(((tmp_27_0 = ctx_r1.score()) == null ? null : tmp_27_0.notes) ? 83 : -1);
} }
function CandidateDetailComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 72);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 73);
    i0.ɵɵelement(3, "path", 74);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h3", 75);
    i0.ɵɵtext(5, "Candidate not found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 76);
    i0.ɵɵtext(7, " \u2190 Back to candidates ");
    i0.ɵɵelementEnd()();
} }
export class CandidateDetailComponent {
    constructor() {
        this.id = input('', ...(ngDevMode ? [{ debugName: "id" }] : []));
        this.candidatesApi = inject(CandidatesApiService);
        this.candidate = signal(undefined, ...(ngDevMode ? [{ debugName: "candidate" }] : []));
        this.score = signal(undefined, ...(ngDevMode ? [{ debugName: "score" }] : []));
        this.pipelineSteps = [
            { stage: 'applied', label: 'Applied' },
            { stage: 'shortlisted', label: 'Shortlisted' },
            { stage: 'assessment', label: 'Assessment' },
            { stage: 'interview', label: 'Interview' },
            { stage: 'hr_round', label: 'HR Round' },
            { stage: 'selected', label: 'Selected' },
        ];
        this.stageOrder = [
            'applied', 'shortlisted', 'assessment', 'interview', 'hr_round', 'selected'
        ];
        this.scoreDimensions = [
            { key: 'technical', label: 'Technical Skills' },
            { key: 'communication', label: 'Communication' },
            { key: 'problemSolving', label: 'Problem Solving' },
            { key: 'cultureFit', label: 'Culture Fit' },
        ];
    }
    async ngOnInit() {
        this.candidate.set((await this.candidatesApi.getById(this.id())) ?? undefined);
        this.score.set((await this.candidatesApi.getScore(this.id())) ?? undefined);
    }
    getStepState(step) {
        const current = this.candidate()?.stage;
        if (!current || current === 'rejected')
            return 'upcoming';
        const ci = this.stageOrder.indexOf(current);
        const si = this.stageOrder.indexOf(step);
        if (si < ci)
            return 'done';
        if (si === ci)
            return 'current';
        return 'upcoming';
    }
    isStageComplete(step) { return this.getStepState(step) === 'done'; }
    canAdvance() { const s = this.candidate()?.stage; return !!s && s !== 'selected' && s !== 'rejected'; }
    nextStageLabel() {
        const current = this.candidate()?.stage;
        if (!current)
            return '';
        const idx = this.stageOrder.indexOf(current);
        return idx < this.stageOrder.length - 1 ? this.pipelineSteps[idx + 1]?.label ?? '' : '';
    }
    async advanceStage() {
        const candidate = this.candidate();
        if (!candidate)
            return;
        const index = this.stageOrder.indexOf(candidate.stage);
        const nextStage = this.stageOrder[index + 1];
        if (!nextStage)
            return;
        await this.candidatesApi.updateStage(candidate.id, nextStage);
        this.candidate.set({ ...candidate, stage: nextStage });
    }
    getScore(key) { return this.score()?.[key] ?? 0; }
    getRecommendationLabel(rec) {
        return ({ strong_hire: '⭐ Strong Hire', hire: '✓ Hire', maybe: '~ Maybe', no_hire: '✗ No Hire' })[rec] ?? rec;
    }
    getRecommendationStyle(rec) {
        return ({ strong_hire: 'bg-emerald-100 text-emerald-700', hire: 'bg-blue-100 text-blue-700',
            maybe: 'bg-amber-100 text-amber-700', no_hire: 'bg-rose-100 text-rose-700' })[rec] ?? 'bg-slate-100 text-slate-600';
    }
    formatDate(iso) {
        return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    static { this.ɵfac = function CandidateDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CandidateDetailComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CandidateDetailComponent, selectors: [["app-candidate-detail"]], inputs: { id: [1, "id"] }, decls: 3, vars: 1, consts: [[1, "p-6", "max-w-5xl", "mx-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], ["routerLink", "/recruiter/candidates", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "text-slate-500", "hover:text-slate-700", "mb-5", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5L8.25 12l7.5-7.5"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6", "mb-4"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "gap-5"], ["size", "lg", 3, "name", "color"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-3", "mb-2"], [1, "text-xl", "font-bold", "text-slate-900", "leading-tight"], [3, "stage"], [1, "text-sm", "text-slate-600", "mb-1"], [1, "flex", "flex-wrap", "gap-4", "text-xs", "text-slate-500", "mb-3"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"], [1, "flex", "flex-wrap", "gap-1.5"], [3, "label"], [1, "flex", "flex-col", "items-center", "gap-4", "flex-shrink-0"], [1, "text-center"], [1, "flex", "flex-col", "gap-2", "w-full", "min-w-36"], [1, "w-full", "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-indigo-600", "rounded-lg", "hover:bg-indigo-700", "transition-colors", "text-center"], ["routerLink", "/recruiter/interviews", 1, "w-full", "px-4", "py-2", "text-xs", "font-semibold", "text-indigo-600", "bg-indigo-50", "rounded-lg", "hover:bg-indigo-100", "transition-colors", "text-center"], ["routerLink", "/recruiter/hiremeet", 1, "w-full", "px-4", "py-2", "text-xs", "font-semibold", "text-violet-600", "bg-violet-50", "rounded-lg", "hover:bg-violet-100", "transition-colors", "text-center", "flex", "items-center", "justify-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"], [1, "w-full", "px-4", "py-2", "text-xs", "font-semibold", "text-rose-600", "bg-rose-50", "rounded-lg", "hover:bg-rose-100", "transition-colors", "text-center"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5", "mb-4"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider", "mb-4"], [1, "flex", "items-center"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4", "mb-4"], [1, "lg:col-span-2", "space-y-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5"], [1, "text-sm", "font-semibold", "text-slate-900", "mb-3"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1", "bg-indigo-50", "text-indigo-700", "text-sm", "font-medium", "rounded-full"], [3, "applicationId", "candidateName", "candidateEmail", "coverLetter", "autoRun"], [1, "space-y-4"], [1, "space-y-2.5"], [1, "text-xs", "text-slate-400"], [1, "text-sm", "font-medium", "text-slate-800"], [1, "text-sm", "text-slate-700"], [1, "bg-amber-50", "rounded-xl", "border", "border-amber-200", "p-5"], [3, "score", "size"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "w-full", "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-indigo-600", "rounded-lg", "hover:bg-indigo-700", "transition-colors", "text-center", 3, "click"], [1, "flex", "flex-col", "items-center", "flex-shrink-0", 3, "ngClass"], [1, "w-8", "h-8", "rounded-full", "border-2", "flex", "items-center", "justify-center", "mb-1.5", "transition-all", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 1, "w-4", "h-4", "text-white"], [1, "w-2.5", "h-2.5", "bg-white", "rounded-full"], [1, "w-2", "h-2", "bg-slate-300", "rounded-full"], [1, "text-xs", "font-medium", "text-center", "leading-tight", 3, "ngClass"], [1, "flex-1", "h-0.5", "mb-5", "mx-1", "transition-colors", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.5 12.75l6 6 9-13.5"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-2.5", "py-0.5", "rounded-full", 3, "ngClass"], [1, "space-y-3"], [1, "flex", "items-center", "gap-3"], [1, "mt-4", "pt-3", "border-t", "border-slate-100", "flex", "items-center", "justify-between"], [1, "text-slate-600"], [1, "text-xs", "text-slate-500", "w-32", "flex-shrink-0"], [1, "flex-1", "h-2", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-indigo-500", "rounded-full", "transition-all", "duration-500"], [1, "text-xs", "font-semibold", "text-slate-700", "w-8", "text-right"], [1, "text-sm", "font-semibold", "text-amber-900", "mb-2", "flex", "items-center", "gap-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"], [1, "text-xs", "text-amber-800", "leading-relaxed"], [1, "text-sm", "font-semibold", "text-slate-900", "mb-2"], [1, "text-xs", "text-slate-600", "leading-relaxed"], [1, "w-14", "h-14", "rounded-2xl", "bg-slate-100", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-semibold", "text-slate-800", "mb-1"], ["routerLink", "/recruiter/candidates", 1, "text-sm", "text-indigo-600", "hover:text-indigo-700", "font-medium"]], template: function CandidateDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, CandidateDetailComponent_Conditional_1_Template, 84, 24)(2, CandidateDetailComponent_Conditional_2_Template, 8, 0, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.candidate() ? 1 : 2);
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink, AvatarComponent, StageBadgeComponent,
            TagChipComponent, ScoreRingComponent, PlagiarismCheckComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CandidateDetailComponent, [{
        type: Component,
        args: [{
                selector: 'app-candidate-detail',
                standalone: true,
                imports: [CommonModule, RouterLink, AvatarComponent, StageBadgeComponent,
                    TagChipComponent, ScoreRingComponent, PlagiarismCheckComponent],
                template: `
    <div class="p-6 max-w-5xl mx-auto">
      @if (candidate()) {

        <a routerLink="/recruiter/candidates"
           class="inline-flex items-center gap-1.5 text-sm text-slate-500
                  hover:text-slate-700 mb-5 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          Back to Candidates
        </a>

        <!-- Profile header -->
        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <div class="flex flex-col sm:flex-row sm:items-start gap-5">
            <app-avatar [name]="candidate()!.name" [color]="candidate()!.avatarColor" size="lg"/>
            <div class="flex-1 min-w-0">
              <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 class="text-xl font-bold text-slate-900 leading-tight">{{ candidate()!.name }}</h1>
                <app-stage-badge [stage]="candidate()!.stage"/>
              </div>
              <p class="text-sm text-slate-600 mb-1">{{ candidate()!.currentRole }}</p>
              <div class="flex flex-wrap gap-4 text-xs text-slate-500 mb-3">
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                  {{ candidate()!.email }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  {{ candidate()!.phone }}
                </span>
                <span>{{ candidate()!.experience }} years exp.</span>
                <span>{{ candidate()!.location }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                @for (tag of candidate()!.tags; track tag) {
                  <app-tag-chip [label]="tag"/>
                }
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 flex-shrink-0">
              @if (candidate()!.score > 0) {
                <div class="text-center">
                  <app-score-ring [score]="candidate()!.score" [size]="80"/>
                  <p class="text-xs text-slate-400 mt-1">Composite Score</p>
                </div>
              }
              <div class="flex flex-col gap-2 w-full min-w-36">
                @if (canAdvance()) {
                  <button (click)="advanceStage()"
                    class="w-full px-4 py-2 text-xs font-semibold text-white bg-indigo-600
                           rounded-lg hover:bg-indigo-700 transition-colors text-center">
                    Move to {{ nextStageLabel() }} →
                  </button>
                }
                <a routerLink="/recruiter/interviews"
                   class="w-full px-4 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50
                          rounded-lg hover:bg-indigo-100 transition-colors text-center">
                  Schedule Interview
                </a>
                <a routerLink="/recruiter/hiremeet"
                   class="w-full px-4 py-2 text-xs font-semibold text-violet-600 bg-violet-50
                          rounded-lg hover:bg-violet-100 transition-colors text-center flex items-center justify-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                  </svg>
                  Start HireMeet
                </a>
                @if (candidate()!.stage !== 'rejected' && candidate()!.stage !== 'selected') {
                  <button class="w-full px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50
                                 rounded-lg hover:bg-rose-100 transition-colors text-center">
                    Reject Candidate
                  </button>
                }
              </div>
            </div>
          </div>
        </div>

        <!-- Pipeline progress -->
        <div class="bg-white rounded-xl border border-slate-200 p-5 mb-4">
          <h2 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Pipeline Progress</h2>
          <div class="flex items-center">
            @for (step of pipelineSteps; track step.stage; let last = $last) {
              <div class="flex flex-col items-center flex-shrink-0"
                   [ngClass]="getStepState(step.stage) === 'current' ? 'w-32' : 'w-24'">
                <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-1.5 transition-all"
                     [ngClass]="{
                       'border-indigo-600 bg-indigo-600': getStepState(step.stage) === 'current',
                       'border-emerald-500 bg-emerald-500': getStepState(step.stage) === 'done',
                       'border-slate-200 bg-white': getStepState(step.stage) === 'upcoming'
                     }">
                  @if (getStepState(step.stage) === 'done') {
                    <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  } @else if (getStepState(step.stage) === 'current') {
                    <span class="w-2.5 h-2.5 bg-white rounded-full"></span>
                  } @else {
                    <span class="w-2 h-2 bg-slate-300 rounded-full"></span>
                  }
                </div>
                <span class="text-xs font-medium text-center leading-tight"
                      [ngClass]="{
                        'text-indigo-600': getStepState(step.stage) === 'current',
                        'text-emerald-600': getStepState(step.stage) === 'done',
                        'text-slate-400': getStepState(step.stage) === 'upcoming'
                      }">{{ step.label }}</span>
              </div>
              @if (!last) {
                <div class="flex-1 h-0.5 mb-5 mx-1 transition-colors"
                     [ngClass]="isStageComplete(step.stage) ? 'bg-emerald-400' : 'bg-slate-200'">
                </div>
              }
            }
          </div>
        </div>

        <!-- Main content grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

          <div class="lg:col-span-2 space-y-4">

            <!-- Skills -->
            <div class="bg-white rounded-xl border border-slate-200 p-5">
              <h2 class="text-sm font-semibold text-slate-900 mb-3">Skills</h2>
              <div class="flex flex-wrap gap-2">
                @for (skill of candidate()!.skills; track skill) {
                  <span class="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>

            <!-- ✅ PLAGIARISM CHECK WIDGET -->
            <app-plagiarism-check
              [applicationId]="candidate()!.id"
              [candidateName]="candidate()!.name"
              [candidateEmail]="candidate()!.email"
                [coverLetter]="candidate()!.coverLetter ?? ''"
              [autoRun]="false"
            />

            <!-- Evaluation scores -->
            @if (score()) {
              <div class="bg-white rounded-xl border border-slate-200 p-5">
                <div class="flex items-center justify-between mb-4">
                  <h2 class="text-sm font-semibold text-slate-900">Evaluation</h2>
                  <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        [ngClass]="getRecommendationStyle(score()!.recommendation)">
                    {{ getRecommendationLabel(score()!.recommendation) }}
                  </span>
                </div>
                <div class="space-y-3">
                  @for (dim of scoreDimensions; track dim.key) {
                    <div class="flex items-center gap-3">
                      <span class="text-xs text-slate-500 w-32 flex-shrink-0">{{ dim.label }}</span>
                      <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full bg-indigo-500 rounded-full transition-all duration-500"
                             [style.width.%]="(getScore(dim.key) / 10) * 100"></div>
                      </div>
                      <span class="text-xs font-semibold text-slate-700 w-8 text-right">
                        {{ getScore(dim.key) }}/10
                      </span>
                    </div>
                  }
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-xs text-slate-400">
                    Evaluated by <strong class="text-slate-600">{{ score()!.evaluatedBy }}</strong>
                    on {{ formatDate(score()!.evaluatedAt) }}
                  </span>
                </div>
              </div>
            }
          </div>

          <!-- Right column -->
          <div class="space-y-4">
            <div class="bg-white rounded-xl border border-slate-200 p-5">
              <h2 class="text-sm font-semibold text-slate-900 mb-3">Application</h2>
              <dl class="space-y-2.5">
                <div>
                  <dt class="text-xs text-slate-400">Applied For</dt>
                  <dd class="text-sm font-medium text-slate-800">{{ candidate()!.jobTitle }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-slate-400">Department</dt>
                  <dd class="text-sm text-slate-700">{{ candidate()!.department }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-slate-400">Applied On</dt>
                  <dd class="text-sm text-slate-700">{{ formatDate(candidate()!.appliedDate) }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-slate-400">Assigned To</dt>
                  <dd class="text-sm text-slate-700">{{ candidate()!.assignedTo }}</dd>
                </div>
              </dl>
            </div>

            @if (candidate()!.notes) {
              <div class="bg-amber-50 rounded-xl border border-amber-200 p-5">
                <h2 class="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/>
                  </svg>
                  Recruiter Notes
                </h2>
                <p class="text-xs text-amber-800 leading-relaxed">{{ candidate()!.notes }}</p>
              </div>
            }

            @if (score()?.notes) {
              <div class="bg-white rounded-xl border border-slate-200 p-5">
                <h2 class="text-sm font-semibold text-slate-900 mb-2">Interview Notes</h2>
                <p class="text-xs text-slate-600 leading-relaxed">{{ score()!.notes }}</p>
              </div>
            }
          </div>
        </div>

      } @else {
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-slate-800 mb-1">Candidate not found</h3>
          <a routerLink="/recruiter/candidates" class="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back to candidates
          </a>
        </div>
      }
    </div>
  `
            }]
    }], null, { id: [{ type: i0.Input, args: [{ isSignal: true, alias: "id", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CandidateDetailComponent, { className: "CandidateDetailComponent", filePath: "src/app/features/recruiter/candidates/candidate-detail.component.ts", lineNumber: 265 }); })();
