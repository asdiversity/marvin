#Marvin

Marvin calls you when your servers are down. He uses [Uptime Robot](http://www.uptimerobot.com/) to monitor the servers and [Twilio](https://www.twilio.com/) to make the call if something is wrong. Marvis is largely untested and should be used as a complement to the alerts that Uptime Robot provides.

## Requirements

* An [Uptime Robot](http://www.uptimerobot.com/) account pointing at your servers
* A [Twilio](https://www.twilio.com/) account

## Instalation

* Install [node.js](http://nodejs.org/) and npm
* Clone the repository
* Create a config file ```cp config.json.dist config.json```
* Configure the application by filling the config.js file as follows:
    ```
    {
        "twilio_id" : "your twilio id",
        "twilio_token" : "your twilio auth token",
        "twilio_call_from" : "make the call from this number [twilio number]",
        "twilio_call_to" : "call this numbeer",    
        "uptimerobot_key" : "uptime robot api key"
    }
    ```
        
* Run ```npm install```
* Test the application by running ```npm install```


<hr/>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.

<hr/>

Luís Brandão, @luisfbrandao , http://luisbrandao.net
