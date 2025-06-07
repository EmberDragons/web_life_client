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
        return new Promise((resolve, reject) => {
            if (document.getElementById("set_list_server")) {
                this.socket.emit('serverPeople', { data: "none" }, function(response) {
                    if (response && response['result']) {
                        resolve(response['result'].split(','));
                    } else {
                        reject('No response');
                    }
                });
            } else {
                resolve(null);
            }
        });
    }

    getObjects() {
        return new Promise((resolve, reject) => {
            //send to the server the emoji
            this.socket.emit('getObjectList', { data: "none" }, function(response) {
                if (response && response['result']) {
                    resolve(response['result'].split("|"));
                } else {
                    reject('No response');
                }
            });
        });
    }

    addEmoji(dict) {
        this.socket.emit('addEmojiList', dict);
    }
}
