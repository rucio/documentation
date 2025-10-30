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

Code review is an important, continuous, task to be done by all developers. Availability should be reduced accordingly to cover for that.

For example, for a full-time developer devoting 100% of 10 working days to Rucio development, perhaps only 8 days should be reported, to cover time for reviews, meetings, etc.

## Issues

### Priority
The **priority** of an issue indicates whether the issue is part of the release roadmap objectives or not.
This is indicated by the presence of a `priority` label on the issue.

Sub-issues of `priority` issues should also be labeled as `priority`.
This is because a `priority` issue might be too large (see the [Size estimation](#size-estimation) section) to fit in a single sprint,
and it should be broken down into sub-issues, which should still be prioritised over non-priority issues.


### Size estimation
Each issue is assigned a size based on how many days of work the responsible developer estimates the issue to take.
After/during the roadmap planning, the size estimates should be set for all priority issues.
For non-priority issues, the estimates are set when the issue is added to the project, thus ideally all issues in the project should have a size estimate.

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
    - Validating that the GitHub project board has been correctly populated
- Providing brief status updates during the Rucio weekly meetings
- Ending the sprint:
    - Reviewing the retrospective comments left by the developers
    - Validating that the GitHub project board has been correctly updated

## Participating in a sprint
As a sprint participant, at the beginning of the sprint you should:
- Respond to the initial sprint start thread with your availability (in days), and the issues with their estimates
- Update the GitHub project board accordingly

And at the end you should:
- Respond to the sprint end thread with your review and comments
- Update the GitHub project board accordingly

## FAQ

### If I am done with my tasks for this sprint and the sprint is not over, should I add more issues to the sprint?
You can add new issues and mark them with an `unplanned` tag on the sprint board.
In general, we should plan sprints in a way that ensures that the work is neither delayed nor completed too much in advance. If this happens regularly, it might be an indication that we are not estimating sizes properly.

### An issue is less/more work than I thought, should I change the estimate?
The size estimate should not be changed once the issue has been added to the sprint with that estimate.
In the sprint review phase, you can share a reflection on why you found the real effort to not match the estimated effort.

### I won't be able to finish all the issues in the sprint. Should I remove them?
It's important to leave all the issues in the sprint, in order to reflect on whether we planned correctly or not.
We can estimate the remaining effort for the unfinished issues in case we want to move them to a subsequent sprint,
but they should not be removed from their sprint.

### The current sprint is over and I have an unfinished item that I would like to continue in the next sprint. What should I do?
You can move the unfinished item to the next sprint, updating its size according to how much work is estimated to be left.

For example, if you would like to carry over an unfinished item of size M, and you estimate that it will need 1 more day of work,
you can move it to the next sprint and change its size to S.
