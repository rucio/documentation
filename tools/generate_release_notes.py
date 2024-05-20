#!/usr/bin/env python3
import os
import re
from dataclasses import dataclass
from itertools import count
from typing import Any, Iterator, Type

import requests

ITEMS_PER_PAGE = 100  # 100 is the max
RELEASE_NOTES_FOLDER = (
    f"{os.path.dirname(os.path.realpath(__file__))}/../docs/release-notes/"
)


@dataclass(frozen=True)
class GitHubRelease:
    tag_name: str
    body: str

    @classmethod
    def from_github_release_api_json_obj(
        cls: "Type[GitHubRelease]", obj: Any
    ) -> "GitHubRelease":
        return cls(obj["tag_name"], obj["body"])


def iter_github_releases(owner: str, repo: str) -> Iterator[GitHubRelease]:
    """
    Iterate the releases in the given GitHub repository.

    :param owner: The owner of the GitHub repository.
    :param repo: The GitHub repository name.
    :returns: An iterator over the releases.
    """
    for page in count(0):
        request = requests.get(
            f"https://api.github.com/repos/{owner}/{repo}/releases",
            params={"per_page": ITEMS_PER_PAGE, "page": page},
            headers={"Accept": "application/vnd.github.v3+json"},
        )
        assert request.status_code == 200, "The request should be succesfull!"

        releases = request.json()

        for r in releases:
            yield GitHubRelease.from_github_release_api_json_obj(r)

        if len(releases) != ITEMS_PER_PAGE:
            return


def github_to_markdown_body(body: str) -> str:
    """
    Generate a markdown body from the GitHub provided one.

    :param body: The markdown body provided by the GitHub Releases.
    :returns: A markdown body.
    """

    body = re.sub(
        r"#(\d{1,5})", r"[#\1](https://github.com/rucio/rucio/issues/\1)", body
    )

    REPLACE_CHARACTERS = {
        "<": r"\<",
        ">": r"\>",
        "\r\n": "\n",
        "\n#": "\n\n##",
        "{": "",
        "}": "",
    }

    for before, after in REPLACE_CHARACTERS.items():
        body = body.replace(before, after)

    return body


def process_release(release: GitHubRelease) -> None:
    """
    Creates a file for a release.

    :param release: The release to create the file for.
    """
    fp = open(os.path.join(RELEASE_NOTES_FOLDER, f"{release.tag_name}.md"), "w+")
    fp.write(f"---\ntitle: {release.tag_name}\n---\n")
    fp.write(str(github_to_markdown_body("\n" + release.body)))


def main() -> None:
    if not os.path.exists(RELEASE_NOTES_FOLDER):
        os.makedirs(RELEASE_NOTES_FOLDER)

    releases = iter_github_releases("rucio", "rucio")
    list(map(lambda r: process_release(r), releases))


if __name__ == "__main__":
    main()
