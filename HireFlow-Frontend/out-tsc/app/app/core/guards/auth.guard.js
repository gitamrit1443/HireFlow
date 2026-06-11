import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
/** Protect any route — redirect to login if not authenticated */
export const authGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.isLoggedIn())
        return true;
    return router.createUrlTree(['/auth/login']);
};
/** Recruiter-only routes — redirect to candidate dashboard if wrong role */
export const recruiterGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.isRecruiter())
        return true;
    return router.createUrlTree(['/candidate/dashboard']);
};
/** Candidate-only routes */
export const candidateGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.isCandidate())
        return true;
    return router.createUrlTree(['/recruiter/dashboard']);
};
/** Redirect already-logged-in users away from /auth/login */
export const guestGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (!auth.isLoggedIn())
        return true;
    const path = auth.isRecruiter() ? '/recruiter/dashboard' : '/candidate/dashboard';
    return router.createUrlTree([path]);
};
