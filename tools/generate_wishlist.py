#!/usr/bin/env python3
import os
from collections import defaultdict
from dataclasses import dataclass
from itertools import count
from typing import Any, Dict, FrozenSet, Iterator, List, Set, TextIO, Tuple, Type

import requests

ITEMS_PER_PAGE = 100  # 100 is the max
OWNER = "rucio"
CORE_REPO = "rucio"
SECONDARY_REPOS = [
    "documentation",
    "containers",
    "k8s-tutorial",
    "webui",
    "helm-charts",
    "jupyterlab-extension",
    "probes",
]
LABEL = "wishlist"
# Component labels in the core repository all share this label colour.
COMPONENT_LABEL_COLOR = "d4c5f9"
NO_LABEL_GROUP = "No component label"
WISHLIST_FILE = (
    f"{os.path.dirname(os.path.realpath(__file__))}"
    "/../docs/developer/wishlist_issues.md"
)

PAGE_HEADER = """---
id: wishlist_issues
title: Wishlist Issues
---

This page lists all issues of the [Rucio repositories](https://github.com/rucio)
that have been closed with the `wishlist` label. As described in the
[issue management guideline](issue_management.md), these are issues of
potential value that are not planned for the next twelve months. They are
Wishlisted issues are revisited regularly and can be re-opened when there is both interest and capacity from component leads. 
pipeline when interest and capacity align.

This list is refreshed automatically whenever the documentation is built. You
can also view it
[directly on GitHub](https://github.com/search?q=org%3Arucio+is%3Aissue+state%3Aclosed+label%3Awishlist).
"""


@dataclass(frozen=True)
class GitHubIssue:
    number: int
    title: str
    html_url: str
    closed_at: str
    labels: Tuple[str, ...]

    @classmethod
    def from_github_issue_api_json_obj(
        cls: "Type[GitHubIssue]", obj: Any
    ) -> "GitHubIssue":
        labels = tuple(label["name"] for label in obj["labels"])
        return cls(
            obj["number"], obj["title"], obj["html_url"], obj["closed_at"], labels
        )


def github_api_headers() -> Dict[str, str]:
    """
    Generate the request headers for the GitHub API.

    :returns: The request headers, authenticated if GITHUB_TOKEN is set.
    """
    headers = {"Accept": "application/vnd.github.v3+json"}
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def get_component_labels(owner: str, repo: str) -> FrozenSet[str]:
    """
    Get the names of the component labels of a GitHub repository.

    Component labels are identified by their shared label colour.

    :param owner: The owner of the GitHub repository.
    :param repo: The GitHub repository name.
    :returns: The names of the component labels.
    """
    names: Set[str] = set()
    page = 1
    while True:
        request = requests.get(
            f"https://api.github.com/repos/{owner}/{repo}/labels",
            params={"per_page": str(ITEMS_PER_PAGE), "page": str(page)},
            headers=github_api_headers(),
        )
        assert request.status_code == 200, "The request should be successful!"

        labels = request.json()
        names.update(
            label["name"]
            for label in labels
            if label["color"].lower() == COMPONENT_LABEL_COLOR
        )

        if len(labels) != ITEMS_PER_PAGE:
            return frozenset(names)
        page += 1


def iter_github_wishlist_issues(owner: str, repo: str) -> Iterator[GitHubIssue]:
    """
    Iterate the closed issues labelled wishlist in the given GitHub repository.

    :param owner: The owner of the GitHub repository.
    :param repo: The GitHub repository name.
    :returns: An iterator over the closed wishlist issues.
    """
    for page in count(1):
        request = requests.get(
            f"https://api.github.com/repos/{owner}/{repo}/issues",
            params={
                "state": "closed",
                "labels": LABEL,
                "per_page": str(ITEMS_PER_PAGE),
                "page": str(page),
            },
            headers=github_api_headers(),
        )
        assert request.status_code == 200, "The request should be successful!"

        issues = request.json()

        for issue in issues:
            # The issues API also returns pull requests; skip them.
            if "pull_request" in issue:
                continue
            yield GitHubIssue.from_github_issue_api_json_obj(issue)

        if len(issues) != ITEMS_PER_PAGE:
            return


def get_sorted_wishlist_issues(owner: str, repo: str) -> List[GitHubIssue]:
    """
    Get the closed wishlist issues of a repository, newest-closed first.

    :param owner: The owner of the GitHub repository.
    :param repo: The GitHub repository name.
    :returns: The closed wishlist issues, newest-closed first.
    """
    return sorted(
        iter_github_wishlist_issues(owner, repo),
        key=lambda issue: issue.closed_at,
        reverse=True,
    )


def issue_count_sentence(n: int) -> str:
    """
    Generate a sentence stating the number of wishlist issues.

    :param n: The number of wishlist issues.
    :returns: A sentence stating the number of wishlist issues.
    """
    if n == 0:
        return "There are currently no wishlist issues.\n"
    verb = "is" if n == 1 else "are"
    noun = "issue" if n == 1 else "issues"
    return f"There {verb} currently **{n}** wishlist {noun}.\n"


def write_issue_table(fp: TextIO, issues: List[GitHubIssue]) -> None:
    """
    Write a markdown table of issues.

    :param fp: The file to write to.
    :param issues: The issues to write.
    """
    fp.write("| Issue | Title | Closed |\n")
    fp.write("|-------|-------|--------|\n")
    for issue in issues:
        title = issue.title.replace("|", "\\|")
        closed_on = issue.closed_at[:10]
        fp.write(f"| [#{issue.number}]({issue.html_url}) | {title} | {closed_on} |\n")


def write_core_repo_section(fp: TextIO) -> None:
    """
    Write the section for the core repository, grouped by label.

    :param fp: The file to write to.
    """
    issues = get_sorted_wishlist_issues(OWNER, CORE_REPO)
    fp.write(f"\n## {OWNER}/{CORE_REPO}\n\n")
    fp.write(issue_count_sentence(len(issues)))
    if not issues:
        return
    fp.write(
        "\nThe issues are grouped by their component labels; an issue with "
        "several component labels appears in each group.\n"
    )

    component_labels = get_component_labels(OWNER, CORE_REPO)
    grouped: Dict[str, List[GitHubIssue]] = defaultdict(list)
    for issue in issues:
        components = [label for label in issue.labels if label in component_labels]
        for label in components or [NO_LABEL_GROUP]:
            grouped[label].append(issue)

    group_names = sorted(name for name in grouped if name != NO_LABEL_GROUP)
    if NO_LABEL_GROUP in grouped:
        group_names.append(NO_LABEL_GROUP)

    for name in group_names:
        fp.write(f"\n### {name}\n\n")
        write_issue_table(fp, grouped[name])


def write_secondary_repo_section(fp: TextIO, repo: str) -> None:
    """
    Write the section for a secondary repository.

    :param fp: The file to write to.
    :param repo: The GitHub repository name.
    """
    issues = get_sorted_wishlist_issues(OWNER, repo)
    fp.write(f"\n## {OWNER}/{repo}\n\n")
    fp.write(issue_count_sentence(len(issues)))
    if issues:
        fp.write("\n")
        write_issue_table(fp, issues)


def main() -> None:
    with open(WISHLIST_FILE, "w+") as fp:
        fp.write(PAGE_HEADER)
        write_core_repo_section(fp)
        for repo in SECONDARY_REPOS:
            write_secondary_repo_section(fp, repo)


if __name__ == "__main__":
    main()
