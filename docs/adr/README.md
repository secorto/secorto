# Architecture Decision Records

This directory contains the Architecture Decision Records (ADRs) for the Secorto project.

ADRs document significant architectural and organizational decisions made during the evolution of the project.

Their primary purpose is to explain:

> Why was a decision made?

The implementation itself belongs in source code and architecture documentation.

---

## Relationship to Other Documentation

The repository contains different kinds of documentation.

### Constitution

The Constitution defines:

- Mission
- Vision
- Principles
- Governance

The Constitution answers:

> Why does the project exist?

### ADRs

ADRs record decisions over time.

ADRs answer:

> Why was this decision made?

### Architecture Documents

Architecture documents describe the current system.

Architecture documents answer:

> How does the system work?

### Guides

Guides explain how to use the project.

Guides answer:

> How do I accomplish a task?

---

## When to Create an ADR

Create an ADR when a decision:

- Introduces a new architectural pattern
- Changes project structure
- Defines package responsibilities
- Establishes governance rules
- Introduces testing strategies
- Affects long-term maintainability
- Has significant trade-offs

Do not create ADRs for:

- Bug fixes
- Refactoring details
- Temporary implementation choices
- Minor documentation changes

---

## ADR Lifecycle

ADRs follow a sequential numbering scheme.

Examples:

- ADR-001
- ADR-002
- ADR-003

Identifiers are never reused.

### Statuses

The following statuses are supported:

- proposed
- accepted
- deprecated
- superseded

---

## ADR Template

All ADRs must use the template defined in:

```text
docs/adr/TEMPLATE.md
```

---

## Modification Policy

ADRs are historical records.

Accepted ADRs should rarely change.

### Allowed Changes

- Additional clarification
- Better explanations
- Updated references
- Status transitions

### Changes Requiring Care

Changes that alter the meaning of a decision should:

- Update `last_updated`
- Explain why the document changed

### Editorial Updates

The following do not require updating `last_updated`:

- Typo fixes
- Formatting changes
- Markdown linting
- Link corrections
- Grammar improvements

`last_updated` tracks semantic changes, not editorial changes.

---

## Architectural Philosophy

Secorto follows a few important principles.

### Intent Before Implementation

Understand the problem domain before selecting technologies.

### Explicit Over Implicit

Relationships should be modeled explicitly.

### Documentation as Product

Documentation is considered a first-class artifact.

### Quality by Design

Validation, testing, and documentation are part of the design process.

---

## Decision Hierarchy

When conflicts arise, the following order applies:

1. Constitution
2. ADRs
3. Architecture Documents
4. Implementation

Code must not contradict architecture.

Architecture must not contradict ADRs.

ADRs must not contradict the Constitution.

---

## References

- [Constitution](../../constitution.md)
- [Template](./TEMPLATE.md)

