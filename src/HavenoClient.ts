import console from "console";
import type * as grpcWeb from "grpc-web";
import { GreeterClient } from './protobuf/HelloworldServiceClientPb';
import { HelloRequest, HelloReply} from "./protobuf/helloworld_pb";

/**
 * Haveno daemon client.
 */
export default class HavenoClient {

  // grpc clients
  /** @private */ _greeter: GreeterClient;

  // state variables
  /** @private */ _url: string;

  /**
   * Construct a client.
   *
   * @param {string} url - Haveno daemon url
   */
  constructor(url: string) {
    if (!url) throw new Error("Must provide URL of Haveno daemon");
    this._url = url;
    this._greeter = new GreeterClient(this._url);
  }
  
  /**
   * Get the URL of the Haveno daemon.
   * 
   * @return {string} the URL of the Haveno daemon
   */
  getUrl(): string {
    return this._url;
  }
  
  /**
   * Say hello.
   * 
   * @return {string} the message
   */
  async sayHello(msg: string): Promise<string> {
    try {
      return (await this._greeter.sayHello(new HelloRequest().setName(msg), null)).getMessage(); // TODO: new promise syntax
      // return await new Promise((resolve, reject) => {
      //   this._greeter.sayHello(new HelloRequest().setName(msg), function(err: grpcWeb.RpcError, response: HelloReply) {
      //     if (err) reject("");
      //     else resolve(response.getMessage());
      //   });
      // });
    } catch (e: any) {
      throw new Error(e.message, e.code);
    }
  }
}
