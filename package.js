Package.describe({
  name: 'jorgeer:stylus',
  version: '2.1.0',
  summary: 'Stylus plugin with plugins from mquandalle:stylus. Compatible with Meteor 1.4 and \'ecmascript\'',
  git: 'https://github.com/jorgeer/meteor-stylus.git',
  readme: 'README.md'
});

Package.registerBuildPlugin({
  name: 'compileStylusBatch',
  use: ['ecmascript@0.12.0', 'caching-compiler@1.2.0'],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: '0.55.0',
    glob: '7.1.3',
    'autoprefixer-stylus': '1.0.0',
  }
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'jorgeer:stylus', 'test-helpers', 'templating', 'ecmascript']);
  api.addFiles([
    'stylus_tests.html',
    'stylus_tests.styl',
    'stylus_tests.import.styl',
    'stylus_tests.js',
    'test_files/direct/direct.import.styl',
    'test_files/indirect/1/indirect1.import.styl',
    'test_files/indirect/2/indirect2.import.styl',
    'test_files/multiple/multiple1.import.styl',
    'test_files/multiple/multiple2.import.styl',
    'test_files/multiple/multiple3.import.styl',
  ], 'client');
});
