import io from "socket.io-client";
import feathers from "@feathersjs/client";

const socket = io(process.env.REACT_APP_SOCKET_URL);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

export default client;
