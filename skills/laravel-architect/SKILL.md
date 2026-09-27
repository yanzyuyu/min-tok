---
name: laravel-architect
description: >-
  Enterprise Laravel & PHP Modern Architecture (Laravel 11/12+).
  Enforces the modern streamlined application structure (bootstrap/app.php, zero legacy kernels),
  strict Eloquent ORM patterns, Form Requests, Pest/PHPUnit testing, and zero-trust backend security.
---

# Modern Laravel Architecture (Laravel 11/12+ Standards)

This skill guides the agent to design and build Laravel applications conforming strictly to modern upstream standards, eliminating obsolete legacy directory conventions (Laravel 8-10 patterns).

---

## 1. Streamlined Application Structure (Modern Laravel Standards)

### A. The Banned Legacy Patterns:
- ❌ **DO NOT CREATE `app/Http/Kernel.php`:** HTTP Middleware is NO LONGER registered in `Kernel.php`.
- ❌ **DO NOT CREATE `app/Console/Kernel.php`:** Console commands and schedules are NO LONGER registered in a console kernel.
- ❌ **DO NOT CREATE bloated config files by default:** Laravel 11+ ships with a lean `/config` folder. Everything cascades from `.env`.

### B. The Modern Standard (`bootstrap/app.php`):
Routing, middleware, exceptions, and schedules are configured centrally in `bootstrap/app.php`:
```php
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            // Custom web middleware
        ]);
        $middleware->api(prepend: [
            // Custom API middleware
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Custom API exception rendering
    })->create();
```

---

## 2. Eloquent ORM & Database Discipline

1. **Strict Models in Development:**
   Always enable strict model evaluation in `AppServiceProvider::boot()`:
   ```php
   public function boot(): void
   {
       Model::shouldBeStrict(! $this->app->isProduction());
   }
   ```
2. **Anti-N+1 Query Prevention:**
   Always use eager loading (`with(['relation'])`) when retrieving lists of models.
3. **Mass Assignment Protection:**
   Use `$fillable` with explicit whitelisted attributes. Never pass `$request->all()` into model creation.
4. **Soft Deletes by Default:**
   All core business entities must utilize the `SoftDeletes` trait and `deleted_at` timestamp.
5. **Robust Migrations:**
   Every migration must define both `up()` and `down()` methods, with proper foreign key cascade rules and database indexes.

---

## 3. Controllers & Request Validation

1. **Skinny Controllers, Zero Business Bloat:**
   Controllers must only handle HTTP coordination: receive validated request, invoke service/action, return response/resource.
2. **Mandatory Form Requests:**
   Never validate inline using `$request->validate([...])` inside controller methods. Always generate dedicated Form Request classes:
   ```php
   public function store(StoreOrderRequest $request): JsonResponse
   {
       $validated = $request->validated();
       $order = $this->orderService->create($request->user(), $validated);
       return response()->json(new OrderResource($order), 201);
   }
   ```
3. **API Resource Transformers:**
   Never return raw Eloquent models directly to API clients. Always transform responses using `JsonResource` to prevent leaking internal database schemas or sensitive columns.

---

## 4. Modern Testing & Verification (Pest / PHPUnit)

- Write declarative tests covering authentication, authorization gates (Policies), and validation boundaries.
- Ensure all tests run cleanly via `php artisan test` before declaring completion.
