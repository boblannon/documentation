/* @flow */

const babylon = require('babylon');

const opts = {
  allowImportExportEverywhere: true,
  sourceType: 'module',
  plugins: [
    'asyncGenerators',
    'classConstructorCall',
    'classProperties',
    'decorators',
    'doExpressions',
    'exportExtensions',
    'flow',
    'functionBind',
    'functionSent',
    'jsx',
    'objectRestSpread',
    'dynamicImport'
  ]
};

export function parseToAst(source: string) {
  return babylon.parse(source, opts);
}
