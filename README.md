# Wildlife

[A landing page](https://mserykh.github.io/wildlife/)

## Technical task

[Layout in Figma](https://www.figma.com/file/dJoqHi1YHTLR06PPEeCc7t/Wildlife)

- [ ] Must include following blocks: Header, Survival, Last articles, Get notified, Footer
- [ ] Acceptable allowance : 5px horizontally and 10px vertically
- [ ] Adaptive grid is appreciated
- [ ] A slider could be left as a layout
- [ ] Elements in a row must be the same width if they are visually so
- [ ] Interective elements must have interective effects
- [ ] Grid width: 1440px, content width: 1200px
- [ ] Background colours: 
  - [ ] for Header and Survival: `background-color: #02160b`
  - [ ] for Latest articles and Get notified: `background-color: #cccccc`
  - [ ] for Footer: `background-color: #181617`

- [x] Header:
  - [x] This block includes only a logo and a navigation menu
  - [x] The logo consists of an svg image and a text
  - [x] The navigation menu is `ul > li > a`
  - [x] The page must include one `<h1>` 

- [ ] Survival: 
  - [ ] Header and Survival have a shared background image
  - [ ] Use `letter-spacing` for a title
  - [x] Use `<br>` for a new line
  - [ ] A button "Donate" is interactive, add all state styles as designed

- [ ] Latest articles
  - [ ] Only flexbox, grid or float can be used. `<table>` is forbidden
  - [ ] Texts could be placed over images using `position: absolute`, images can be added using `background-image`, though it is not semantically correct
  - [ ] A slider navigation is interactive

- [x] Get notified: 
  - [x] Use `<form>`
  - [x] An e-mail input should be marked up with `<input>` and `type` is `text` or `email`
  - [x] A send element should be marked up with `<input>` and `type` is `submit`
  - [x] Add an e-mail input placeholder

- [ ] Footer: 
  - [x] The footer includes a logo, additional navigation menu and social links 
  - [x] Use the logo from the Header
  - [x] A menu and links is added as `ul > li > a`
  - [x] For social links use svg icons
  - [ ] All links must be interactive

## Recommendations

- For a pixel perfect check use a Chrome extension "PerfectPixel by WellDoneCode"
- A button "Sign in" could be `a` or `button`
- The final layout should be visually similar to the mockup in Figma
