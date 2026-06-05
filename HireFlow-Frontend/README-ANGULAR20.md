# HireFlow Frontend — Angular 20 Fixed Build

This folder has been converted into a complete Angular 20 workspace.

## Requirements

- Node.js 22.12+ or 20.19+
- npm 10+
- HireFlow backend running at `https://localhost:7001`

## Install

```bash
npm ci
```

## Run development server

```bash
npm start
```

Open:

```text
http://localhost:4200
```

The development server uses `proxy.conf.json` so frontend requests to `/api/...` are forwarded to:

```text
https://localhost:7001
```

## Production build

```bash
npm run build:prod
```

The compiled output is generated in:

```text
dist/hireflow-frontend
```

## Demo login

If the backend is not running, the app falls back to demo login users:

```text
recruiter@hireflow.com / demo1234
candidate@hireflow.com / demo1234
```

## Main fixes applied

- Added missing Angular workspace files: `package.json`, `angular.json`, `tsconfig`, `tsconfig.app.json`.
- Locked Angular packages to `20.3.24`.
- Added Tailwind CSS and daisyUI configuration.
- Added `proxy.conf.json` for backend API forwarding.
- Fixed async login handling.
- Fixed invalid duplicate labels in bottom navigation.
- Fixed broken sidebar object syntax.
- Fixed incorrect environment import path in plagiarism checker.
- Added missing standalone `ClickOutsideDirective`.
- Removed remote Google Font CSS import so production builds do not fail offline.
- Added favicon and `.gitignore`.

## Verification completed

Commands successfully verified from a clean copy:

```bash
npm ci
npm run build:prod
```

Development server also started successfully and returned HTTP 200 at `/`:

```bash
npm start
curl http://localhost:4200/
```
