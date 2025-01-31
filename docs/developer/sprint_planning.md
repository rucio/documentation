---
id: sprint_planning
title: Sprint planning process in Rucio
---

Work planning in Rucio is organised in two main ways:
- **Release roadmaps**: each roadmap corresponds to a major release, as outlined in the [Release Policy](started/releasepolicy.md).
- **Sprint cycles**: each sprint cycle lasts 2 weeks.

The main objectives of sprint cycles are to:
- Break down each roadmap into 2-week sprint iterations
    - This should result in smaller, more actionable items
- Have more visibility of unplanned tasks that occur during a major release cycle, and that might not be part of the initial roadmap
- More granular understanding of what the members of the team are currently focusing on in the shorter term.

As the Rucio development team is distributed,
the sprint planning process in Rucio is **completely asynchronous, with no meetings**,
resulting in minimal overhead.

## Duration
Given a two-week period, the sprint:
- Begins on the Monday of the first week
- Ends on the Friday of the second week

## Availability
Sprint participants might have other responsibilities to handle, besides the development of Rucio. Because of this, they should determine their availability (i.e. total number of days) before they can plan which issues to work on for a sprint.

In general, given a sprint with 10 working days, a sprint participant can estimate 2 entire days being taken by meetings, reviews and similar activities, plus any additional days needed for other tasks.

## Issues

### Priority
In a sprint, issues should be categorised by their priority:
- priority: issue is part of the release roadmap objectives
- non-priority: issue is not related to the release roadmap objectives

### Size estimation
Each issue is assigned a size based on how many days of work we estimate the issue to take.
After/during the roadmap planning, the size estimates should be set for all priority issues. 
For non-priority issues, the estimates are set when the issue is added to the project.

Given a sprint period, a developer should plan issues totaling their available days for that week (see the [Availability](#availability) section.)

The following labels are available for size estimation:
- **XS**: less than a day of work
- **S**: about a day of work
- **M**: less than 3 days of work
- **L**: about one week (5 days) of work. This issue **should** be broken down into individual sub-issues
- **XL**: more than one week (5 days) of work. This issue **must** be broken down into individual sub-issues


## Moderating a sprint
Each sprint is moderated by one of the developers. This role rotates on a voluntary basis.

The moderator is in charge of:
- Beginning the sprint:
    - Announcing the beginning of the sprint in the [Mattermost](mattermost.md) Developers channel. An example message could be: "Sprint planning thread starts! Please announce your availability (in days), and the issues with their estimates - you choose!"
    - Validating that the GitHub project board has been correctly populated
- Ending the sprint:
    - Announcing the end of the sprint in the same Mattermost channel. An example message could be: "Sprint review thread starts! Please share your review of this sprint, and any comments/improvements!"
    - Validating that the GitHub project board has been correctly updated

## Participating in a sprint
As a sprint participant, at the beginning of the sprint you should:
- Respond to the initial sprint start thread with your availability (in days), and the issues with their estimates
- Update the GitHub project board accordingly

And at the end you should:
- Respond to the sprint end thread with your review and comments
- Update the GitHub project board accordingly