# System Architecture

## Overview
Client (React) <-> API Gateway (Nginx/Express) <-> Backend (Node) <-> Database (Postgres)

## Database Schema
- **Tenants:** (id, name, subdomain, plan)
- **Users:** (id, email, password, role, tenant_id)
- **Projects:** (id, name, status, tenant_id)
- **Tasks:** (id, title, status, project_id, tenant_id)

## Data Flow
1. User logs in with `subdomain`.
2. Backend verifies Tenant exists.
3. JWT is issued containing `{ userId, tenantId, role }`.
4. Subsequent requests send JWT.
5. Middleware extracts `tenantId`.
6. Database queries filter `WHERE tenant_id = req.user.tenantId`.