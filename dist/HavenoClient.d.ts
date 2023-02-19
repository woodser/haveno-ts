import { GreeterClient } from './protobuf/HelloworldServiceClientPb';
/**
 * Haveno daemon client.
 */
export default class HavenoClient {
    /** @private */ _greeter: GreeterClient;
    /** @private */ _url: string;
    /**
     * Construct a client.
     *
     * @param {string} url - Haveno daemon url
     */
    constructor(url: string);
    /**
     * Get the URL of the Haveno daemon.
     *
     * @return {string} the URL of the Haveno daemon
     */
    getUrl(): string;
    /**
     * Say hello.
     *
     * @return {string} the message
     */
    sayHello(msg: string): Promise<string>;
}
