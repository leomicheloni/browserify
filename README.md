# Browserify Sample
Just for learing how to use browserify.
Browserify will allows you to use node packages for building webpages, just add dependencies to package.json and call it from your js files:

``var $ = require("jquery");``
``$("element").on("click", function() { alert("hello");});``

##Usage

User ``npm run build`` for building bundle file or ``npm run watch`` for continuos change watching. 

##Adding new dependencies

Just add to package.json typing ``npm install mydependency --save`` Browserify will read package.json to build the bundle file.



