'use strict';

module.exports = async (app) => {
    if (app.enabled.includes('mqtt-thingsboard')) {
        if (app['mqtt-thingsboard'].queue) {
            const ts = (new Date()).getTime();
            if (app.gateway) {
                // setup timestamps
                Object.keys(app.gateway).forEach(device => {
                    app.gateway[device][0].ts = ts;
                });
                app['mqtt-thingsboard'].queue.push(app.gateway);
            } else {
                app.device.ts = ts;
                app['mqtt-thingsboard'].queue.push(app.device);
            }
        }
    }
};