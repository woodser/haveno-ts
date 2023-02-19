// --------------------------------- IMPORTS ----------------------------------

// import haveno types
import HavenoClient from "./HavenoClient";
import HavenoUtils from "./utils/HavenoUtils";

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const GenUtils = monerojs.GenUtils;
const BigInteger = monerojs.BigInteger;
const MoneroTxConfig = monerojs.MoneroTxConfig;
const MoneroDestination = monerojs.MoneroDestination;
const MoneroUtils = monerojs.MoneroUtils;
const TaskLooper = monerojs.TaskLooper;

// other imports
import fs from "fs";
import path from "path";
import net from "net";
import assert from "assert";
import console from "console"; // import console because jest swallows messages in real time
import * as os from 'os';

let _client: HavenoClient;

// -------------------------- BEFORE / AFTER TESTS ----------------------------

beforeAll(async () => {
  console.log("Initializing...");
  _client = new HavenoClient("http://localhost:8080");
});

beforeEach(async () => {
  HavenoUtils.log(0, "BEFORE TEST \"" + expect.getState().currentTestName + "\"");
});

afterAll(async () => {

});

// ----------------------------------- TESTS ----------------------------------

jest.setTimeout(100000);

test("Can say hello", async () => {
  const msg = await _client.sayHello("bob");
  expect(msg).toEqual("Hello! bob");
});
