# [Playwright](https://playwright.dev/) Docs Creator

## This script is used to generate the docs from Playwright e2e test

It its a very POC and it is not ready for anything really.

## Philosophy

Its something simple that came up during a conversation with [@Dueen](https://github.com/Dueen) _"what if your e2e tests generated step by step docs so that your user docs are always up to date._

The more I think about this, I dont think it a very good idea, but It can definitely be a good place to start writing docs for End users.

## Tech

All this is is a [custom reporter](https://playwright.dev/docs/test-reporters#custom-reporters) that generates a markdown file with the steps that the test took.

The test output is [here](https://github.com/ahwelgemoed/playwright_doc_gen/blob/main/output/create_a_new_github_issue.md)

## How to use

- Clone the repo
- Run `npm install`
- Run `npm run test`

### Some Notes

- Ideally the test will have no screenshot, and we inject the screenshot methods and rerun the test ourselves

- ...
