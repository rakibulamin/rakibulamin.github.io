# Rakibul Amin — Academic website

Live website: https://rakibulamin.github.io/

This website uses the actual [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template, customised for civil and environmental engineering, water-quality research, and professional WASH work.

## Content

- About and research interests
- Shari–Goyain River physicochemical water-quality study
- Ganges–Brahmaputra–Meghna basin research entry
- ICERIE 2019 conference publication
- Professional WASH projects and CV
- GRE 312/340 and IELTS overall 7.5/9

## Editing and building

The editable Jekyll source is in `academic-src/`. The site root contains the generated static output for GitHub Pages. The `.nojekyll` file makes GitHub Pages serve that output directly.

```sh
cd academic-src
npm install
bundle install
npm run build
```

Copy the contents of `academic-src/dist/` to the repository root, retaining `academic-src/`, `.nojekyll`, and this README. Commit and push to `master` to publish updates.

Page content is in `academic-src/_pages/`, `_research/`, `_publications/`, and `_portfolio/`. Navigation is in `academic-src/_data/navigation.yml`.

## Attribution and history

See `academic-src/TEMPLATE.md` for the upstream template revision and `LICENSE` for its MIT licence. The previous portfolio is preserved in repository history and on the `archive/portfolio-before-academic` branch.
