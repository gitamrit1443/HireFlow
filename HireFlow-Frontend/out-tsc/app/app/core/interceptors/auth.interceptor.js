import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
export const authInterceptor = (req, next) => {
    const router = inject(Router);
    const token = localStorage.getItem('hireflow_token');
    const authReq = token
        ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
        : req;
    return next(authReq).pipe(catchError((err) => {
        if (err.status === 401) {
            localStorage.removeItem('hireflow_token');
            localStorage.removeItem('hireflow_user');
            router.navigate(['/auth/login']);
        }
        return throwError(() => err);
    }));
};
