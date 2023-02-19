import assert from "assert";
import console from "console";

/**
 * Collection of utilities for working with Haveno.
 */
export default class HavenoUtils {
    
  static logLevel = 0;
  static centinerosToAUMultiplier = 10000;
  static months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  static lastLogTimeMs = 0;
  
  /**
   * Set the log level with 0 being least verbose.
   *
   * @param {int} level - the log level
   */
  static async setLogLevel(level: number) {
    assert(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
    HavenoUtils.logLevel = level;
  }
  
  /**
   * Get the log level.
   *
   * @return {int} the current log level
   */
  static getLogLevel(): number {
    return HavenoUtils.logLevel;
  }
    
  /**
   * Log a message. // TODO (woodser): switch to log library?
   *
   * @param {int} level - log level of the message
   * @param {string} msg - message to log
   */
  static log(level: number, msg: string) {
    assert(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
    if (HavenoUtils.logLevel >= level) {
      const now = Date.now();
      const formattedTimeSinceLastLog = HavenoUtils.lastLogTimeMs ? " (+" + (now - HavenoUtils.lastLogTimeMs) + " ms)" : "\t";
      HavenoUtils.lastLogTimeMs = now;    
      console.log(HavenoUtils.formatTimestamp(now) + formattedTimeSinceLastLog + "\t[L" + level + "] " + msg);
    }
  }
  
  /**
   * Format a timestamp as e.g. Jul-07 hh:mm:ss:ms. // TODO: move to GenUtils?
   * 
   * @param {number} timestamp - the timestamp in milliseconds to format
   * @return {string} the formatted timestamp
   */
  static formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return HavenoUtils.months[date.getMonth()] + "-" + date.getDate() + " " + date.getHours() + ':' + ("0"  + date.getMinutes()).substr(-2) + ':' + ("0" + date.getSeconds()).substr(-2) + ':' + ("0" + date.getMilliseconds()).substr(-2);
  }
}  