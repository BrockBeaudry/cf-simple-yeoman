'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');


var HelloexpressGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    this.log(yosay('Generating a barebones express server...'));

    var prompts = [{
      type: 'confirm',
      name: 'isAwesome',
      message: 'Is this generator awesome?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  fileScaffolding: function() {
    this.mkdir('static');
  },

  expressFiles: function() {
    this.copy('_server.js', 'server.js');
    this.copy('_index.html', 'static/index.html');
  }, 

  projectfiles: function () {
    this.copy('_package.json', 'package.json');
  },
});

module.exports = HelloexpressGenerator;
