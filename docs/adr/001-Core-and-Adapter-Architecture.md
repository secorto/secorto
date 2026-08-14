---
id: ADR-001
title: Adopt Core and Adapter Architecture
status: accepted

date: 2026-08-14
last_updated: null

authors:
  - Sergio Carlos Orozco Torres

categories:
  - Architecture

supersedes: []
superseded_by: null

related:
  - constitution.md

tags:
  - architecture
  - modularity
  - adapters
  - domain-driven-design
  - framework-agnostic
---

## Context

Secorto aims to extract reusable multilingual content patterns
from real-world systems and make them available as documented,
testable building blocks.

A central challenge is preventing domain concepts from becoming
coupled to a specific framework, runtime, or delivery mechanism.

As the project evolves, multiple implementations may exist for
content validation, content discovery, content loading, site
generation, and framework integration.

Without clear architectural boundaries, framework concerns can
leak into domain logic, reducing portability, testability,
maintainability, and long-term reuse.

This would conflict with the constitutional principles of:

- Domain First
- Framework-Agnostic Core
- Explicit Over Implicit
- Quality by Design

## Objective

Establish a stable architectural model that separates domain
rules from implementation concerns.

The architecture should allow domain concepts to evolve
independently from frameworks while enabling multiple
integrations to coexist without duplicating business logic.

## Decision

Secorto shall adopt a Core and Adapter Architecture.

The Core represents the domain.

The Core contains:

- Domain concepts
- Business rules
- Validation rules
- Content relationships
- Contracts and interfaces
- Reusable abstractions

The Core must not depend on:

- Frameworks
- Rendering engines
- Build systems
- Infrastructure concerns
- External delivery mechanisms

Adapters are responsible for integrating the Core with
specific technologies.

Adapters may include:

- Framework integrations
- Content source integrations
- Build-time tooling
- Rendering systems
- Developer tooling

Adapters depend on the Core.

The Core must never depend on adapters.

Communication between the Core and adapters should occur
through explicit contracts defined by the Core.

## Implementation

The repository should be structured around architectural
responsibilities rather than implementation technologies.

Core packages should contain domain logic and reusable
multilingual abstractions.

Adapter packages should provide integrations with specific
frameworks, runtimes, or external systems.

Documentation should clearly identify whether a component
belongs to the Core or to an Adapter.

Future architecture documents should describe:

- Core responsibilities
- Adapter responsibilities
- Dependency boundaries
- Integration patterns

Detailed implementation guidance belongs in:

```text
docs/architecture/
```

## Consequences

### Positive

- Domain logic remains independent from frameworks.
- Business rules become easier to test.
- Framework migrations become less expensive.
- Multiple adapters can reuse the same domain model.
- Responsibilities become easier to understand.
- Documentation gains clearer architectural boundaries.
- Validation logic can be reused across implementations.

### Trade-offs

- Additional architectural structure is required.
- More interfaces and contracts must be maintained.
- Initial implementation may require more planning.
- Some features may require translating concepts across
  architectural boundaries.

### Rejected Alternatives

#### Framework-Centric Architecture

Place domain logic directly inside framework-specific
implementations.

Rejected because it tightly couples business rules to a single
technology and limits future reuse.

#### Shared Utility Library Approach

Use a collection of utilities without clearly separating
domain responsibilities from implementation concerns.

Rejected because utilities alone do not establish architectural
boundaries or ownership of responsibilities.

#### Monolithic Architecture

Maintain all responsibilities inside a single package.

Rejected because it reduces modularity and makes long-term
evolution more difficult as the project grows.

## References

- Constitution
- Framework-Agnostic Core Principle
- Domain First Principle
- Documentation as Product Principle
