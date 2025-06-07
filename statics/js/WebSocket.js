const SERVER_ADRESS = 'http://localhost:5000';

export class WebSocket {
    constructor() {
        this.socket = io(SERVER_ADRESS, {
            withCredentials: true,
            extraHeaders: {
                "Access-Control-Allow-Origin": "access"
            }
        });
        this.socket.emit('my event', {data: 'I\'m connected!'});
    }
    
    getAllServerPeople() {
        var list_server_nb;
        if (document.getElementById("set_list_server")) {
            this.socket.emit('serverPeople', function(response) {
                list_server_nb = response.split(',');
                setPeopleShow();
            });
        }   
        return list_server_nb;
    }
}
