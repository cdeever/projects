---
title: "Deevnet"
weight: 10
---

# Deevnet

Deevnet is an infrastructure automation ecosystem focused on Infrastructure as Code (IaC) and Configuration as Code (CaC). The main goal is creating a fully rebuildable platform—all from code. Hosts are stateless: configuration lives in source control and is applied via automation, so any host can be wiped and reprovisioned, and failed hardware can be swapped without data migration.

The project includes:

- **Builder Node** — Portable bootstrap node with all artifacts and automation needed for air-gapped substrate provisioning
- **Image Factory** — Packer-based image builds for consistent, repeatable VM and container images
- **PXE Infrastructure** — Network-based system deployment for bare-metal provisioning
- **Ansible Playbooks** — Configuration management applying desired state from source control
- **Terraform Modules** — Tenant provisioning and infrastructure orchestration
- **Two Deployments** — Deevnet Mobile (portable lab) and Deevnet Home (permanent home infrastructure)

**Links:**
- [GitHub Organization](https://github.com/deevnet)
- [Documentation Site](https://deevnet.github.io/deevnet-docs/)
