#!/bin/sh

set -eo pipefail

RED="\033[0;31m"
GREEN='\033[0;32m'
NC='\033[0m' # No color

echo "${GREEN}Pulling latest from GitHub...${NC}"
git checkout master
git pull

echo "${GREEN}Cleaning directory and fresh installing...${NC}"
git clean -fdx
yarn install

echo "${GREEN}Building files and running tests...${NC}"
yarn test
yarn build

echo "${GREEN}Bumping version and creating tagged release commit...${NC}"
yarn bump
PACKAGE_VERSION=$(node -pe "require('./package.json').version")
BRANCH="release-$PACKAGE_VERSION"
git checkout -b $BRANCH
git add package.json
git commit -m "Bump package version to $PACKAGE_VERSION"

echo "${GREEN}Pushing tag and release commit to Github...${NC}"
TAG="v$PACKAGE_VERSION"

# Push up release branch containing the updated package versions
git push --set-upstream origin $BRANCH
git tag -a $TAG -m "Release $TAG" -s
git push origin $TAG

echo "${GREEN}Prepublish complete. Make sure to merge the release branch $BRANCH into master...${NC}"
