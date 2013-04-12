var http = require('http'),
    config = require('./config'),
    client = require('twilio')(config.twilio_id, config.twilio_token);

uptimeRobotUrl = "http://api.uptimerobot.com/getMonitors?apiKey=" + config.uptimerobot_key + "&format=json&noJsonCallback=1"

// make a request to uptime robot and make a call if something is wrong
http.get(uptimeRobotUrl, function(res) {
      var body = '';

      res.on('data', function(chunk) {
         body += chunk;
      });

      res.on('end', function() {
        // request to uptime robot is complete. parse the response.
        var robotResponse = JSON.parse(body);

        // check the value of the stat property
        if (robotResponse.stat ) {
            if ( robotResponse.stat == "fail" ) {
                // one of the servers is not ok
                console.log("Servers might be down!");
                client.calls.create({
                    url: config.twilio_url,
                    to: config.twilio_call_to,
                    from: config.twilio_call_from,
                    method: "GET"
                }, function(err, call) {
                    process.stdout.write(call.sid);
                });
            } else if ( robotResponse.stat == "ok" ) {
                // all servers are good
                console.log("Servers are up!");
            } else {
                // wrong response format
                console.log("I don't understand uptime robot's response.");
            }
        } 
      });
}).on('error', function(e) {
    console.log("Something went wrong: " + e.message);
});