# Secorto Constitution

Version: 1.0
Status: Active

## Mission

Secorto exists to extract proven multilingual content patterns
from real-world applications into reusable, documented and
testable building blocks.

## Vision

Enable developers to build multilingual content systems
with confidence.

Confidence means:

- Explicit content relationships.
- Predictable behavior.
- Early validation.
- Reusable abstractions.
- Clear documentation.

## Core Principles

### Domain First

The domain drives design.

Frameworks, tooling and implementation details are secondary.

### Explicit Over Implicit

Important relationships should be represented explicitly.

Hidden conventions should be avoided whenever possible.

### Build-Time Validation

Problems should be detected as early as possible.

Content inconsistencies should be identified before deployment.

### Framework-Agnostic Core

Business rules belong in core packages.

Framework-specific concerns belong in adapters.

### Documentation as Product

Documentation is a first-class artifact.

Architecture, decisions and intent are part of the deliverable.

### Quality by Design

Quality is part of the design process.

Validation, testing and documentation are not optional activities.

### Real-World Validation

Abstractions should originate from proven experience.

Concepts extracted from production systems are preferred over
purely theoretical designs.

## Governance

The project follows the following decision hierarchy:

1. Constitution
2. ADRs
3. Architecture Documents
4. Implementation

Lower levels must not contradict higher levels.

## Documentation Model

### Constitution

Defines mission, vision and principles.

### ADRs

Capture important decisions made over time.

ADRs are chronological records.

### Architecture Documents

Describe the current system.

Architecture documents are thematic references.

### Guides

Explain usage and operational workflows.

## Non Goals

Secorto is not intended to:

- Replace Astro.
- Replace content management systems.
- Become a generic translation framework.
- Become a website builder.
- Become a monolithic platform.

## Success Criteria

The project is successful when:

- Knowledge extracted from real-world systems becomes reusable.
- New multilingual sites can be created without copying code.
- Documentation explains both intent and behavior.
- Validation catches problems before deployment.
- secorto_web can consume the extracted libraries.

## Amendments

Changes to this Constitution should be rare.

Constitutional changes require an ADR documenting the reason
for the modification.

## Related Documents

- [ADR Process](docs/adr/README.md)
