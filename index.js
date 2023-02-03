/**
 * Copyright 2020,2023 Frederic Guilbault http://lysmarineos.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 */

const expressStatic = require("express-static");
var path = require('path');
// https://github.com/SignalK/signalk-server-node/blob/master/SERVERPLUGINS.md

module.exports = function(app) {
    var plugin = {};
    plugin.id = "lysmarine_dashboard";
    plugin.name = "Lysmarine dashboard";
    plugin.description = "Display lysmarineOS dashboard";
    plugin.packageName = 'lysmarine_dashboard';
    plugin.version = '1.0.0';

    plugin.start = function() {};

    plugin.registerWithRouter = function() {
        app.set('etag', false);
        app.debug("Register...");
        app.use('/LMdashboard/image', [
            expressStatic(path.join(__dirname, '/image/'))
        ])

        app.use('/LMdashboard/js', [
            expressStatic(path.join(__dirname, '/js/')),
            expressStatic(__dirname + '/node_modules/jquery/dist/',{etag: false})
        ])

        app.use('/LMdashboard/css', [
            expressStatic(path.join(__dirname, '/css/'))
        ])

        app.use('/LMdashboard/public',[
            expressStatic(__dirname +'/public/',{etag: false}),
            expressStatic(__dirname + '/node_modules/jquery/dist/',{etag: false})
        ]);

        app.use('/LMdashboard', (req, res) => {
            res.sendFile('./index.html', { root: __dirname+'/public/', });
        });

    };

    plugin.stop = function() {};

    // Plugin configuration panel
    plugin.schema = {
        title: "Lysmarine Dashboard",
        properties: {}
    };

    return plugin;
};
