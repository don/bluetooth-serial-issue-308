var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
      // print the devices so we see what's paired
      bluetoothSerial.list(app.printDevices);
      // test the connection to a known MAC address
      app.testConnection();
    },

    printDevices: function(availableDevices) {
      var pre = document.querySelector('pre');
      pre.innerHTML = JSON.stringify(availableDevices, null, 2);
    },

    testConnection: function() {
      // TODO replace address with the MAC address of your device
      var address = 'AA:BB:CC:DD:EE:FF';
      var success = function() {
        app.status('Connected to ' + address);
      }
      var failure = function() {
        app.status('Failed to connect to ' + address);
      }
      app.status('Testing connection...');
      bluetoothSerial.connect(address, success, failure);
    },

    status: function(message) {
      console.log(message);
      var div = document.querySelector('#statusDiv');
      div.innerHTML = div.innerHTML + '<br/>' + message;
    }
};

app.initialize();
