---
id: ADR-XXX
title: Replace With Decision Title
status: proposed

date: YYYY-MM-DD
last_updated: null

authors:
  - Sergio Carlos Orozco Torres

categories:
  - Architecture

supersedes: []
superseded_by: null

related: []

tags: []
---

## Context

Describe the problem that motivated this decision.

Focus on the underlying architectural concern rather than
implementation-specific details.

Good:

- Multiple implementations exist for the same concept.
- Responsibilities are not clearly separated.
- Domain concepts are tightly coupled to framework code.

Avoid:

- Specific file names.
- Class names.
- Package internals.
- Temporary implementation details.

## Objective

Describe the desired outcome.

Focus on the problem being solved and the value expected from
the decision.

## Decision

Describe the decision itself.

This section should answer:

> What are we choosing?

The decision should remain understandable even if future
implementations change.

## Implementation

Describe how the decision is expected to be applied.

Implementation guidance may reference:

- Packages
- Documentation
- Repository structure
- Future work

Avoid overly detailed implementation descriptions that are
likely to change frequently.

More detailed implementation notes should live in:

```text
docs/architecture/
```

## Consequences

### Positive

Explain the expected benefits.

### Trade-offs

Explain accepted drawbacks, costs, risks or complexity.

### Rejected Alternatives

Describe alternatives that were considered and why they were
not selected.

## References

List related material.

Examples:

- Constitution
- Previous ADRs
- Architecture Documents
- RFCs
- External Resources
