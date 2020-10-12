# lysmarine-dashboard
SignalK app to display a dashboard of all the web services available in lysmarineOS

# Install
__todo__

# Development Install

Install a local copy of signalk in your favorite folder (project folder in this example): 

```
git clone https://github.com/SignalK/signalk-server-node.git
cd signalk-server-node
npm install
npm run build
cd ../
```

Link lysmarine-dashboard in the local signalk server:
```
ln -s $(pwd) $(pwd)/signalk-server-node/node_modules/@signalk/
```

Start signalk server.
```
cd signalk-server-node
bin/nmea-from-file
```

The plugin should be available the at the address`http://localhost:3000/LMdashboard/`