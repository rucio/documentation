---
id: issue_management
title: Issue Management
---

This page describes how issues (bug reports and feature requests) are triaged,
tracked, deferred, and closed across the Rucio repositories. Its goal is to keep
the issue trackers an honest reflection of the work that is genuinely in the
development pipeline.

## Purpose

The number of open issues across the Rucio trackers has been growing in an
uncontrolled way. This is bad for two groups:

* **The development team**, because an ever-growing backlog makes it hard to
  focus on what should actually get done.
* **The users and community**, because a cluttered tracker gives no clear
  picture of what will actually be worked on.

This guideline defines a consistent process so that the state of the tracker
accurately reflects committed work.

## Core principle: the twelve-month delivery horizon

> The tracker is a working pipeline of achievable goals, not an open-ended
> backlog.

The key principle is that every tracked issue is opened with an intrinsic plan
to actually achieve and close it within **twelve months**.

This has two consequences:

1. It focuses the development team on achievable goals and gives external
   viewers of the tracker a clear understanding of what is "in the pipeline".
1. There is still value in keeping a record of feature wishes and low-priority
   bug fixes, but that value is lost if those items simply clutter the tracker
   with no indication of whether they will ever be considered. Such issues are
   therefore **closed and labelled `wishlist`** rather than left open. They can
   always be re-opened and re-added to the development pipeline later.

## Scope

This guideline applies to the core and secondary Rucio repositories, including
(non-exhaustively):

* `rucio/rucio`
* `rucio/webui`
* `rucio/documentation`
* `rucio/containers`
* `rucio/helm-charts`
* … and other repositories maintained by the project.

The [component leads](../component_leads.md) who maintain these repositories are
responsible for applying this guideline to the issues in their area.

## The rules

### Twelve-month delivery horizon

Every open issue in the tracker is expected to be addressed and closed within
**twelve months** of being opened. The tracker is intended as a working pipeline
of achievable goals, not an open-ended backlog.

### Maximum lifetime of open issues

Justified exceptions to the twelve-month rule may be granted on a case-by-case
basis. As a stricter upper bound, however, **no issue should remain open for
longer than twenty-four months.** Issues approaching this limit must be one of:

* resolved,
* closed and re-labelled (e.g. `wishlist`), or
* explicitly re-justified.

### Prompt triage

All reported bugs and feature requests are triaged as quickly as possible. An
issue is **closed** (with the reasoning communicated clearly to the reporter)
when:

* the reporter does not respond to follow-up questions, or
* a reported bug cannot be reproduced.

### Component reviews and triage decisions

The component leads conduct **regular reviews of issues by component**. These
reviews apply the policy strictly, but **every decision is communicated back to
the issue reporter with clear reasoning.** The following decision framework
applies:

| Situation | Decision | Action |
|-----------|----------|--------|
| No interest in pursuing the issue | **Close** | Close with explanation |
| Interest exists, but no capacity within the next 12 months | **Wishlist** | Add `wishlist` label and close |
| Interest exists, but work is deferred | **Defer** | Add `capacity-review-YY/QN` label (defer by 6, 12, or 18 months) and keep |
| Interest exists and capacity is available | **Keep** | Keep open and schedule the work |

### Reviewing wishlist items

Wishlist issues are **not forgotten** once they are closed. They are revisited
regularly as part of standing activities such as component issue reviews,
roadmap planning, and similar review cycles. Any wishlist item can be re-opened
and re-added to the pipeline when interest and capacity align.

### Communication

The state of the tracker must accurately reflect committed work. Every reporter
should receive a **clear, timely explanation** of what has been decided about
their issue and why.

## Labels

| Label | Meaning | Issue state |
|-------|---------|-------------|
| `wishlist` | Of potential value, but not planned for the next 12 months. Can be re-opened and re-added to the pipeline. | Closed |
| `capacity-review-YY/QN` | Interest exists but work is deferred; the issue will be re-evaluated for capacity in the given year/quarter (e.g. `capacity-review-26/Q4`). Used for deferrals of 6, 12, or 18 months. | Open |

## Roles and responsibilities

* **[Component leads](../component_leads.md)** own the application of this
  guideline within the repositories and components they maintain: running the
  reviews, applying the decision framework, and ensuring decisions are
  communicated back to reporters.
* **Reporters** are expected to respond to follow-up questions in a timely
  manner; non-responsive issues may be closed.

## Cadence

* **Triage** of new issues: as quickly as possible, ideally on arrival.
* **Component issue reviews**: held regularly by the relevant component
  lead(s). These apply the decision framework, sweep for issues approaching the
  12- and 24-month thresholds, and revisit `wishlist` and `capacity-review-*`
  items whose review window has come due.
* **Roadmap planning**: incorporates wishlist review as a standing input.
