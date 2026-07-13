import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { LayoutService } from '../../../core/services/layout.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-recruiter-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent, BottomNavComponent],
  template: `
    <div class="flex h-screen min-h-[100dvh] overflow-hidden bg-slate-50">

      <app-sidebar />

      <div class="flex-1 flex flex-col overflow-hidden min-w-0">

        <app-topbar [pageTitle]="pageTitle()" />

        <main class="flex-1 min-w-0 overflow-y-auto overflow-x-hidden scrollbar-thin pb-16 lg:pb-0">
          <router-outlet />
        </main>

        <app-bottom-nav />
      </div>
    </div>
  `
})
export class RecruiterLayoutComponent {

  private router = inject(Router);
  private layout = inject(LayoutService);

  readonly pageTitle = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) route = route.firstChild;
        const title = route.snapshot.title ?? 'HireFlow';
        return title.replace(' — HireFlow', '');
      })
    ),
    { initialValue: 'Dashboard' }
  );
}
