#!/bin/sh

# This script checks out a specified release tag, builds it, and publishes
# it to npm. The second argument is optional and is for an 
# [npm dist-tag](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag). If
# you are publishing a beta release, please use "beta" for the second arg.
#
# Usage:
# $ yarn publish-release <version number> [npm dist-tag]

set -e

GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN="\033[0;36m"
NC='\033[0m' # No color

echo "${GREEN}Checking out release $1...${NC}"
TAG_PREFIX="v"
git fetch --tags
git checkout tags/$TAG_PREFIX$1

echo "${GREEN}Building packages...${NC}"
yarn install
yarn build

echo "${GREEN}Publishing ${CYAN}$1${GREEN} to npm...${NC}"
NPM_TAG="${2:-""}"
echo $NPM_TAG
# npm publish --tag $2

echo "${GREEN}Done.${NC}"
echo ""
echo "${YELLOW}-------${NC}"
echo ""
echo "${YELLOW}NEXT STEPS:${NC}"
echo ""
echo "${YELLOW}  1. Update the documentation site with ${NC}"
echo ""
echo "     ${CYAN}\$${NC} yarn gh-pages"
echo ""