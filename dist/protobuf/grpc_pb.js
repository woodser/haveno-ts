// source: grpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var pb_pb = require('./pb_pb.js');
goog.object.extend(proto, pb_pb);
goog.exportSymbol('proto.io.bisq.protobuffer.AccountExistsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AccountExistsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AddConnectionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AddConnectionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AddressBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AvailabilityResultWithDescription', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BackupAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BackupAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BalancesInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BtcBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CancelOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CancelOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ChangePasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ChangePasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CheckConnectionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CheckConnectionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CheckConnectionsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CheckConnectionsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CloseAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CloseAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CompleteTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CompleteTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentSentReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentSentRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ContractInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreatePaymentAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreatePaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateXmrTxReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateXmrTxRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.DeleteAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.DeleteAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAddressBalanceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAddressBalanceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBalancesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBalancesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBestAvailableConnectionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetChatMessagesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetChatMessagesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetConnectionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetConnectionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetConnectionsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetConnectionsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetDisputeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetDisputeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetDisputesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetDisputesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetFundingAddressesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetFundingAddressesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMethodHelpReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMethodHelpRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeStatisticsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeStatisticsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradesRequest.Category', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetVersionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetVersionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrNewSubaddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrSeedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrSeedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrTxsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetXmrTxsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.IsAccountOpenReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.IsAccountOpenRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.IsAppInitializedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.IsAppInitializedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.LockWalletReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.LockWalletRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketDepthInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketDepthReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketDepthRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPricesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPricesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.NotificationMessage', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.NotificationMessage.NotificationType', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OfferInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OpenAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OpenAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OpenDisputeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OpenDisputeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.PostOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.PostOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterDisputeAgentReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterDisputeAgentRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterNotificationListenerRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RelayXmrTxReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RelayXmrTxRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveConnectionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveConnectionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ResolveDisputeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ResolveDisputeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RestoreAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RestoreAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBtcRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendChatMessageReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendChatMessageRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendDisputeChatMessageReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendDisputeChatMessageRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendNotificationReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendNotificationRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetAutoSwitchReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetAutoSwitchRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetConnectionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetConnectionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StartCheckingConnectionsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StartCheckingConnectionsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StartMoneroNodeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StartMoneroNodeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopCheckingConnectionsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopCheckingConnectionsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopMoneroNodeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopMoneroNodeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TakeOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TakeOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TradeInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnlockWalletReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnlockWalletRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnregisterDisputeAgentReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UrlConnection', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UrlConnection.AuthenticationStatus', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UrlConnection.OnlineStatus', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ValidateFormFieldReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ValidateFormFieldRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.WithdrawFundsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.WithdrawFundsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.XmrBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.XmrDestination', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.XmrIncomingTransfer', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.XmrOutgoingTransfer', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.XmrTx', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMethodHelpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMethodHelpRequest.displayName = 'proto.io.bisq.protobuffer.GetMethodHelpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMethodHelpReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMethodHelpReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMethodHelpReply.displayName = 'proto.io.bisq.protobuffer.GetMethodHelpReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetVersionRequest.displayName = 'proto.io.bisq.protobuffer.GetVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetVersionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetVersionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetVersionReply.displayName = 'proto.io.bisq.protobuffer.GetVersionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AccountExistsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AccountExistsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AccountExistsRequest.displayName = 'proto.io.bisq.protobuffer.AccountExistsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AccountExistsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AccountExistsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AccountExistsReply.displayName = 'proto.io.bisq.protobuffer.AccountExistsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.IsAccountOpenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.IsAccountOpenRequest.displayName = 'proto.io.bisq.protobuffer.IsAccountOpenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.IsAccountOpenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.IsAccountOpenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.IsAccountOpenReply.displayName = 'proto.io.bisq.protobuffer.IsAccountOpenReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreateAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateAccountReply.displayName = 'proto.io.bisq.protobuffer.CreateAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OpenAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OpenAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OpenAccountRequest.displayName = 'proto.io.bisq.protobuffer.OpenAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OpenAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OpenAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OpenAccountReply.displayName = 'proto.io.bisq.protobuffer.OpenAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.IsAppInitializedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.IsAppInitializedRequest.displayName = 'proto.io.bisq.protobuffer.IsAppInitializedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.IsAppInitializedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.IsAppInitializedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.IsAppInitializedReply.displayName = 'proto.io.bisq.protobuffer.IsAppInitializedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ChangePasswordRequest.displayName = 'proto.io.bisq.protobuffer.ChangePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ChangePasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ChangePasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ChangePasswordReply.displayName = 'proto.io.bisq.protobuffer.ChangePasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CloseAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CloseAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CloseAccountRequest.displayName = 'proto.io.bisq.protobuffer.CloseAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CloseAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CloseAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CloseAccountReply.displayName = 'proto.io.bisq.protobuffer.CloseAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.DeleteAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.DeleteAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.DeleteAccountRequest.displayName = 'proto.io.bisq.protobuffer.DeleteAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.DeleteAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.DeleteAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.DeleteAccountReply.displayName = 'proto.io.bisq.protobuffer.DeleteAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BackupAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BackupAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BackupAccountRequest.displayName = 'proto.io.bisq.protobuffer.BackupAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BackupAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BackupAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BackupAccountReply.displayName = 'proto.io.bisq.protobuffer.BackupAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RestoreAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RestoreAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RestoreAccountRequest.displayName = 'proto.io.bisq.protobuffer.RestoreAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RestoreAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RestoreAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RestoreAccountReply.displayName = 'proto.io.bisq.protobuffer.RestoreAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetDisputesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetDisputesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetDisputesRequest.displayName = 'proto.io.bisq.protobuffer.GetDisputesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetDisputesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetDisputesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetDisputesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetDisputesReply.displayName = 'proto.io.bisq.protobuffer.GetDisputesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetDisputeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetDisputeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetDisputeRequest.displayName = 'proto.io.bisq.protobuffer.GetDisputeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetDisputeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetDisputeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetDisputeReply.displayName = 'proto.io.bisq.protobuffer.GetDisputeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OpenDisputeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OpenDisputeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OpenDisputeRequest.displayName = 'proto.io.bisq.protobuffer.OpenDisputeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OpenDisputeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OpenDisputeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OpenDisputeReply.displayName = 'proto.io.bisq.protobuffer.OpenDisputeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ResolveDisputeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ResolveDisputeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ResolveDisputeReply.displayName = 'proto.io.bisq.protobuffer.ResolveDisputeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ResolveDisputeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ResolveDisputeRequest.displayName = 'proto.io.bisq.protobuffer.ResolveDisputeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendDisputeChatMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.displayName = 'proto.io.bisq.protobuffer.SendDisputeChatMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendDisputeChatMessageReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendDisputeChatMessageReply.displayName = 'proto.io.bisq.protobuffer.SendDisputeChatMessageReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterDisputeAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.displayName = 'proto.io.bisq.protobuffer.RegisterDisputeAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterDisputeAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.displayName = 'proto.io.bisq.protobuffer.RegisterDisputeAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.displayName = 'proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnregisterDisputeAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.displayName = 'proto.io.bisq.protobuffer.UnregisterDisputeAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterNotificationListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.displayName = 'proto.io.bisq.protobuffer.RegisterNotificationListenerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.NotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.NotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.NotificationMessage.displayName = 'proto.io.bisq.protobuffer.NotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendNotificationRequest.displayName = 'proto.io.bisq.protobuffer.SendNotificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendNotificationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendNotificationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendNotificationReply.displayName = 'proto.io.bisq.protobuffer.SendNotificationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UrlConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UrlConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UrlConnection.displayName = 'proto.io.bisq.protobuffer.UrlConnection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AddConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AddConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AddConnectionRequest.displayName = 'proto.io.bisq.protobuffer.AddConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AddConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AddConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AddConnectionReply.displayName = 'proto.io.bisq.protobuffer.AddConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveConnectionRequest.displayName = 'proto.io.bisq.protobuffer.RemoveConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveConnectionReply.displayName = 'proto.io.bisq.protobuffer.RemoveConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetConnectionRequest.displayName = 'proto.io.bisq.protobuffer.GetConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetConnectionReply.displayName = 'proto.io.bisq.protobuffer.GetConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetConnectionsRequest.displayName = 'proto.io.bisq.protobuffer.GetConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetConnectionsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetConnectionsReply.displayName = 'proto.io.bisq.protobuffer.GetConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetConnectionRequest.displayName = 'proto.io.bisq.protobuffer.SetConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetConnectionReply.displayName = 'proto.io.bisq.protobuffer.SetConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CheckConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CheckConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CheckConnectionRequest.displayName = 'proto.io.bisq.protobuffer.CheckConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CheckConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CheckConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CheckConnectionReply.displayName = 'proto.io.bisq.protobuffer.CheckConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CheckConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CheckConnectionsRequest.displayName = 'proto.io.bisq.protobuffer.CheckConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CheckConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.CheckConnectionsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.CheckConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CheckConnectionsReply.displayName = 'proto.io.bisq.protobuffer.CheckConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StartCheckingConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.displayName = 'proto.io.bisq.protobuffer.StartCheckingConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StartCheckingConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StartCheckingConnectionsReply.displayName = 'proto.io.bisq.protobuffer.StartCheckingConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopCheckingConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.displayName = 'proto.io.bisq.protobuffer.StopCheckingConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopCheckingConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopCheckingConnectionsReply.displayName = 'proto.io.bisq.protobuffer.StopCheckingConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.displayName = 'proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBestAvailableConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.displayName = 'proto.io.bisq.protobuffer.GetBestAvailableConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetAutoSwitchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetAutoSwitchRequest.displayName = 'proto.io.bisq.protobuffer.SetAutoSwitchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetAutoSwitchReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetAutoSwitchReply.displayName = 'proto.io.bisq.protobuffer.SetAutoSwitchReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.displayName = 'proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.displayName = 'proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.displayName = 'proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.displayName = 'proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StartMoneroNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StartMoneroNodeRequest.displayName = 'proto.io.bisq.protobuffer.StartMoneroNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StartMoneroNodeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StartMoneroNodeReply.displayName = 'proto.io.bisq.protobuffer.StartMoneroNodeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopMoneroNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopMoneroNodeRequest.displayName = 'proto.io.bisq.protobuffer.StopMoneroNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopMoneroNodeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopMoneroNodeReply.displayName = 'proto.io.bisq.protobuffer.StopMoneroNodeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferRequest.displayName = 'proto.io.bisq.protobuffer.GetOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferReply.displayName = 'proto.io.bisq.protobuffer.GetOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOfferRequest.displayName = 'proto.io.bisq.protobuffer.GetMyOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOfferReply.displayName = 'proto.io.bisq.protobuffer.GetMyOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOffersReply.displayName = 'proto.io.bisq.protobuffer.GetOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetMyOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetMyOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOffersReply.displayName = 'proto.io.bisq.protobuffer.GetMyOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.PostOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.PostOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.PostOfferRequest.displayName = 'proto.io.bisq.protobuffer.PostOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.PostOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.PostOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.PostOfferReply.displayName = 'proto.io.bisq.protobuffer.PostOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CancelOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CancelOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CancelOfferRequest.displayName = 'proto.io.bisq.protobuffer.CancelOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CancelOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CancelOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CancelOfferReply.displayName = 'proto.io.bisq.protobuffer.CancelOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OfferInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OfferInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OfferInfo.displayName = 'proto.io.bisq.protobuffer.OfferInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AvailabilityResultWithDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AvailabilityResultWithDescription.displayName = 'proto.io.bisq.protobuffer.AvailabilityResultWithDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreatePaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreatePaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreatePaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.displayName = 'proto.io.bisq.protobuffer.CreatePaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetPaymentAccountsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.displayName = 'proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.displayName = 'proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.displayName = 'proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ValidateFormFieldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ValidateFormFieldRequest.displayName = 'proto.io.bisq.protobuffer.ValidateFormFieldRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ValidateFormFieldReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ValidateFormFieldReply.displayName = 'proto.io.bisq.protobuffer.ValidateFormFieldReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceRequest.displayName = 'proto.io.bisq.protobuffer.MarketPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceReply.displayName = 'proto.io.bisq.protobuffer.MarketPriceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPricesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPricesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPricesRequest.displayName = 'proto.io.bisq.protobuffer.MarketPricesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPricesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.MarketPricesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPricesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPricesReply.displayName = 'proto.io.bisq.protobuffer.MarketPricesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceInfo.displayName = 'proto.io.bisq.protobuffer.MarketPriceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketDepthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketDepthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketDepthRequest.displayName = 'proto.io.bisq.protobuffer.MarketDepthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketDepthReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketDepthReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketDepthReply.displayName = 'proto.io.bisq.protobuffer.MarketDepthReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketDepthInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.MarketDepthInfo.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketDepthInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketDepthInfo.displayName = 'proto.io.bisq.protobuffer.MarketDepthInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeStatisticsRequest.displayName = 'proto.io.bisq.protobuffer.GetTradeStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetTradeStatisticsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeStatisticsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeStatisticsReply.displayName = 'proto.io.bisq.protobuffer.GetTradeStatisticsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopRequest.displayName = 'proto.io.bisq.protobuffer.StopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopReply.displayName = 'proto.io.bisq.protobuffer.StopReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TakeOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TakeOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TakeOfferRequest.displayName = 'proto.io.bisq.protobuffer.TakeOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TakeOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TakeOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TakeOfferReply.displayName = 'proto.io.bisq.protobuffer.TakeOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentSentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentSentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentSentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentSentReply.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentSentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeRequest.displayName = 'proto.io.bisq.protobuffer.GetTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeReply.displayName = 'proto.io.bisq.protobuffer.GetTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradesRequest.displayName = 'proto.io.bisq.protobuffer.GetTradesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetTradesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradesReply.displayName = 'proto.io.bisq.protobuffer.GetTradesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CompleteTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CompleteTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CompleteTradeRequest.displayName = 'proto.io.bisq.protobuffer.CompleteTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CompleteTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CompleteTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CompleteTradeReply.displayName = 'proto.io.bisq.protobuffer.CompleteTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.WithdrawFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.WithdrawFundsRequest.displayName = 'proto.io.bisq.protobuffer.WithdrawFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.WithdrawFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.WithdrawFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.WithdrawFundsReply.displayName = 'proto.io.bisq.protobuffer.WithdrawFundsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetChatMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetChatMessagesRequest.displayName = 'proto.io.bisq.protobuffer.GetChatMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetChatMessagesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetChatMessagesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetChatMessagesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetChatMessagesReply.displayName = 'proto.io.bisq.protobuffer.GetChatMessagesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendChatMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendChatMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendChatMessageRequest.displayName = 'proto.io.bisq.protobuffer.SendChatMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendChatMessageReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendChatMessageReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendChatMessageReply.displayName = 'proto.io.bisq.protobuffer.SendChatMessageReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TradeInfo.displayName = 'proto.io.bisq.protobuffer.TradeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ContractInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ContractInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ContractInfo.displayName = 'proto.io.bisq.protobuffer.ContractInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBalancesRequest.displayName = 'proto.io.bisq.protobuffer.GetBalancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBalancesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBalancesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBalancesReply.displayName = 'proto.io.bisq.protobuffer.GetBalancesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrSeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrSeedRequest.displayName = 'proto.io.bisq.protobuffer.GetXmrSeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrSeedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrSeedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrSeedReply.displayName = 'proto.io.bisq.protobuffer.GetXmrSeedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.displayName = 'proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.displayName = 'proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.displayName = 'proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrNewSubaddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.displayName = 'proto.io.bisq.protobuffer.GetXmrNewSubaddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrTxsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrTxsRequest.displayName = 'proto.io.bisq.protobuffer.GetXmrTxsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetXmrTxsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetXmrTxsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetXmrTxsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetXmrTxsReply.displayName = 'proto.io.bisq.protobuffer.GetXmrTxsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.XmrTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.XmrTx.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.XmrTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.XmrTx.displayName = 'proto.io.bisq.protobuffer.XmrTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.XmrDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.XmrDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.XmrDestination.displayName = 'proto.io.bisq.protobuffer.XmrDestination';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.XmrIncomingTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.XmrIncomingTransfer.displayName = 'proto.io.bisq.protobuffer.XmrIncomingTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.XmrOutgoingTransfer.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.XmrOutgoingTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.XmrOutgoingTransfer.displayName = 'proto.io.bisq.protobuffer.XmrOutgoingTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.CreateXmrTxRequest.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateXmrTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateXmrTxRequest.displayName = 'proto.io.bisq.protobuffer.CreateXmrTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateXmrTxReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateXmrTxReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateXmrTxReply.displayName = 'proto.io.bisq.protobuffer.CreateXmrTxReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RelayXmrTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RelayXmrTxRequest.displayName = 'proto.io.bisq.protobuffer.RelayXmrTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RelayXmrTxReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RelayXmrTxReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RelayXmrTxReply.displayName = 'proto.io.bisq.protobuffer.RelayXmrTxReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAddressBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAddressBalanceRequest.displayName = 'proto.io.bisq.protobuffer.GetAddressBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAddressBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAddressBalanceReply.displayName = 'proto.io.bisq.protobuffer.GetAddressBalanceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBtcRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBtcRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBtcRequest.displayName = 'proto.io.bisq.protobuffer.SendBtcRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetFundingAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetFundingAddressesRequest.displayName = 'proto.io.bisq.protobuffer.GetFundingAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetFundingAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetFundingAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetFundingAddressesReply.displayName = 'proto.io.bisq.protobuffer.GetFundingAddressesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetWalletPasswordRequest.displayName = 'proto.io.bisq.protobuffer.SetWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetWalletPasswordReply.displayName = 'proto.io.bisq.protobuffer.SetWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.displayName = 'proto.io.bisq.protobuffer.RemoveWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.displayName = 'proto.io.bisq.protobuffer.RemoveWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.LockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.LockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.LockWalletRequest.displayName = 'proto.io.bisq.protobuffer.LockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.LockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.LockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.LockWalletReply.displayName = 'proto.io.bisq.protobuffer.LockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnlockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnlockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnlockWalletRequest.displayName = 'proto.io.bisq.protobuffer.UnlockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnlockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnlockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnlockWalletReply.displayName = 'proto.io.bisq.protobuffer.UnlockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BalancesInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BalancesInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BalancesInfo.displayName = 'proto.io.bisq.protobuffer.BalancesInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BtcBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BtcBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BtcBalanceInfo.displayName = 'proto.io.bisq.protobuffer.BtcBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.XmrBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.XmrBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.XmrBalanceInfo.displayName = 'proto.io.bisq.protobuffer.XmrBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AddressBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AddressBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AddressBalanceInfo.displayName = 'proto.io.bisq.protobuffer.AddressBalanceInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMethodHelpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMethodHelpRequest;
  return proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_name = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMethodHelpReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodHelp: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMethodHelpReply;
  return proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodHelp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMethodHelpReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodHelp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_help = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.getMethodHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.setMethodHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetVersionRequest}
 */
proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetVersionRequest;
  return proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetVersionRequest}
 */
proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetVersionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetVersionReply}
 */
proto.io.bisq.protobuffer.GetVersionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetVersionReply;
  return proto.io.bisq.protobuffer.GetVersionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetVersionReply}
 */
proto.io.bisq.protobuffer.GetVersionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetVersionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetVersionReply} returns this
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AccountExistsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AccountExistsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AccountExistsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AccountExistsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AccountExistsRequest}
 */
proto.io.bisq.protobuffer.AccountExistsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AccountExistsRequest;
  return proto.io.bisq.protobuffer.AccountExistsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AccountExistsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AccountExistsRequest}
 */
proto.io.bisq.protobuffer.AccountExistsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AccountExistsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AccountExistsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AccountExistsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AccountExistsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AccountExistsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AccountExistsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AccountExistsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AccountExistsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountExists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AccountExistsReply}
 */
proto.io.bisq.protobuffer.AccountExistsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AccountExistsReply;
  return proto.io.bisq.protobuffer.AccountExistsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AccountExistsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AccountExistsReply}
 */
proto.io.bisq.protobuffer.AccountExistsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AccountExistsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AccountExistsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AccountExistsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AccountExistsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool account_exists = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.AccountExistsReply.prototype.getAccountExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.AccountExistsReply} returns this
 */
proto.io.bisq.protobuffer.AccountExistsReply.prototype.setAccountExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.IsAccountOpenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.IsAccountOpenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.IsAccountOpenRequest}
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.IsAccountOpenRequest;
  return proto.io.bisq.protobuffer.IsAccountOpenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.IsAccountOpenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.IsAccountOpenRequest}
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.IsAccountOpenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.IsAccountOpenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAccountOpenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.IsAccountOpenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.IsAccountOpenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAccountOpen: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.IsAccountOpenReply}
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.IsAccountOpenReply;
  return proto.io.bisq.protobuffer.IsAccountOpenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.IsAccountOpenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.IsAccountOpenReply}
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAccountOpen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.IsAccountOpenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.IsAccountOpenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAccountOpen();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_account_open = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.prototype.getIsAccountOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.IsAccountOpenReply} returns this
 */
proto.io.bisq.protobuffer.IsAccountOpenReply.prototype.setIsAccountOpen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateAccountRequest}
 */
proto.io.bisq.protobuffer.CreateAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateAccountRequest;
  return proto.io.bisq.protobuffer.CreateAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateAccountRequest}
 */
proto.io.bisq.protobuffer.CreateAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateAccountReply}
 */
proto.io.bisq.protobuffer.CreateAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateAccountReply;
  return proto.io.bisq.protobuffer.CreateAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateAccountReply}
 */
proto.io.bisq.protobuffer.CreateAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OpenAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OpenAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OpenAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OpenAccountRequest}
 */
proto.io.bisq.protobuffer.OpenAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OpenAccountRequest;
  return proto.io.bisq.protobuffer.OpenAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OpenAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OpenAccountRequest}
 */
proto.io.bisq.protobuffer.OpenAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OpenAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OpenAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OpenAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.OpenAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OpenAccountRequest} returns this
 */
proto.io.bisq.protobuffer.OpenAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OpenAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OpenAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OpenAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OpenAccountReply}
 */
proto.io.bisq.protobuffer.OpenAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OpenAccountReply;
  return proto.io.bisq.protobuffer.OpenAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OpenAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OpenAccountReply}
 */
proto.io.bisq.protobuffer.OpenAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OpenAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OpenAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OpenAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.IsAppInitializedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.IsAppInitializedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.IsAppInitializedRequest}
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.IsAppInitializedRequest;
  return proto.io.bisq.protobuffer.IsAppInitializedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.IsAppInitializedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.IsAppInitializedRequest}
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.IsAppInitializedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.IsAppInitializedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAppInitializedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.IsAppInitializedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.IsAppInitializedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAppInitialized: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.IsAppInitializedReply}
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.IsAppInitializedReply;
  return proto.io.bisq.protobuffer.IsAppInitializedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.IsAppInitializedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.IsAppInitializedReply}
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAppInitialized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.IsAppInitializedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.IsAppInitializedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAppInitialized();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_app_initialized = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.prototype.getIsAppInitialized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.IsAppInitializedReply} returns this
 */
proto.io.bisq.protobuffer.IsAppInitializedReply.prototype.setIsAppInitialized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ChangePasswordRequest}
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ChangePasswordRequest;
  return proto.io.bisq.protobuffer.ChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ChangePasswordRequest}
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ChangePasswordRequest} returns this
 */
proto.io.bisq.protobuffer.ChangePasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ChangePasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ChangePasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ChangePasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ChangePasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ChangePasswordReply}
 */
proto.io.bisq.protobuffer.ChangePasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ChangePasswordReply;
  return proto.io.bisq.protobuffer.ChangePasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ChangePasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ChangePasswordReply}
 */
proto.io.bisq.protobuffer.ChangePasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ChangePasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ChangePasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ChangePasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ChangePasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CloseAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CloseAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CloseAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CloseAccountRequest}
 */
proto.io.bisq.protobuffer.CloseAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CloseAccountRequest;
  return proto.io.bisq.protobuffer.CloseAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CloseAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CloseAccountRequest}
 */
proto.io.bisq.protobuffer.CloseAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CloseAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CloseAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CloseAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CloseAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CloseAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CloseAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CloseAccountReply}
 */
proto.io.bisq.protobuffer.CloseAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CloseAccountReply;
  return proto.io.bisq.protobuffer.CloseAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CloseAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CloseAccountReply}
 */
proto.io.bisq.protobuffer.CloseAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CloseAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CloseAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CloseAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CloseAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.DeleteAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.DeleteAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.DeleteAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.DeleteAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.DeleteAccountRequest}
 */
proto.io.bisq.protobuffer.DeleteAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.DeleteAccountRequest;
  return proto.io.bisq.protobuffer.DeleteAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.DeleteAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.DeleteAccountRequest}
 */
proto.io.bisq.protobuffer.DeleteAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.DeleteAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.DeleteAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.DeleteAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.DeleteAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.DeleteAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.DeleteAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.DeleteAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.DeleteAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.DeleteAccountReply}
 */
proto.io.bisq.protobuffer.DeleteAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.DeleteAccountReply;
  return proto.io.bisq.protobuffer.DeleteAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.DeleteAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.DeleteAccountReply}
 */
proto.io.bisq.protobuffer.DeleteAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.DeleteAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.DeleteAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.DeleteAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.DeleteAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BackupAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BackupAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BackupAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BackupAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BackupAccountRequest}
 */
proto.io.bisq.protobuffer.BackupAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BackupAccountRequest;
  return proto.io.bisq.protobuffer.BackupAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BackupAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BackupAccountRequest}
 */
proto.io.bisq.protobuffer.BackupAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BackupAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BackupAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BackupAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BackupAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BackupAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BackupAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BackupAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BackupAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipBytes: msg.getZipBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BackupAccountReply}
 */
proto.io.bisq.protobuffer.BackupAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BackupAccountReply;
  return proto.io.bisq.protobuffer.BackupAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BackupAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BackupAccountReply}
 */
proto.io.bisq.protobuffer.BackupAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setZipBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BackupAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BackupAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BackupAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BackupAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes zip_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.io.bisq.protobuffer.BackupAccountReply.prototype.getZipBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes zip_bytes = 1;
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {string}
 */
proto.io.bisq.protobuffer.BackupAccountReply.prototype.getZipBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getZipBytes()));
};


/**
 * optional bytes zip_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BackupAccountReply.prototype.getZipBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getZipBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.io.bisq.protobuffer.BackupAccountReply} returns this
 */
proto.io.bisq.protobuffer.BackupAccountReply.prototype.setZipBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RestoreAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RestoreAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipBytes: msg.getZipBytes_asB64(),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalLength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasMore: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RestoreAccountRequest}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RestoreAccountRequest;
  return proto.io.bisq.protobuffer.RestoreAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RestoreAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RestoreAccountRequest}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setZipBytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalLength(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasMore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RestoreAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RestoreAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalLength();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getHasMore();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bytes zip_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.getZipBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes zip_bytes = 1;
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {string}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.getZipBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getZipBytes()));
};


/**
 * optional bytes zip_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.getZipBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getZipBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.io.bisq.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.setZipBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_length = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.getTotalLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.setTotalLength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool has_more = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.getHasMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.bisq.protobuffer.RestoreAccountRequest.prototype.setHasMore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RestoreAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RestoreAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RestoreAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RestoreAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RestoreAccountReply}
 */
proto.io.bisq.protobuffer.RestoreAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RestoreAccountReply;
  return proto.io.bisq.protobuffer.RestoreAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RestoreAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RestoreAccountReply}
 */
proto.io.bisq.protobuffer.RestoreAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RestoreAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RestoreAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RestoreAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RestoreAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetDisputesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetDisputesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetDisputesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetDisputesRequest}
 */
proto.io.bisq.protobuffer.GetDisputesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetDisputesRequest;
  return proto.io.bisq.protobuffer.GetDisputesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetDisputesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetDisputesRequest}
 */
proto.io.bisq.protobuffer.GetDisputesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetDisputesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetDisputesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetDisputesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetDisputesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetDisputesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetDisputesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetDisputesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputesList: jspb.Message.toObjectList(msg.getDisputesList(),
    pb_pb.Dispute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetDisputesReply}
 */
proto.io.bisq.protobuffer.GetDisputesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetDisputesReply;
  return proto.io.bisq.protobuffer.GetDisputesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetDisputesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetDisputesReply}
 */
proto.io.bisq.protobuffer.GetDisputesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.Dispute;
      reader.readMessage(value,pb_pb.Dispute.deserializeBinaryFromReader);
      msg.addDisputes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetDisputesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetDisputesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetDisputesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.Dispute.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dispute disputes = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.Dispute>}
 */
proto.io.bisq.protobuffer.GetDisputesReply.prototype.getDisputesList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.Dispute>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.Dispute, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.Dispute>} value
 * @return {!proto.io.bisq.protobuffer.GetDisputesReply} returns this
*/
proto.io.bisq.protobuffer.GetDisputesReply.prototype.setDisputesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.Dispute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.Dispute}
 */
proto.io.bisq.protobuffer.GetDisputesReply.prototype.addDisputes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.Dispute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetDisputesReply} returns this
 */
proto.io.bisq.protobuffer.GetDisputesReply.prototype.clearDisputesList = function() {
  return this.setDisputesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetDisputeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetDisputeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetDisputeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetDisputeRequest}
 */
proto.io.bisq.protobuffer.GetDisputeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetDisputeRequest;
  return proto.io.bisq.protobuffer.GetDisputeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetDisputeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetDisputeRequest}
 */
proto.io.bisq.protobuffer.GetDisputeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetDisputeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetDisputeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetDisputeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetDisputeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.GetDisputeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetDisputeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetDisputeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetDisputeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    dispute: (f = msg.getDispute()) && pb_pb.Dispute.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetDisputeReply}
 */
proto.io.bisq.protobuffer.GetDisputeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetDisputeReply;
  return proto.io.bisq.protobuffer.GetDisputeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetDisputeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetDisputeReply}
 */
proto.io.bisq.protobuffer.GetDisputeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.Dispute;
      reader.readMessage(value,pb_pb.Dispute.deserializeBinaryFromReader);
      msg.setDispute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetDisputeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetDisputeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetDisputeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetDisputeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.Dispute.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dispute dispute = 1;
 * @return {?proto.io.bisq.protobuffer.Dispute}
 */
proto.io.bisq.protobuffer.GetDisputeReply.prototype.getDispute = function() {
  return /** @type{?proto.io.bisq.protobuffer.Dispute} */ (
    jspb.Message.getWrapperField(this, pb_pb.Dispute, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.Dispute|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetDisputeReply} returns this
*/
proto.io.bisq.protobuffer.GetDisputeReply.prototype.setDispute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetDisputeReply} returns this
 */
proto.io.bisq.protobuffer.GetDisputeReply.prototype.clearDispute = function() {
  return this.setDispute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetDisputeReply.prototype.hasDispute = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OpenDisputeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OpenDisputeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OpenDisputeRequest}
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OpenDisputeRequest;
  return proto.io.bisq.protobuffer.OpenDisputeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OpenDisputeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OpenDisputeRequest}
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OpenDisputeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OpenDisputeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OpenDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.OpenDisputeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OpenDisputeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OpenDisputeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OpenDisputeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenDisputeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OpenDisputeReply}
 */
proto.io.bisq.protobuffer.OpenDisputeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OpenDisputeReply;
  return proto.io.bisq.protobuffer.OpenDisputeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OpenDisputeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OpenDisputeReply}
 */
proto.io.bisq.protobuffer.OpenDisputeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OpenDisputeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OpenDisputeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OpenDisputeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OpenDisputeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ResolveDisputeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ResolveDisputeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ResolveDisputeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ResolveDisputeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeReply}
 */
proto.io.bisq.protobuffer.ResolveDisputeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ResolveDisputeReply;
  return proto.io.bisq.protobuffer.ResolveDisputeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ResolveDisputeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeReply}
 */
proto.io.bisq.protobuffer.ResolveDisputeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ResolveDisputeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ResolveDisputeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ResolveDisputeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ResolveDisputeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ResolveDisputeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ResolveDisputeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    winner: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, 0),
    summaryNotes: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customPayoutAmount: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ResolveDisputeRequest;
  return proto.io.bisq.protobuffer.ResolveDisputeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ResolveDisputeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {!proto.io.bisq.protobuffer.DisputeResult.Winner} */ (reader.readEnum());
      msg.setWinner(value);
      break;
    case 3:
      var value = /** @type {!proto.io.bisq.protobuffer.DisputeResult.Reason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummaryNotes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCustomPayoutAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ResolveDisputeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ResolveDisputeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWinner();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSummaryNotes();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomPayoutAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DisputeResult.Winner winner = 2;
 * @return {!proto.io.bisq.protobuffer.DisputeResult.Winner}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.getWinner = function() {
  return /** @type {!proto.io.bisq.protobuffer.DisputeResult.Winner} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.DisputeResult.Winner} value
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.setWinner = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional DisputeResult.Reason reason = 3;
 * @return {!proto.io.bisq.protobuffer.DisputeResult.Reason}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.getReason = function() {
  return /** @type {!proto.io.bisq.protobuffer.DisputeResult.Reason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.DisputeResult.Reason} value
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string summary_notes = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.getSummaryNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.setSummaryNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 custom_payout_amount = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.getCustomPayoutAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.bisq.protobuffer.ResolveDisputeRequest.prototype.setCustomPayoutAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    pb_pb.Attachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendDisputeChatMessageRequest;
  return proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new pb_pb.Attachment;
      reader.readMessage(value,pb_pb.Attachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      pb_pb.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string dispute_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.getDisputeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} returns this
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.setDisputeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} returns this
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Attachment attachments = 3;
 * @return {!Array<!proto.io.bisq.protobuffer.Attachment>}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.Attachment, 3));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.Attachment>} value
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} returns this
*/
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.Attachment}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.io.bisq.protobuffer.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageRequest} returns this
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendDisputeChatMessageReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendDisputeChatMessageReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageReply}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendDisputeChatMessageReply;
  return proto.io.bisq.protobuffer.SendDisputeChatMessageReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendDisputeChatMessageReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendDisputeChatMessageReply}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendDisputeChatMessageReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendDisputeChatMessageReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendDisputeChatMessageReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeAgentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    registrationKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterDisputeAgentRequest;
  return proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeAgentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeAgentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrationKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string dispute_agent_type = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getDisputeAgentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setDisputeAgentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registration_key = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getRegistrationKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setRegistrationKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterDisputeAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterDisputeAgentReply;
  return proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeAgentType: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest;
  return proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeAgentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeAgentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string dispute_agent_type = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.prototype.getDisputeAgentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentRequest.prototype.setDisputeAgentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnregisterDisputeAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnregisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnregisterDisputeAgentReply;
  return proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnregisterDisputeAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnregisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnregisterDisputeAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnregisterDisputeAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterNotificationListenerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterNotificationListenerRequest}
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterNotificationListenerRequest;
  return proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterNotificationListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterNotificationListenerRequest}
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterNotificationListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterNotificationListenerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.NotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.NotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.NotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f),
    chatMessage: (f = msg.getChatMessage()) && pb_pb.ChatMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.NotificationMessage}
 */
proto.io.bisq.protobuffer.NotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.NotificationMessage;
  return proto.io.bisq.protobuffer.NotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.NotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.NotificationMessage}
 */
proto.io.bisq.protobuffer.NotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.io.bisq.protobuffer.NotificationMessage.NotificationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 7:
      var value = new pb_pb.ChatMessage;
      reader.readMessage(value,pb_pb.ChatMessage.deserializeBinaryFromReader);
      msg.setChatMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.NotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.NotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.NotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getChatMessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      pb_pb.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.NotificationMessage.NotificationType = {
  ERROR: 0,
  APP_INITIALIZED: 1,
  KEEP_ALIVE: 2,
  TRADE_UPDATE: 3,
  CHAT_MESSAGE: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NotificationType type = 2;
 * @return {!proto.io.bisq.protobuffer.NotificationMessage.NotificationType}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getType = function() {
  return /** @type {!proto.io.bisq.protobuffer.NotificationMessage.NotificationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.NotificationMessage.NotificationType} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional TradeInfo trade = 6;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 6));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
*/
proto.io.bisq.protobuffer.NotificationMessage.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ChatMessage chat_message = 7;
 * @return {?proto.io.bisq.protobuffer.ChatMessage}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.getChatMessage = function() {
  return /** @type{?proto.io.bisq.protobuffer.ChatMessage} */ (
    jspb.Message.getWrapperField(this, pb_pb.ChatMessage, 7));
};


/**
 * @param {?proto.io.bisq.protobuffer.ChatMessage|undefined} value
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
*/
proto.io.bisq.protobuffer.NotificationMessage.prototype.setChatMessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.NotificationMessage} returns this
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.clearChatMessage = function() {
  return this.setChatMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.NotificationMessage.prototype.hasChatMessage = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notification: (f = msg.getNotification()) && proto.io.bisq.protobuffer.NotificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendNotificationRequest}
 */
proto.io.bisq.protobuffer.SendNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendNotificationRequest;
  return proto.io.bisq.protobuffer.SendNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendNotificationRequest}
 */
proto.io.bisq.protobuffer.SendNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.NotificationMessage;
      reader.readMessage(value,proto.io.bisq.protobuffer.NotificationMessage.deserializeBinaryFromReader);
      msg.setNotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.NotificationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NotificationMessage notification = 1;
 * @return {?proto.io.bisq.protobuffer.NotificationMessage}
 */
proto.io.bisq.protobuffer.SendNotificationRequest.prototype.getNotification = function() {
  return /** @type{?proto.io.bisq.protobuffer.NotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.NotificationMessage, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.NotificationMessage|undefined} value
 * @return {!proto.io.bisq.protobuffer.SendNotificationRequest} returns this
*/
proto.io.bisq.protobuffer.SendNotificationRequest.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SendNotificationRequest} returns this
 */
proto.io.bisq.protobuffer.SendNotificationRequest.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SendNotificationRequest.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendNotificationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendNotificationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendNotificationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendNotificationReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendNotificationReply}
 */
proto.io.bisq.protobuffer.SendNotificationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendNotificationReply;
  return proto.io.bisq.protobuffer.SendNotificationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendNotificationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendNotificationReply}
 */
proto.io.bisq.protobuffer.SendNotificationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendNotificationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendNotificationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendNotificationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendNotificationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UrlConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UrlConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UrlConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 4, 0),
    onlineStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    authenticationStatus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.UrlConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UrlConnection;
  return proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UrlConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 5:
      var value = /** @type {!proto.io.bisq.protobuffer.UrlConnection.OnlineStatus} */ (reader.readEnum());
      msg.setOnlineStatus(value);
      break;
    case 6:
      var value = /** @type {!proto.io.bisq.protobuffer.UrlConnection.AuthenticationStatus} */ (reader.readEnum());
      msg.setAuthenticationStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UrlConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOnlineStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAuthenticationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.UrlConnection.OnlineStatus = {
  UNKNOWN: 0,
  ONLINE: 1,
  OFFLINE: 2
};

/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.UrlConnection.AuthenticationStatus = {
  NO_AUTHENTICATION: 0,
  AUTHENTICATED: 1,
  NOT_AUTHENTICATED: 2
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UrlConnection} returns this
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UrlConnection} returns this
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UrlConnection} returns this
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 priority = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.UrlConnection} returns this
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional OnlineStatus online_status = 5;
 * @return {!proto.io.bisq.protobuffer.UrlConnection.OnlineStatus}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.getOnlineStatus = function() {
  return /** @type {!proto.io.bisq.protobuffer.UrlConnection.OnlineStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.UrlConnection.OnlineStatus} value
 * @return {!proto.io.bisq.protobuffer.UrlConnection} returns this
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.setOnlineStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional AuthenticationStatus authentication_status = 6;
 * @return {!proto.io.bisq.protobuffer.UrlConnection.AuthenticationStatus}
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.getAuthenticationStatus = function() {
  return /** @type {!proto.io.bisq.protobuffer.UrlConnection.AuthenticationStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.UrlConnection.AuthenticationStatus} value
 * @return {!proto.io.bisq.protobuffer.UrlConnection} returns this
 */
proto.io.bisq.protobuffer.UrlConnection.prototype.setAuthenticationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AddConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AddConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AddConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.bisq.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AddConnectionRequest}
 */
proto.io.bisq.protobuffer.AddConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AddConnectionRequest;
  return proto.io.bisq.protobuffer.AddConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AddConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AddConnectionRequest}
 */
proto.io.bisq.protobuffer.AddConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AddConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AddConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AddConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.AddConnectionRequest.prototype.getConnection = function() {
  return /** @type{?proto.io.bisq.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.bisq.protobuffer.AddConnectionRequest} returns this
*/
proto.io.bisq.protobuffer.AddConnectionRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.AddConnectionRequest} returns this
 */
proto.io.bisq.protobuffer.AddConnectionRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.AddConnectionRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AddConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AddConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AddConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AddConnectionReply}
 */
proto.io.bisq.protobuffer.AddConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AddConnectionReply;
  return proto.io.bisq.protobuffer.AddConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AddConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AddConnectionReply}
 */
proto.io.bisq.protobuffer.AddConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AddConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AddConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AddConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveConnectionRequest}
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveConnectionRequest;
  return proto.io.bisq.protobuffer.RemoveConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveConnectionRequest}
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RemoveConnectionRequest} returns this
 */
proto.io.bisq.protobuffer.RemoveConnectionRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveConnectionReply}
 */
proto.io.bisq.protobuffer.RemoveConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveConnectionReply;
  return proto.io.bisq.protobuffer.RemoveConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveConnectionReply}
 */
proto.io.bisq.protobuffer.RemoveConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetConnectionRequest}
 */
proto.io.bisq.protobuffer.GetConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetConnectionRequest;
  return proto.io.bisq.protobuffer.GetConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetConnectionRequest}
 */
proto.io.bisq.protobuffer.GetConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.bisq.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetConnectionReply}
 */
proto.io.bisq.protobuffer.GetConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetConnectionReply;
  return proto.io.bisq.protobuffer.GetConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetConnectionReply}
 */
proto.io.bisq.protobuffer.GetConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.GetConnectionReply.prototype.getConnection = function() {
  return /** @type{?proto.io.bisq.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetConnectionReply} returns this
*/
proto.io.bisq.protobuffer.GetConnectionReply.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetConnectionReply} returns this
 */
proto.io.bisq.protobuffer.GetConnectionReply.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetConnectionReply.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetConnectionsRequest}
 */
proto.io.bisq.protobuffer.GetConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetConnectionsRequest;
  return proto.io.bisq.protobuffer.GetConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetConnectionsRequest}
 */
proto.io.bisq.protobuffer.GetConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetConnectionsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    proto.io.bisq.protobuffer.UrlConnection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetConnectionsReply}
 */
proto.io.bisq.protobuffer.GetConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetConnectionsReply;
  return proto.io.bisq.protobuffer.GetConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetConnectionsReply}
 */
proto.io.bisq.protobuffer.GetConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UrlConnection connections = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.UrlConnection>}
 */
proto.io.bisq.protobuffer.GetConnectionsReply.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.UrlConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.UrlConnection>} value
 * @return {!proto.io.bisq.protobuffer.GetConnectionsReply} returns this
*/
proto.io.bisq.protobuffer.GetConnectionsReply.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.UrlConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.GetConnectionsReply.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.UrlConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetConnectionsReply} returns this
 */
proto.io.bisq.protobuffer.GetConnectionsReply.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connection: (f = msg.getConnection()) && proto.io.bisq.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetConnectionRequest}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetConnectionRequest;
  return proto.io.bisq.protobuffer.SetConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetConnectionRequest}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetConnectionRequest} returns this
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UrlConnection connection = 2;
 * @return {?proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.getConnection = function() {
  return /** @type{?proto.io.bisq.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.bisq.protobuffer.SetConnectionRequest} returns this
*/
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SetConnectionRequest} returns this
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SetConnectionRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetConnectionReply}
 */
proto.io.bisq.protobuffer.SetConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetConnectionReply;
  return proto.io.bisq.protobuffer.SetConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetConnectionReply}
 */
proto.io.bisq.protobuffer.SetConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CheckConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CheckConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CheckConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionRequest}
 */
proto.io.bisq.protobuffer.CheckConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CheckConnectionRequest;
  return proto.io.bisq.protobuffer.CheckConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionRequest}
 */
proto.io.bisq.protobuffer.CheckConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CheckConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CheckConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CheckConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CheckConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CheckConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.bisq.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionReply}
 */
proto.io.bisq.protobuffer.CheckConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CheckConnectionReply;
  return proto.io.bisq.protobuffer.CheckConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionReply}
 */
proto.io.bisq.protobuffer.CheckConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CheckConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CheckConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.CheckConnectionReply.prototype.getConnection = function() {
  return /** @type{?proto.io.bisq.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.bisq.protobuffer.CheckConnectionReply} returns this
*/
proto.io.bisq.protobuffer.CheckConnectionReply.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionReply} returns this
 */
proto.io.bisq.protobuffer.CheckConnectionReply.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CheckConnectionReply.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CheckConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CheckConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionsRequest}
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CheckConnectionsRequest;
  return proto.io.bisq.protobuffer.CheckConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionsRequest}
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CheckConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CheckConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CheckConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    proto.io.bisq.protobuffer.UrlConnection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionsReply}
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CheckConnectionsReply;
  return proto.io.bisq.protobuffer.CheckConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionsReply}
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CheckConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CheckConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UrlConnection connections = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.UrlConnection>}
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.UrlConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.UrlConnection>} value
 * @return {!proto.io.bisq.protobuffer.CheckConnectionsReply} returns this
*/
proto.io.bisq.protobuffer.CheckConnectionsReply.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.UrlConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.UrlConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.CheckConnectionsReply} returns this
 */
proto.io.bisq.protobuffer.CheckConnectionsReply.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StartCheckingConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refreshPeriod: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StartCheckingConnectionsRequest}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StartCheckingConnectionsRequest;
  return proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StartCheckingConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StartCheckingConnectionsRequest}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefreshPeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StartCheckingConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshPeriod();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 refresh_period = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.prototype.getRefreshPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.StartCheckingConnectionsRequest} returns this
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsRequest.prototype.setRefreshPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StartCheckingConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StartCheckingConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StartCheckingConnectionsReply}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StartCheckingConnectionsReply;
  return proto.io.bisq.protobuffer.StartCheckingConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StartCheckingConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StartCheckingConnectionsReply}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StartCheckingConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StartCheckingConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartCheckingConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopCheckingConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopCheckingConnectionsRequest}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopCheckingConnectionsRequest;
  return proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopCheckingConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopCheckingConnectionsRequest}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopCheckingConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopCheckingConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopCheckingConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopCheckingConnectionsReply}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopCheckingConnectionsReply;
  return proto.io.bisq.protobuffer.StopCheckingConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopCheckingConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopCheckingConnectionsReply}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopCheckingConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopCheckingConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopCheckingConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest;
  return proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.bisq.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBestAvailableConnectionReply;
  return proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.bisq.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.bisq.protobuffer.UrlConnection}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.prototype.getConnection = function() {
  return /** @type{?proto.io.bisq.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply} returns this
*/
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetBestAvailableConnectionReply} returns this
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetBestAvailableConnectionReply.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetAutoSwitchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetAutoSwitchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetAutoSwitchRequest}
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetAutoSwitchRequest;
  return proto.io.bisq.protobuffer.SetAutoSwitchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetAutoSwitchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetAutoSwitchRequest}
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoSwitch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetAutoSwitchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetAutoSwitchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoSwitch();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool auto_switch = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.prototype.getAutoSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.SetAutoSwitchRequest} returns this
 */
proto.io.bisq.protobuffer.SetAutoSwitchRequest.prototype.setAutoSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetAutoSwitchReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetAutoSwitchReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetAutoSwitchReply}
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetAutoSwitchReply;
  return proto.io.bisq.protobuffer.SetAutoSwitchReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetAutoSwitchReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetAutoSwitchReply}
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetAutoSwitchReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetAutoSwitchReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetAutoSwitchReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest;
  return proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isRunning: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply;
  return proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRunning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsRunning();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_running = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.prototype.getIsRunning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply} returns this
 */
proto.io.bisq.protobuffer.IsMoneroNodeOnlineReply.prototype.setIsRunning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest;
  return proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    settings: (f = msg.getSettings()) && pb_pb.MoneroNodeSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply;
  return proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.MoneroNodeSettings;
      reader.readMessage(value,pb_pb.MoneroNodeSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.MoneroNodeSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneroNodeSettings settings = 1;
 * @return {?proto.io.bisq.protobuffer.MoneroNodeSettings}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.prototype.getSettings = function() {
  return /** @type{?proto.io.bisq.protobuffer.MoneroNodeSettings} */ (
    jspb.Message.getWrapperField(this, pb_pb.MoneroNodeSettings, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.MoneroNodeSettings|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply} returns this
*/
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply} returns this
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetMoneroNodeSettingsReply.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StartMoneroNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StartMoneroNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    settings: (f = msg.getSettings()) && pb_pb.MoneroNodeSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StartMoneroNodeRequest}
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StartMoneroNodeRequest;
  return proto.io.bisq.protobuffer.StartMoneroNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StartMoneroNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StartMoneroNodeRequest}
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.MoneroNodeSettings;
      reader.readMessage(value,pb_pb.MoneroNodeSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StartMoneroNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StartMoneroNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.MoneroNodeSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneroNodeSettings settings = 1;
 * @return {?proto.io.bisq.protobuffer.MoneroNodeSettings}
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.prototype.getSettings = function() {
  return /** @type{?proto.io.bisq.protobuffer.MoneroNodeSettings} */ (
    jspb.Message.getWrapperField(this, pb_pb.MoneroNodeSettings, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.MoneroNodeSettings|undefined} value
 * @return {!proto.io.bisq.protobuffer.StartMoneroNodeRequest} returns this
*/
proto.io.bisq.protobuffer.StartMoneroNodeRequest.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.StartMoneroNodeRequest} returns this
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.StartMoneroNodeRequest.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StartMoneroNodeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StartMoneroNodeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StartMoneroNodeReply}
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StartMoneroNodeReply;
  return proto.io.bisq.protobuffer.StartMoneroNodeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StartMoneroNodeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StartMoneroNodeReply}
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StartMoneroNodeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StartMoneroNodeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StartMoneroNodeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopMoneroNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopMoneroNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopMoneroNodeRequest}
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopMoneroNodeRequest;
  return proto.io.bisq.protobuffer.StopMoneroNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopMoneroNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopMoneroNodeRequest}
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopMoneroNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopMoneroNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopMoneroNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopMoneroNodeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopMoneroNodeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopMoneroNodeReply}
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopMoneroNodeReply;
  return proto.io.bisq.protobuffer.StopMoneroNodeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopMoneroNodeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopMoneroNodeReply}
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopMoneroNodeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopMoneroNodeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopMoneroNodeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest}
 */
proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferRequest;
  return proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest}
 */
proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest} returns this
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply}
 */
proto.io.bisq.protobuffer.GetOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferReply;
  return proto.io.bisq.protobuffer.GetOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply}
 */
proto.io.bisq.protobuffer.GetOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOfferRequest;
  return proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOfferReply;
  return proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest}
 */
proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOffersRequest;
  return proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest}
 */
proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply}
 */
proto.io.bisq.protobuffer.GetOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOffersReply;
  return proto.io.bisq.protobuffer.GetOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply}
 */
proto.io.bisq.protobuffer.GetOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOffersRequest;
  return proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetMyOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOffersReply;
  return proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.PostOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.PostOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PostOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    buyerSecurityDepositPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 9, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest}
 */
proto.io.bisq.protobuffer.PostOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.PostOfferRequest;
  return proto.io.bisq.protobuffer.PostOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.PostOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest}
 */
proto.io.bisq.protobuffer.PostOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuyerSecurityDepositPct(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.PostOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.PostOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PostOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getBuyerSecurityDepositPct();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin_pct = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getMinAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional double buyer_security_deposit_pct = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getBuyerSecurityDepositPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setBuyerSecurityDepositPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string trigger_price = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string payment_account_id = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PostOfferRequest} returns this
 */
proto.io.bisq.protobuffer.PostOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.PostOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.PostOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.PostOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PostOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.PostOfferReply}
 */
proto.io.bisq.protobuffer.PostOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.PostOfferReply;
  return proto.io.bisq.protobuffer.PostOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.PostOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.PostOfferReply}
 */
proto.io.bisq.protobuffer.PostOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.PostOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.PostOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.PostOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PostOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.PostOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.PostOfferReply} returns this
*/
proto.io.bisq.protobuffer.PostOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.PostOfferReply} returns this
 */
proto.io.bisq.protobuffer.PostOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.PostOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CancelOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CancelOfferRequest;
  return proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CancelOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CancelOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CancelOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CancelOfferReply}
 */
proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CancelOfferReply;
  return proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CancelOfferReply}
 */
proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CancelOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CancelOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OfferInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OfferInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OfferInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 8, ""),
    minVolume: jspb.Message.getFieldWithDefault(msg, 9, ""),
    buyerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 11, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    paymentMethodShortName: jspb.Message.getFieldWithDefault(msg, 14, ""),
    baseCurrencyCode: jspb.Message.getFieldWithDefault(msg, 15, ""),
    counterCurrencyCode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    date: jspb.Message.getFieldWithDefault(msg, 17, 0),
    state: jspb.Message.getFieldWithDefault(msg, 18, ""),
    sellerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 19, 0),
    offerFeePaymentTxId: jspb.Message.getFieldWithDefault(msg, 20, ""),
    txFee: jspb.Message.getFieldWithDefault(msg, 21, 0),
    makerFee: jspb.Message.getFieldWithDefault(msg, 22, 0),
    isActivated: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    isMyOffer: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    ownerNodeAddress: jspb.Message.getFieldWithDefault(msg, 25, ""),
    pubKeyRing: jspb.Message.getFieldWithDefault(msg, 26, ""),
    versionNr: jspb.Message.getFieldWithDefault(msg, 27, ""),
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 28, 0),
    arbitratorSigner: jspb.Message.getFieldWithDefault(msg, 29, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.OfferInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OfferInfo;
  return proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OfferInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolume(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinVolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerSecurityDeposit(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodShortName(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseCurrencyCode(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounterCurrencyCode(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellerSecurityDeposit(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferFeePaymentTxId(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFee(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMakerFee(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActivated(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMyOffer(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerNodeAddress(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKeyRing(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionNr(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorSigner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OfferInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getVolume();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMinVolume();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBuyerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPaymentMethodShortName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getBaseCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCounterCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getSellerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getOfferFeePaymentTxId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getTxFee();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = message.getMakerFee();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = message.getIsActivated();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getIsMyOffer();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getOwnerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getPubKeyRing();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getVersionNr();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getProtocolVersion();
  if (f !== 0) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = message.getArbitratorSigner();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin_pct = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string volume = 8;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string min_volume = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint64 buyer_security_deposit = 10;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBuyerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBuyerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string trigger_price = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string payment_account_id = 12;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string payment_method_id = 13;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string payment_method_short_name = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentMethodShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentMethodShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string base_currency_code = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBaseCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBaseCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string counter_currency_code = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getCounterCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setCounterCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional uint64 date = 17;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional string state = 18;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional uint64 seller_security_deposit = 19;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getSellerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setSellerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string offer_fee_payment_tx_id = 20;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getOfferFeePaymentTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setOfferFeePaymentTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional uint64 tx_fee = 21;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTxFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTxFee = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint64 maker_fee = 22;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMakerFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMakerFee = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional bool is_activated = 23;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsActivated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsActivated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool is_my_offer = 24;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIsMyOffer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIsMyOffer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional string owner_node_address = 25;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getOwnerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setOwnerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string pub_key_ring = 26;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPubKeyRing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPubKeyRing = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string version_nr = 27;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getVersionNr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setVersionNr = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional int32 protocol_version = 28;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional string arbitrator_signer = 29;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getArbitratorSigner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setArbitratorSigner = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityResult: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AvailabilityResultWithDescription;
  return proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (reader.readEnum());
      msg.setAvailabilityResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AvailabilityResult availability_result = 1;
 * @return {!proto.io.bisq.protobuffer.AvailabilityResult}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getAvailabilityResult = function() {
  return /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.AvailabilityResult} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setAvailabilityResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreatePaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountForm: (f = msg.getPaymentAccountForm()) && pb_pb.PaymentAccountForm.toObject(includeInstance, f),
    paymentAccountFormAsJson: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreatePaymentAccountRequest;
  return proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccountForm;
      reader.readMessage(value,pb_pb.PaymentAccountForm.deserializeBinaryFromReader);
      msg.setPaymentAccountForm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountFormAsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccountForm.serializeBinaryToWriter
    );
  }
  f = message.getPaymentAccountFormAsJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PaymentAccountForm payment_account_form = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountForm}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentAccountForm = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountForm} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountForm, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountForm|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} returns this
*/
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentAccountForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.clearPaymentAccountForm = function() {
  return this.setPaymentAccountForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.hasPaymentAccountForm = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string payment_account_form_as_json = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentAccountFormAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentAccountFormAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreatePaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreatePaymentAccountReply;
  return proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountsRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountsList: jspb.Message.toObjectList(msg.getPaymentAccountsList(),
    pb_pb.PaymentAccount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountsReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.addPaymentAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentAccount payment_accounts = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentAccount>}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.getPaymentAccountsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentAccount>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.setPaymentAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.addPaymentAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.clearPaymentAccountsList = function() {
  return this.setPaymentAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentMethodsRequest;
  return proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentMethodsReply;
  return proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentAccountPayload: (f = msg.getPaymentAccountPayload()) && pb_pb.PaymentAccountPayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 2:
      var value = new pb_pb.PaymentAccountPayload;
      reader.readMessage(value,pb_pb.PaymentAccountPayload.deserializeBinaryFromReader);
      msg.setPaymentAccountPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pb_pb.PaymentAccountPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional string payment_method_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PaymentAccountPayload payment_account_payload = 2;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayload}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayload} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountPayload, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayload|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} returns this
*/
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.clearPaymentAccountPayload = function() {
  return this.setPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.hasPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountForm: (f = msg.getPaymentAccountForm()) && pb_pb.PaymentAccountForm.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccountForm;
      reader.readMessage(value,pb_pb.PaymentAccountForm.deserializeBinaryFromReader);
      msg.setPaymentAccountForm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccountForm.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccountForm payment_account_form = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountForm}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.getPaymentAccountForm = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountForm} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountForm, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountForm|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.setPaymentAccountForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.clearPaymentAccountForm = function() {
  return this.setPaymentAccountForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.hasPaymentAccountForm = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_method_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountFormAsJson: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountFormAsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountFormAsJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_account_form_as_json = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.getPaymentAccountFormAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.setPaymentAccountFormAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tradeInstant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest;
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradeInstant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTradeInstant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool trade_instant = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getTradeInstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setTradeInstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply;
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest;
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply;
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ValidateFormFieldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    form: (f = msg.getForm()) && pb_pb.PaymentAccountForm.toObject(includeInstance, f),
    fieldId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldRequest}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ValidateFormFieldRequest;
  return proto.io.bisq.protobuffer.ValidateFormFieldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldRequest}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccountForm;
      reader.readMessage(value,pb_pb.PaymentAccountForm.deserializeBinaryFromReader);
      msg.setForm(value);
      break;
    case 2:
      var value = /** @type {!proto.io.bisq.protobuffer.PaymentAccountFormField.FieldId} */ (reader.readEnum());
      msg.setFieldId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ValidateFormFieldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccountForm.serializeBinaryToWriter
    );
  }
  f = message.getFieldId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PaymentAccountForm form = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountForm}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.getForm = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountForm} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountForm, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountForm|undefined} value
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} returns this
*/
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.setForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} returns this
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.clearForm = function() {
  return this.setForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.hasForm = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentAccountFormField.FieldId field_id = 2;
 * @return {!proto.io.bisq.protobuffer.PaymentAccountFormField.FieldId}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.getFieldId = function() {
  return /** @type {!proto.io.bisq.protobuffer.PaymentAccountFormField.FieldId} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentAccountFormField.FieldId} value
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} returns this
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.setFieldId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldRequest} returns this
 */
proto.io.bisq.protobuffer.ValidateFormFieldRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ValidateFormFieldReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ValidateFormFieldReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldReply}
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ValidateFormFieldReply;
  return proto.io.bisq.protobuffer.ValidateFormFieldReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ValidateFormFieldReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ValidateFormFieldReply}
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ValidateFormFieldReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ValidateFormFieldReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ValidateFormFieldReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceRequest;
  return proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest} returns this
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply}
 */
proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceReply;
  return proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply}
 */
proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply} returns this
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPricesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPricesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPricesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPricesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPricesRequest}
 */
proto.io.bisq.protobuffer.MarketPricesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPricesRequest;
  return proto.io.bisq.protobuffer.MarketPricesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPricesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPricesRequest}
 */
proto.io.bisq.protobuffer.MarketPricesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPricesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPricesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPricesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPricesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.MarketPricesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPricesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPricesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPricesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPricesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketPriceList: jspb.Message.toObjectList(msg.getMarketPriceList(),
    proto.io.bisq.protobuffer.MarketPriceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPricesReply}
 */
proto.io.bisq.protobuffer.MarketPricesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPricesReply;
  return proto.io.bisq.protobuffer.MarketPricesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPricesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPricesReply}
 */
proto.io.bisq.protobuffer.MarketPricesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.MarketPriceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.MarketPriceInfo.deserializeBinaryFromReader);
      msg.addMarketPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPricesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPricesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPricesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPricesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.MarketPriceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarketPriceInfo market_price = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.MarketPriceInfo>}
 */
proto.io.bisq.protobuffer.MarketPricesReply.prototype.getMarketPriceList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.MarketPriceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.MarketPriceInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.MarketPriceInfo>} value
 * @return {!proto.io.bisq.protobuffer.MarketPricesReply} returns this
*/
proto.io.bisq.protobuffer.MarketPricesReply.prototype.setMarketPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.MarketPriceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.MarketPriceInfo}
 */
proto.io.bisq.protobuffer.MarketPricesReply.prototype.addMarketPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.MarketPriceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.MarketPricesReply} returns this
 */
proto.io.bisq.protobuffer.MarketPricesReply.prototype.clearMarketPriceList = function() {
  return this.setMarketPriceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceInfo}
 */
proto.io.bisq.protobuffer.MarketPriceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceInfo;
  return proto.io.bisq.protobuffer.MarketPriceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceInfo}
 */
proto.io.bisq.protobuffer.MarketPriceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketPriceInfo.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceInfo} returns this
 */
proto.io.bisq.protobuffer.MarketPriceInfo.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double price = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.MarketPriceInfo.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceInfo} returns this
 */
proto.io.bisq.protobuffer.MarketPriceInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketDepthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketDepthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketDepthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketDepthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketDepthRequest}
 */
proto.io.bisq.protobuffer.MarketDepthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketDepthRequest;
  return proto.io.bisq.protobuffer.MarketDepthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketDepthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketDepthRequest}
 */
proto.io.bisq.protobuffer.MarketDepthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketDepthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketDepthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketDepthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketDepthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketDepthRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthRequest} returns this
 */
proto.io.bisq.protobuffer.MarketDepthRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketDepthReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketDepthReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketDepthReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketDepthReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketDepth: (f = msg.getMarketDepth()) && proto.io.bisq.protobuffer.MarketDepthInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketDepthReply}
 */
proto.io.bisq.protobuffer.MarketDepthReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketDepthReply;
  return proto.io.bisq.protobuffer.MarketDepthReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketDepthReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketDepthReply}
 */
proto.io.bisq.protobuffer.MarketDepthReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.MarketDepthInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.MarketDepthInfo.deserializeBinaryFromReader);
      msg.setMarketDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketDepthReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketDepthReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketDepthReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketDepthReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketDepth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.MarketDepthInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketDepthInfo market_depth = 1;
 * @return {?proto.io.bisq.protobuffer.MarketDepthInfo}
 */
proto.io.bisq.protobuffer.MarketDepthReply.prototype.getMarketDepth = function() {
  return /** @type{?proto.io.bisq.protobuffer.MarketDepthInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.MarketDepthInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.MarketDepthInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthReply} returns this
*/
proto.io.bisq.protobuffer.MarketDepthReply.prototype.setMarketDepth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.MarketDepthReply} returns this
 */
proto.io.bisq.protobuffer.MarketDepthReply.prototype.clearMarketDepth = function() {
  return this.setMarketDepth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.MarketDepthReply.prototype.hasMarketDepth = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.MarketDepthInfo.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketDepthInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketDepthInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketDepthInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyPricesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    buyDepthList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    sellPricesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    sellDepthList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketDepthInfo;
  return proto.io.bisq.protobuffer.MarketDepthInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketDepthInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBuyPrices(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBuyDepth(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSellPrices(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSellDepth(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketDepthInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketDepthInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketDepthInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyPricesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
  f = message.getBuyDepthList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
  f = message.getSellPricesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
  f = message.getSellDepthList();
  if (f.length > 0) {
    writer.writePackedDouble(
      5,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated double buy_prices = 2;
 * @return {!Array<number>}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.getBuyPricesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.setBuyPricesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.addBuyPrices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.clearBuyPricesList = function() {
  return this.setBuyPricesList([]);
};


/**
 * repeated double buy_depth = 3;
 * @return {!Array<number>}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.getBuyDepthList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.setBuyDepthList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.addBuyDepth = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.clearBuyDepthList = function() {
  return this.setBuyDepthList([]);
};


/**
 * repeated double sell_prices = 4;
 * @return {!Array<number>}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.getSellPricesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.setSellPricesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.addSellPrices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.clearSellPricesList = function() {
  return this.setSellPricesList([]);
};


/**
 * repeated double sell_depth = 5;
 * @return {!Array<number>}
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.getSellDepthList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.setSellDepthList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.addSellDepth = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.MarketDepthInfo} returns this
 */
proto.io.bisq.protobuffer.MarketDepthInfo.prototype.clearSellDepthList = function() {
  return this.setSellDepthList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeStatisticsRequest;
  return proto.io.bisq.protobuffer.GetTradeStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeStatisticsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeStatisticsList: jspb.Message.toObjectList(msg.getTradeStatisticsList(),
    pb_pb.TradeStatistics3.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeStatisticsReply;
  return proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.TradeStatistics3;
      reader.readMessage(value,pb_pb.TradeStatistics3.deserializeBinaryFromReader);
      msg.addTradeStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeStatisticsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.TradeStatistics3.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeStatistics3 trade_statistics = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.TradeStatistics3>}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.getTradeStatisticsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.TradeStatistics3>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.TradeStatistics3, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.TradeStatistics3>} value
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} returns this
*/
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.setTradeStatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.TradeStatistics3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.TradeStatistics3}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.addTradeStatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.TradeStatistics3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} returns this
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.clearTradeStatisticsList = function() {
  return this.setTradeStatisticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopRequest}
 */
proto.io.bisq.protobuffer.StopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopRequest;
  return proto.io.bisq.protobuffer.StopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopRequest}
 */
proto.io.bisq.protobuffer.StopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopReply}
 */
proto.io.bisq.protobuffer.StopReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopReply;
  return proto.io.bisq.protobuffer.StopReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopReply}
 */
proto.io.bisq.protobuffer.StopReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TakeOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TakeOfferRequest;
  return proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TakeOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string offer_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getOfferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setOfferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_account_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TakeOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f),
    failureReason: (f = msg.getFailureReason()) && proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply}
 */
proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TakeOfferReply;
  return proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply}
 */
proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.AvailabilityResultWithDescription;
      reader.readMessage(value,proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader);
      msg.setFailureReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TakeOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getFailureReason();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailabilityResultWithDescription failure_reason = 2;
 * @return {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getFailureReason = function() {
  return /** @type{?proto.io.bisq.protobuffer.AvailabilityResultWithDescription} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AvailabilityResultWithDescription, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setFailureReason = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearFailureReason = function() {
  return this.setFailureReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasFailureReason = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentSentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentSentRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentSentRequest;
  return proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentSentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentSentRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentSentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentSentRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentSentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentSentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentSentReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentSentReply;
  return proto.io.bisq.protobuffer.ConfirmPaymentSentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentSentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentSentReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentSentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentSentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentSentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest;
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply;
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest}
 */
proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeRequest;
  return proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest}
 */
proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest} returns this
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply}
 */
proto.io.bisq.protobuffer.GetTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeReply;
  return proto.io.bisq.protobuffer.GetTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply}
 */
proto.io.bisq.protobuffer.GetTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTradeReply} returns this
*/
proto.io.bisq.protobuffer.GetTradeReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply} returns this
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest}
 */
proto.io.bisq.protobuffer.GetTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradesRequest;
  return proto.io.bisq.protobuffer.GetTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest}
 */
proto.io.bisq.protobuffer.GetTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.bisq.protobuffer.GetTradesRequest.Category} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.bisq.protobuffer.GetTradesRequest.Category = {
  OPEN: 0,
  CLOSED: 1,
  FAILED: 2
};

/**
 * optional Category category = 1;
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest.Category}
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.getCategory = function() {
  return /** @type {!proto.io.bisq.protobuffer.GetTradesRequest.Category} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.GetTradesRequest.Category} value
 * @return {!proto.io.bisq.protobuffer.GetTradesRequest} returns this
 */
proto.io.bisq.protobuffer.GetTradesRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetTradesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.io.bisq.protobuffer.TradeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradesReply}
 */
proto.io.bisq.protobuffer.GetTradesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradesReply;
  return proto.io.bisq.protobuffer.GetTradesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradesReply}
 */
proto.io.bisq.protobuffer.GetTradesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeInfo trades = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.TradeInfo>}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.TradeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.TradeInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetTradesReply} returns this
*/
proto.io.bisq.protobuffer.GetTradesReply.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.TradeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.TradeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetTradesReply} returns this
 */
proto.io.bisq.protobuffer.GetTradesReply.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CompleteTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CompleteTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CompleteTradeRequest}
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CompleteTradeRequest;
  return proto.io.bisq.protobuffer.CompleteTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CompleteTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CompleteTradeRequest}
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CompleteTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CompleteTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CompleteTradeRequest} returns this
 */
proto.io.bisq.protobuffer.CompleteTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CompleteTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CompleteTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CompleteTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CompleteTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CompleteTradeReply}
 */
proto.io.bisq.protobuffer.CompleteTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CompleteTradeReply;
  return proto.io.bisq.protobuffer.CompleteTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CompleteTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CompleteTradeReply}
 */
proto.io.bisq.protobuffer.CompleteTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CompleteTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CompleteTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CompleteTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CompleteTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.WithdrawFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.WithdrawFundsRequest;
  return proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memo = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.WithdrawFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsReply}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.WithdrawFundsReply;
  return proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsReply}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.WithdrawFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetChatMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetChatMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesRequest}
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetChatMessagesRequest;
  return proto.io.bisq.protobuffer.GetChatMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetChatMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesRequest}
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetChatMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetChatMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesRequest} returns this
 */
proto.io.bisq.protobuffer.GetChatMessagesRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetChatMessagesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetChatMessagesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    pb_pb.ChatMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesReply}
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetChatMessagesReply;
  return proto.io.bisq.protobuffer.GetChatMessagesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetChatMessagesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesReply}
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.ChatMessage;
      reader.readMessage(value,pb_pb.ChatMessage.deserializeBinaryFromReader);
      msg.addMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetChatMessagesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetChatMessagesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChatMessage message = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.ChatMessage>}
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.prototype.getMessageList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.ChatMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.ChatMessage, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.ChatMessage>} value
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesReply} returns this
*/
proto.io.bisq.protobuffer.GetChatMessagesReply.prototype.setMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.ChatMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.ChatMessage}
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.ChatMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetChatMessagesReply} returns this
 */
proto.io.bisq.protobuffer.GetChatMessagesReply.prototype.clearMessageList = function() {
  return this.setMessageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendChatMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendChatMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendChatMessageRequest}
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendChatMessageRequest;
  return proto.io.bisq.protobuffer.SendChatMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendChatMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendChatMessageRequest}
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendChatMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendChatMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendChatMessageRequest} returns this
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendChatMessageRequest} returns this
 */
proto.io.bisq.protobuffer.SendChatMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendChatMessageReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendChatMessageReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendChatMessageReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendChatMessageReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendChatMessageReply}
 */
proto.io.bisq.protobuffer.SendChatMessageReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendChatMessageReply;
  return proto.io.bisq.protobuffer.SendChatMessageReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendChatMessageReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendChatMessageReply}
 */
proto.io.bisq.protobuffer.SendChatMessageReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendChatMessageReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendChatMessageReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendChatMessageReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendChatMessageReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f),
    tradeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    role: jspb.Message.getFieldWithDefault(msg, 5, ""),
    takerFeeAsLong: jspb.Message.getFieldWithDefault(msg, 6, 0),
    takerFeeTxId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    payoutTxId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    amountAsLong: jspb.Message.getFieldWithDefault(msg, 9, 0),
    buyerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    sellerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 11, 0),
    price: jspb.Message.getFieldWithDefault(msg, 12, ""),
    arbitratorNodeAddress: jspb.Message.getFieldWithDefault(msg, 13, ""),
    tradePeerNodeAddress: jspb.Message.getFieldWithDefault(msg, 14, ""),
    state: jspb.Message.getFieldWithDefault(msg, 15, ""),
    phase: jspb.Message.getFieldWithDefault(msg, 16, ""),
    periodState: jspb.Message.getFieldWithDefault(msg, 17, ""),
    payoutState: jspb.Message.getFieldWithDefault(msg, 18, ""),
    disputeState: jspb.Message.getFieldWithDefault(msg, 19, ""),
    isDepositsPublished: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isDepositsConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isDepositsUnlocked: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isPaymentSent: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    isPaymentReceived: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    isPayoutPublished: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    isPayoutConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    isPayoutUnlocked: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 28, false),
    contractAsJson: jspb.Message.getFieldWithDefault(msg, 29, ""),
    contract: (f = msg.getContract()) && proto.io.bisq.protobuffer.ContractInfo.toObject(includeInstance, f),
    tradeVolume: jspb.Message.getFieldWithDefault(msg, 31, ""),
    makerDepositTxId: jspb.Message.getFieldWithDefault(msg, 32, ""),
    takerDepositTxId: jspb.Message.getFieldWithDefault(msg, 33, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TradeInfo;
  return proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTakerFeeAsLong(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeTxId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutTxId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountAsLong(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerSecurityDeposit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellerSecurityDeposit(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorNodeAddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradePeerNodeAddress(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriodState(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutState(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeState(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositsPublished(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositsConfirmed(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositsUnlocked(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaymentSent(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaymentReceived(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutPublished(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutConfirmed(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutUnlocked(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAsJson(value);
      break;
    case 30:
      var value = new proto.io.bisq.protobuffer.ContractInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeVolume(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerDepositTxId(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerDepositTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTakerFeeAsLong();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getTakerFeeTxId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPayoutTxId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAmountAsLong();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getBuyerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getSellerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getArbitratorNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTradePeerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getPhase();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPeriodState();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPayoutState();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getDisputeState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIsDepositsPublished();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsDepositsConfirmed();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsDepositsUnlocked();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIsPaymentSent();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getIsPaymentReceived();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getIsPayoutPublished();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getIsPayoutConfirmed();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getIsPayoutUnlocked();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      28,
      f
    );
  }
  f = message.getContractAsJson();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeVolume();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getMakerDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getTakerDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string trade_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string short_id = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getShortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setShortId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string role = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 taker_fee_as_long = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerFeeAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerFeeAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string taker_fee_tx_id = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerFeeTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerFeeTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string payout_tx_id = 8;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPayoutTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPayoutTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 amount_as_long = 9;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getAmountAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setAmountAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 buyer_security_deposit = 10;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getBuyerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setBuyerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 seller_security_deposit = 11;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getSellerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setSellerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string price = 12;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string arbitrator_node_address = 13;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getArbitratorNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setArbitratorNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string trade_peer_node_address = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradePeerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradePeerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string state = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string phase = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPhase = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string period_state = 17;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPeriodState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPeriodState = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string payout_state = 18;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPayoutState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPayoutState = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string dispute_state = 19;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getDisputeState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setDisputeState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool is_deposits_published = 20;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositsPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositsPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool is_deposits_confirmed = 21;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositsConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositsConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_deposits_unlocked = 22;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositsUnlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositsUnlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool is_payment_sent = 23;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPaymentSent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPaymentSent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool is_payment_received = 24;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPaymentReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPaymentReceived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool is_payout_published = 25;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPayoutPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPayoutPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional bool is_payout_confirmed = 26;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPayoutConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPayoutConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional bool is_payout_unlocked = 27;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPayoutUnlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPayoutUnlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};


/**
 * optional bool is_completed = 28;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 28, value);
};


/**
 * optional string contract_as_json = 29;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContractAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setContractAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional ContractInfo contract = 30;
 * @return {?proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContract = function() {
  return /** @type{?proto.io.bisq.protobuffer.ContractInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.ContractInfo, 30));
};


/**
 * @param {?proto.io.bisq.protobuffer.ContractInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasContract = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional string trade_volume = 31;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string maker_deposit_tx_id = 32;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getMakerDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setMakerDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string taker_deposit_tx_id = 33;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ContractInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ContractInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ContractInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerNodeAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sellerNodeAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isBuyerMakerAndSellerTaker: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    makerAccountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    takerAccountId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    makerPaymentAccountPayload: (f = msg.getMakerPaymentAccountPayload()) && pb_pb.PaymentAccountPayload.toObject(includeInstance, f),
    takerPaymentAccountPayload: (f = msg.getTakerPaymentAccountPayload()) && pb_pb.PaymentAccountPayload.toObject(includeInstance, f),
    makerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 10, ""),
    takerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lockTime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    arbitratorNodeAddress: jspb.Message.getFieldWithDefault(msg, 100, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ContractInfo;
  return proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ContractInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyerNodeAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellerNodeAddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBuyerMakerAndSellerTaker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerAccountId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerAccountId(value);
      break;
    case 8:
      var value = new pb_pb.PaymentAccountPayload;
      reader.readMessage(value,pb_pb.PaymentAccountPayload.deserializeBinaryFromReader);
      msg.setMakerPaymentAccountPayload(value);
      break;
    case 9:
      var value = new pb_pb.PaymentAccountPayload;
      reader.readMessage(value,pb_pb.PaymentAccountPayload.deserializeBinaryFromReader);
      msg.setTakerPaymentAccountPayload(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerPayoutAddressString(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerPayoutAddressString(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockTime(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorNodeAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ContractInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSellerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsBuyerMakerAndSellerTaker();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      pb_pb.PaymentAccountPayload.serializeBinaryToWriter
    );
  }
  f = message.getTakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      pb_pb.PaymentAccountPayload.serializeBinaryToWriter
    );
  }
  f = message.getMakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLockTime();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getArbitratorNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional string buyer_node_address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getBuyerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setBuyerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string seller_node_address = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getSellerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setSellerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_buyer_maker_and_seller_taker = 5;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getIsBuyerMakerAndSellerTaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setIsBuyerMakerAndSellerTaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string maker_account_id = 6;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string taker_account_id = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PaymentAccountPayload maker_payment_account_payload = 8;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayload}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayload} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountPayload, 8));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayload|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearMakerPaymentAccountPayload = function() {
  return this.setMakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasMakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PaymentAccountPayload taker_payment_account_payload = 9;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayload}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayload} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountPayload, 9));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayload|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearTakerPaymentAccountPayload = function() {
  return this.setTakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasTakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string maker_payout_address_string = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string taker_payout_address_string = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 lock_time = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getLockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setLockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string arbitrator_node_address = 100;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getArbitratorNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setArbitratorNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBalancesRequest;
  return proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest} returns this
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBalancesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balances: (f = msg.getBalances()) && proto.io.bisq.protobuffer.BalancesInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply}
 */
proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBalancesReply;
  return proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply}
 */
proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.BalancesInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader);
      msg.setBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBalancesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalances();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BalancesInfo balances = 1;
 * @return {?proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.getBalances = function() {
  return /** @type{?proto.io.bisq.protobuffer.BalancesInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BalancesInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BalancesInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply} returns this
*/
proto.io.bisq.protobuffer.GetBalancesReply.prototype.setBalances = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply} returns this
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.clearBalances = function() {
  return this.setBalances(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.hasBalances = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrSeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrSeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrSeedRequest}
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrSeedRequest;
  return proto.io.bisq.protobuffer.GetXmrSeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrSeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrSeedRequest}
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrSeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrSeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrSeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrSeedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrSeedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    seed: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrSeedReply}
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrSeedReply;
  return proto.io.bisq.protobuffer.GetXmrSeedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrSeedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrSeedReply}
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrSeedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrSeedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeed();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string seed = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.prototype.getSeed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetXmrSeedReply} returns this
 */
proto.io.bisq.protobuffer.GetXmrSeedReply.prototype.setSeed = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest;
  return proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    primaryAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply;
  return proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimaryAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string primary_address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.prototype.getPrimaryAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply} returns this
 */
proto.io.bisq.protobuffer.GetXmrPrimaryAddressReply.prototype.setPrimaryAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest;
  return proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrNewSubaddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrNewSubaddressReply}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrNewSubaddressReply;
  return proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrNewSubaddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrNewSubaddressReply}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrNewSubaddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string subaddress = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.prototype.getSubaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetXmrNewSubaddressReply} returns this
 */
proto.io.bisq.protobuffer.GetXmrNewSubaddressReply.prototype.setSubaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrTxsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrTxsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrTxsRequest}
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrTxsRequest;
  return proto.io.bisq.protobuffer.GetXmrTxsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrTxsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrTxsRequest}
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrTxsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrTxsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrTxsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetXmrTxsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetXmrTxsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: jspb.Message.toObjectList(msg.getTxsList(),
    proto.io.bisq.protobuffer.XmrTx.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetXmrTxsReply}
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetXmrTxsReply;
  return proto.io.bisq.protobuffer.GetXmrTxsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetXmrTxsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetXmrTxsReply}
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.XmrTx;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrTx.deserializeBinaryFromReader);
      msg.addTxs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetXmrTxsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetXmrTxsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.XmrTx.serializeBinaryToWriter
    );
  }
};


/**
 * repeated XmrTx txs = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.XmrTx>}
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.prototype.getTxsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.XmrTx>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.XmrTx, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.XmrTx>} value
 * @return {!proto.io.bisq.protobuffer.GetXmrTxsReply} returns this
*/
proto.io.bisq.protobuffer.GetXmrTxsReply.prototype.setTxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.XmrTx=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.XmrTx}
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.XmrTx, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetXmrTxsReply} returns this
 */
proto.io.bisq.protobuffer.GetXmrTxsReply.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.XmrTx.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.XmrTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.XmrTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    incomingTransfersList: jspb.Message.toObjectList(msg.getIncomingTransfersList(),
    proto.io.bisq.protobuffer.XmrIncomingTransfer.toObject, includeInstance),
    outgoingTransfer: (f = msg.getOutgoingTransfer()) && proto.io.bisq.protobuffer.XmrOutgoingTransfer.toObject(includeInstance, f),
    metadata: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.XmrTx}
 */
proto.io.bisq.protobuffer.XmrTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.XmrTx;
  return proto.io.bisq.protobuffer.XmrTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.XmrTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.XmrTx}
 */
proto.io.bisq.protobuffer.XmrTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConfirmed(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLocked(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = new proto.io.bisq.protobuffer.XmrIncomingTransfer;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrIncomingTransfer.deserializeBinaryFromReader);
      msg.addIncomingTransfers(value);
      break;
    case 8:
      var value = new proto.io.bisq.protobuffer.XmrOutgoingTransfer;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrOutgoingTransfer.deserializeBinaryFromReader);
      msg.setOutgoingTransfer(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.XmrTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.XmrTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsConfirmed();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getIncomingTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.io.bisq.protobuffer.XmrIncomingTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOutgoingTransfer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.io.bisq.protobuffer.XmrOutgoingTransfer.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fee = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_confirmed = 3;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getIsConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setIsConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_locked = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getIsLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setIsLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint64 height = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 timestamp = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated XmrIncomingTransfer incoming_transfers = 7;
 * @return {!Array<!proto.io.bisq.protobuffer.XmrIncomingTransfer>}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getIncomingTransfersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.XmrIncomingTransfer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.XmrIncomingTransfer, 7));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.XmrIncomingTransfer>} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
*/
proto.io.bisq.protobuffer.XmrTx.prototype.setIncomingTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.XmrIncomingTransfer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.addIncomingTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.io.bisq.protobuffer.XmrIncomingTransfer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.clearIncomingTransfersList = function() {
  return this.setIncomingTransfersList([]);
};


/**
 * optional XmrOutgoingTransfer outgoing_transfer = 8;
 * @return {?proto.io.bisq.protobuffer.XmrOutgoingTransfer}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getOutgoingTransfer = function() {
  return /** @type{?proto.io.bisq.protobuffer.XmrOutgoingTransfer} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.XmrOutgoingTransfer, 8));
};


/**
 * @param {?proto.io.bisq.protobuffer.XmrOutgoingTransfer|undefined} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
*/
proto.io.bisq.protobuffer.XmrTx.prototype.setOutgoingTransfer = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.clearOutgoingTransfer = function() {
  return this.setOutgoingTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.hasOutgoingTransfer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string metadata = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrTx.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrTx} returns this
 */
proto.io.bisq.protobuffer.XmrTx.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.XmrDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.XmrDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.XmrDestination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.XmrDestination}
 */
proto.io.bisq.protobuffer.XmrDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.XmrDestination;
  return proto.io.bisq.protobuffer.XmrDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.XmrDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.XmrDestination}
 */
proto.io.bisq.protobuffer.XmrDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.XmrDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.XmrDestination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.XmrDestination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrDestination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrDestination.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrDestination} returns this
 */
proto.io.bisq.protobuffer.XmrDestination.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrDestination.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrDestination} returns this
 */
proto.io.bisq.protobuffer.XmrDestination.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.XmrIncomingTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.XmrIncomingTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subaddressIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    numSuggestedConfirmations: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.XmrIncomingTransfer;
  return proto.io.bisq.protobuffer.XmrIncomingTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.XmrIncomingTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccountIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubaddressIndex(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumSuggestedConfirmations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.XmrIncomingTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.XmrIncomingTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubaddressIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNumSuggestedConfirmations();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string amount = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 account_index = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 subaddress_index = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.getSubaddressIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.setSubaddressIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 num_suggested_confirmations = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.getNumSuggestedConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrIncomingTransfer.prototype.setNumSuggestedConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.XmrOutgoingTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subaddressIndicesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.io.bisq.protobuffer.XmrDestination.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.XmrOutgoingTransfer;
  return proto.io.bisq.protobuffer.XmrOutgoingTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccountIndex(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSubaddressIndices(values[i]);
      }
      break;
    case 4:
      var value = new proto.io.bisq.protobuffer.XmrDestination;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrDestination.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.XmrOutgoingTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubaddressIndicesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.io.bisq.protobuffer.XmrDestination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string amount = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 account_index = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated int32 subaddress_indices = 3;
 * @return {!Array<number>}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.getSubaddressIndicesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.setSubaddressIndicesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.addSubaddressIndices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.clearSubaddressIndicesList = function() {
  return this.setSubaddressIndicesList([]);
};


/**
 * repeated XmrDestination destinations = 4;
 * @return {!Array<!proto.io.bisq.protobuffer.XmrDestination>}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.getDestinationsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.XmrDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.XmrDestination, 4));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.XmrDestination>} value
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
*/
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.setDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.XmrDestination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.XmrDestination}
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.io.bisq.protobuffer.XmrDestination, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.bisq.protobuffer.XmrOutgoingTransfer.prototype.clearDestinationsList = function() {
  return this.setDestinationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateXmrTxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateXmrTxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.io.bisq.protobuffer.XmrDestination.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxRequest}
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateXmrTxRequest;
  return proto.io.bisq.protobuffer.CreateXmrTxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateXmrTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxRequest}
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.XmrDestination;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrDestination.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateXmrTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateXmrTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.XmrDestination.serializeBinaryToWriter
    );
  }
};


/**
 * repeated XmrDestination destinations = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.XmrDestination>}
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.prototype.getDestinationsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.XmrDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.XmrDestination, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.XmrDestination>} value
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxRequest} returns this
*/
proto.io.bisq.protobuffer.CreateXmrTxRequest.prototype.setDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.XmrDestination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.XmrDestination}
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.XmrDestination, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxRequest} returns this
 */
proto.io.bisq.protobuffer.CreateXmrTxRequest.prototype.clearDestinationsList = function() {
  return this.setDestinationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateXmrTxReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateXmrTxReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: (f = msg.getTx()) && proto.io.bisq.protobuffer.XmrTx.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxReply}
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateXmrTxReply;
  return proto.io.bisq.protobuffer.CreateXmrTxReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateXmrTxReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxReply}
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.XmrTx;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrTx.deserializeBinaryFromReader);
      msg.setTx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateXmrTxReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateXmrTxReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.XmrTx.serializeBinaryToWriter
    );
  }
};


/**
 * optional XmrTx tx = 1;
 * @return {?proto.io.bisq.protobuffer.XmrTx}
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.prototype.getTx = function() {
  return /** @type{?proto.io.bisq.protobuffer.XmrTx} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.XmrTx, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.XmrTx|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxReply} returns this
*/
proto.io.bisq.protobuffer.CreateXmrTxReply.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateXmrTxReply} returns this
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.prototype.clearTx = function() {
  return this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateXmrTxReply.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RelayXmrTxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RelayXmrTxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RelayXmrTxRequest}
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RelayXmrTxRequest;
  return proto.io.bisq.protobuffer.RelayXmrTxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RelayXmrTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RelayXmrTxRequest}
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RelayXmrTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RelayXmrTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string metadata = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RelayXmrTxRequest} returns this
 */
proto.io.bisq.protobuffer.RelayXmrTxRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RelayXmrTxReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RelayXmrTxReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RelayXmrTxReply}
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RelayXmrTxReply;
  return proto.io.bisq.protobuffer.RelayXmrTxReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RelayXmrTxReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RelayXmrTxReply}
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RelayXmrTxReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RelayXmrTxReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RelayXmrTxReply} returns this
 */
proto.io.bisq.protobuffer.RelayXmrTxReply.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAddressBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAddressBalanceRequest;
  return proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAddressBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfo: (f = msg.getAddressBalanceInfo()) && proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAddressBalanceReply;
  return proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.setAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressBalanceInfo address_balance_info = 1;
 * @return {?proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.getAddressBalanceInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.AddressBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.AddressBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
*/
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.setAddressBalanceInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.clearAddressBalanceInfo = function() {
  return this.setAddressBalanceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.hasAddressBalanceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBtcRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txFeeRate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest}
 */
proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBtcRequest;
  return proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest}
 */
proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxFeeRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBtcRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxFeeRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tx_fee_rate = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getTxFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setTxFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string memo = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetFundingAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesRequest}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetFundingAddressesRequest;
  return proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesRequest}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetFundingAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfoList: jspb.Message.toObjectList(msg.getAddressBalanceInfoList(),
    proto.io.bisq.protobuffer.AddressBalanceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetFundingAddressesReply;
  return proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.addAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressBalanceInfo address_balance_info = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.getAddressBalanceInfoList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
*/
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.setAddressBalanceInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.addAddressBalanceInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.AddressBalanceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.clearAddressBalanceInfoList = function() {
  return this.setAddressBalanceInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetWalletPasswordRequest;
  return proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordReply}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetWalletPasswordReply;
  return proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordReply}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveWalletPasswordRequest;
  return proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveWalletPasswordReply;
  return proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.LockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.LockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.LockWalletRequest}
 */
proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.LockWalletRequest;
  return proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.LockWalletRequest}
 */
proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.LockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.LockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.LockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.LockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.LockWalletReply}
 */
proto.io.bisq.protobuffer.LockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.LockWalletReply;
  return proto.io.bisq.protobuffer.LockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.LockWalletReply}
 */
proto.io.bisq.protobuffer.LockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.LockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.LockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnlockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnlockWalletRequest;
  return proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnlockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 timeout = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnlockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletReply}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnlockWalletReply;
  return proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletReply}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnlockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BalancesInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BalancesInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    btc: (f = msg.getBtc()) && proto.io.bisq.protobuffer.BtcBalanceInfo.toObject(includeInstance, f),
    xmr: (f = msg.getXmr()) && proto.io.bisq.protobuffer.XmrBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BalancesInfo;
  return proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.BtcBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader);
      msg.setBtc(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.XmrBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader);
      msg.setXmr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBtc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getXmr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BtcBalanceInfo btc = 1;
 * @return {?proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getBtc = function() {
  return /** @type{?proto.io.bisq.protobuffer.BtcBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BtcBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BtcBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setBtc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearBtc = function() {
  return this.setBtc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasBtc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional XmrBalanceInfo xmr = 2;
 * @return {?proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getXmr = function() {
  return /** @type{?proto.io.bisq.protobuffer.XmrBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.XmrBalanceInfo, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.XmrBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setXmr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearXmr = function() {
  return this.setXmr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasXmr = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BtcBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reservedBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalAvailableBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedBalance: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BtcBalanceInfo;
  return proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalAvailableBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReservedBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedBalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 available_balance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 reserved_balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getReservedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setReservedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_available_balance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getTotalAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setTotalAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 locked_balance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getLockedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setLockedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.XmrBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.XmrBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    availableBalance: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    pendingBalance: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    reservedOfferBalance: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    reservedTradeBalance: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.XmrBalanceInfo;
  return proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.XmrBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBalance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAvailableBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPendingBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setReservedOfferBalance(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setReservedTradeBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.XmrBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAvailableBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPendingBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getReservedOfferBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getReservedTradeBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
};


/**
 * optional uint64 balance = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 available_balance = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getAvailableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 pending_balance = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getPendingBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setPendingBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 reserved_offer_balance = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getReservedOfferBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setReservedOfferBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional uint64 reserved_trade_balance = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getReservedTradeBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setReservedTradeBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numConfirmations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isAddressUnused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AddressBalanceInfo;
  return proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumConfirmations(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAddressUnused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumConfirmations();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsAddressUnused();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 num_confirmations = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getNumConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setNumConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_address_unused = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getIsAddressUnused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setIsAddressUnused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.io.bisq.protobuffer);
