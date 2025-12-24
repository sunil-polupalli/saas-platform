# API Documentation

## Authentication
* **POST /api/auth/register-tenant**: Register a new tenant organization.
* **POST /api/auth/login**: Login for users and admins.
* **GET /api/auth/me**: Get current user profile (Protected).
* **POST /api/auth/logout**: Logout user.

## Tenant Management
* **GET /api/tenants**: List all tenants (Super Admin only).
* **GET /api/tenants/:tenantId**: Get specific tenant details.
* **PUT /api/tenants/:tenantId**: Update tenant details.

## User Management
* **GET /api/tenants/:tenantId/users**: List users for a tenant.
* **POST /api/tenants/:tenantId/users**: Add a new user to a tenant.
* **PUT /api/users/:userId**: Update user details.
* **DELETE /api/users/:userId**: Delete a user.

## Project Management
* **GET /api/projects**: List all projects for the current tenant.
* **POST /api/projects**: Create a new project.
* **GET /api/projects/:projectId**: Get project details.
* **PUT /api/projects/:projectId**: Update a project.
* **DELETE /api/projects/:projectId**: Delete a project.

## Task Management
* **GET /api/projects/:projectId/tasks**: List tasks for a project.
* **POST /api/projects/:projectId/tasks**: Create a new task.
* **PUT /api/tasks/:taskId**: Update task details.
* **PATCH /api/tasks/:taskId/status**: Update task status.