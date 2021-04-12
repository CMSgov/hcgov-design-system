# Publishing a new release

## 1) Publish to NPM

1. Run `yarn release` to build a release branch from the HEAD of the master branch. The pre-publish script will prompt you for the version number change. If the script finishes successfully, move on to the next step.
2. Run `npm publish --tag latest` to publish the release to NPM.
    - Note that this cannot be undone.
    - If someone else is doing the publish step, make sure to check out the git tag created in the previous step and `yarn build` before publishing.
3. Create a pull request on GitHub for the release branch so it can be merged into the master branch.

**Note:** You must be logged in to an NPM account with publishing rights on the `cmsgov` organization for this to work. To request access, create a [Jira ticket on the QPP Tools and Access board](https://jira.cms.gov/browse/QTA-847) with your EUA and NPM username. Reach out on the [`#hcgov-design-system` channel](https://cmsgov.slack.com/archives/C0111BVM1LZ) for any questions on this process.

## 2) Update the documentation site

Run `yarn gh-pages` to build and deploy the documentation site.

## 3) Create a release on GitHub

1. Draft a new release on GitHub
1. For the tag, use the format `v*` (ie. `v1.1.0`)
1. For the title, use the release number (ie. `1.1.0`)
1. Follow the format below for the release notes, then publish.

    ```
    ## 🚀 Added
    ## 🚨 Breaking changes
    ## 💅 Changes
    ## 🛠 Fixed
    ## 📦 Internal
    ```
