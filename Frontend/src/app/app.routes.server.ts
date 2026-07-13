import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Public pages can be statically generated.
  { path: 'auth/login', renderMode: RenderMode.Prerender },
  { path: 'auth/signup', renderMode: RenderMode.Prerender },

  // Dashboard, protected, and dynamic meeting routes depend on browser state/JWT,
  // so keep them client-rendered while preserving Angular Server Routing setup.
  { path: '**', renderMode: RenderMode.Client }
];
