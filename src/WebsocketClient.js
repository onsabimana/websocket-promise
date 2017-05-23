var WebsocketClient = function(url, options) {
    this.socket = new Websocket(url, options);

    var logger = function(message) {
        console.log("socket: ", message)
    };
    this.socket.onmessage = function(evt) {
        logger("onmessage - received: " + evt.data);
    };

    this.socket.onerror = function(evt) {
        logger("onerror - occured: " + evt.data);
    };

    this.socket.onclose = function(evt) {
        logger("onclose - state: " + evt.data);
    };
};
