'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here

    postcssOptions: {
      compile: {
        enabled: true,
        // এই ফাইলগুলোতে Tailwind ক্লাস খুঁজবে এবং ক্যাশ করবে
        cacheInclude: [/.*\.(css|gjs|hbs|html)$/, /.tailwind\.config\.js$/],
        plugins: [
          {
            module: require('tailwindcss'),
            options: {
              config: './tailwind.config.js', // কনফিগ ফাইল পাথ
            },
          },
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};
