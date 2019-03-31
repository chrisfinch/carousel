# Carousel Test

### By Chris Finch

## Installation

- Create `.env` file in project root and add PixaBay api key: 
```
PIXABAY_API_KEY="<api_key_here>"
```

- `yarn install`

## Run

- Storybook for Carousel Component: `yarn run storybook`
- Standalone implementation: `yarn run start`
- Test: `yarn run test`

## Notes

- Intention: demonstrate principles for modern Javascript component development with React
- Time spent aprx 3.5h
- Choices made;
    - Typescript
    - React
    - Webpack
    - Storybook
    - Jest
    - css-in-js with emotion
- Webpack, Storybook and Jest boilerplate brought in from previous implementations
- With more time;
    - Redux implementation for data fetching and management (overkill for one compnent)
    - Intermediate breakpoints between mobile and desktop
    - Flexbox fallback for older browsers
    - Unit tests for slideshow next/prev functionality as snapshot test is currently insufficient
