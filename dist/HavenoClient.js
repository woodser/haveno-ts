"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloworldServiceClientPb_1 = require("./protobuf/HelloworldServiceClientPb");
const helloworld_pb_1 = require("./protobuf/helloworld_pb");
/**
 * Haveno daemon client.
 */
class HavenoClient {
    /**
     * Construct a client.
     *
     * @param {string} url - Haveno daemon url
     */
    constructor(url) {
        if (!url)
            throw new Error("Must provide URL of Haveno daemon");
        this._url = url;
        this._greeter = new HelloworldServiceClientPb_1.GreeterClient(this._url);
    }
    /**
     * Get the URL of the Haveno daemon.
     *
     * @return {string} the URL of the Haveno daemon
     */
    getUrl() {
        return this._url;
    }
    /**
     * Say hello.
     *
     * @return {string} the message
     */
    async sayHello(msg) {
        try {
            return (await this._greeter.sayHello(new helloworld_pb_1.HelloRequest().setName(msg), null)).getMessage(); // TODO: new promise syntax
            // return await new Promise((resolve, reject) => {
            //   this._greeter.sayHello(new HelloRequest().setName(msg), function(err: grpcWeb.RpcError, response: HelloReply) {
            //     if (err) reject("");
            //     else resolve(response.getMessage());
            //   });
            // });
        }
        catch (e) {
            throw new Error(e.message, e.code);
        }
    }
}
exports.default = HavenoClient;
//# sourceMappingURL=HavenoClient.js.map