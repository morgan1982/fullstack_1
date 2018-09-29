const mysql = require('mysql');
const fs = require('fs');
const path = require('path');


const rsa_key_path = path.join(__dirname, '..', 'config', 'openssh_key');


if (process.env.NODE_ENV !== "production") {
    const Tunnel = require('tunnel-ssh');
}

mdoule.exports = (server) => {


    return new Object({

        tunnelPort: 3306, // any free port 
        
        // SERVER CONFIG

        dbServer: server || {
            host: '138.68.90.69',
            port: 3306,
            user: 'thanos',
            password: '12345678',
            database: 'knowpsyself'
        },

        // SSH TUNNEL
        
        tunnelConfig: {
            remoteHost: '138.68.90.69',
            remotePort: 3306,
            localPort: 3306,
            verbose: true,
            disabled: false,
            sshConfig: {
                host: '138.68.90.69',
                port: 22,
                username: 'killerwhale',
                privateKey: fs.readFileSync(rsa_key_path, 'utf8')
            }
        },

        // INIT THE SQL CONNECTION VIA A TUNNEL
        
        init: function (callback) {

            let me = this;

            let config  =this.tunnelConfig;

            let newStyleConfig = {

                username: config.sshConfig.username,
                port: config.sshConfig.port,
                host: config.sshConfig.host,

                dstPort: config.remotePort,
                dstHost: config.remoteHost,
                srcPort: config.localPort,
                srcHost: config.sshConfig.host,
                privateKey: config.sshConfig.privateKey
            }

            me.tunnel = new Tunnel(newStyleConfig, (err) => {
                console.log('Tunnel connected', err);

                if (err) {
                    return callback(err);
                }

                me.connection = me.connect(callback);
            });
        },



        errorHandler: function (err) {

            var me = this;
            //
            // Check for lost connection and try to reconnect
            //
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.log('MySQL connection lost. Reconnecting.');
                me.connection = me.connect();
            } else if (err.code === 'ECONNREFUSED') {
                //
                // If connection refused then keep trying to reconnect every 3 seconds
                //
                console.log('MySQL connection refused. Trying soon again. ' + err);
                setTimeout(function () {
                    me.connection = me.connect();
                }, 3000);
            }
        },


        connect: function (callback) {

            var me = this;
            //
            // Create the mysql connection object
            //
            var connection = mysql.createConnection(me.dbServer);
            connection.on('error', me.errorHandler);
            //
            // Try connecting
            //
            connection.connect(function (err) {
                if (err) throw err;
                console.log('Mysql connected as id ' + connection.threadId);
                if (callback) callback();
            });

            return connection;
        }

    })
}



