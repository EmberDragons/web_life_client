const SERVER_ADRESS = 'http://localhost:5000';

export class WebSocket {
    constructor() {
        this.socket = io(SERVER_ADRESS, {
            withCredentials: true,
            extraHeaders: {
                "Access-Control-Allow-Origin": "access"
            }
        });
        console.log(this.socket);
        
        this.socket.on('connect', function() {
            this.socket.emit('my event', {data: 'I\'m connected!'});
        });
    }
    
    sendPos() {
        this.socket.emit('my event', {data: "1000"}, function(response) {
            console.log("Server replied:", response);
        });
    }
}
