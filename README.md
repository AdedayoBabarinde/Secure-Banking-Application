# SecureBank — Digital Banking Portal

A full-stack digital banking application built with **Spring Boot 3** (backend), **Angular 18** (frontend), and **MySQL** (database). Supports account management, deposits, withdrawals, fund transfers, OTP-based authentication, and transaction analytics.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Local Deployment — Option A: Native (Recommended for Development)](#option-a-native-recommended-for-development)
  - [Step 1 — Set Up MySQL Database](#step-1--set-up-mysql-database)
  - [Step 2 — Configure the Backend](#step-2--configure-the-backend)
  - [Step 3 — Run the Backend](#step-3--run-the-backend)
  - [Step 4 — Configure the Frontend](#step-4--configure-the-frontend)
  - [Step 5 — Run the Frontend](#step-5--run-the-frontend)
- [Local Deployment — Option B: Docker (Manual)](#option-b-docker-manual)
- [Testing the Application](#testing-the-application)
  - [User Registration and Login](#1-user-registration-and-login)
  - [Account PIN Setup](#2-account-pin-setup)
  - [Transactions](#3-transactions)
  - [Password Reset via OTP](#4-password-reset-via-otp)
  - [Dashboard and Analytics](#5-dashboard-and-analytics)
- [API Reference](#api-reference)
- [Environment Variables Reference](#environment-variables-reference)
- [Common Issues and Fixes](#common-issues-and-fixes)

---

## Architecture Overview

```
┌─────────────────────┐        HTTP :4200        ┌─────────────────────┐
│   Angular 18 SPA    │ ──────────────────────── │   Browser / User    │
│   (ng serve / Nginx)│                          └─────────────────────┘
└────────┬────────────┘
         │ HTTP :8081 (/api/*)
         ▼
┌─────────────────────┐        JDBC :3306        ┌─────────────────────┐
│  Spring Boot 3 API  │ ──────────────────────── │    MySQL 8.0+       │
│  (Port 8081)        │                          │  (DB: bankingapp)   │
└─────────────────────┘                          └─────────────────────┘
```

**Local development URLs:**
| Service  | URL                          |
|----------|------------------------------|
| Frontend | http://localhost:4200        |
| Backend  | http://localhost:8081        |
| Swagger  | http://localhost:8081/swagger-ui/index.html |
| Database | localhost:3306               |

---

## Prerequisites

Ensure the following tools are installed before proceeding:

| Tool | Version | Check Command |
|------|---------|---------------|
| Java JDK | 17 or 21 | `java -version` |
| Apache Maven | 3.8+ | `mvn -version` |
| Node.js | 18.x | `node -v` |
| npm | 9.x+ | `npm -v` |
| Angular CLI | 18.x | `ng version` |
| MySQL Server | 8.0+ | `mysql --version` |
| Git | Any | `git --version` |
| Docker (optional) | 24.x+ | `docker --version` |

**Install Angular CLI globally if not already installed:**
```bash
npm install -g @angular/cli@18
```

---

## Project Structure

```
securebank/
├── App/
│   ├── backend/          # Spring Boot REST API (Java 17, Maven)
│   │   ├── src/
│   │   ├── pom.xml
│   │   └── Dockerfile
│   └── frontend/         # Angular 18 SPA
│       ├── src/
│       ├── package.json
│       └── Dockerfile
├── infra/                # Terraform (Azure infrastructure)
├── argocd/               # GitOps manifests (ArgoCD)
├── k8s/                  # Kubernetes manifests
├── monitoring/           # Prometheus / Grafana alerting
└── .github/workflows/    # CI/CD pipelines
```



### Production Environment — Detailed Architecture

<img width="1422" height="1912" alt="Securebank" src="https://github.com/user-attachments/assets/40cc4032-a970-49ac-8496-a25e4fa3bb45" />






