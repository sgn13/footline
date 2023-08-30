const path = require('path');

const pathList = [
  'containers',
  'components',
  'configuration',
  'constants',
  'pages',
  'store',
  'types',
  'utils',
  'theme',
  'assets',
  'mock',
  'hoc',
  'lib',
  'hooks',
  'app',
  'hooks',
  'routes',
  'lib',
  'db',
];

const alias = {};

pathList.map((item) => {
  alias[`${item}`] = path.resolve(process.cwd(), item);

  return true;
});

module.exports = alias;
