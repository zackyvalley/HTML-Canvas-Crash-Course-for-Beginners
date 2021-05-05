const glob = require('glob');
const path = require('path');

const PAGE_ROOT = '../src/pages/';

const pages = glob.sync(`**/*.jsx`, {
  ignore: `**/_*.jsx`,
  cwd: PAGE_ROOT
}).map((currentPagePath) => {
  const pageCurrentPath = PAGE_ROOT + currentPagePath.replace(/(?!.*\/).+\.jsx$/, '');
  const relativePath = `${path.relative(pageCurrentPath, PAGE_ROOT) || '.'}/`;
  const currentPageHTMLPath = currentPagePath.replace(/jsx$/, 'html')
  return {
    template: PAGE_ROOT + currentPagePath,
    filename: currentPageHTMLPath,
    relativePath
  }
});

module.exports = pages;
