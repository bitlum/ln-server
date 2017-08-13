"use strict";
var rpc_pb = require("./rpc_pb");
var Lightning = (function () {
    function Lightning() {
    }
    Lightning.serviceName = "lnrpc.Lightning";
    return Lightning;
}());
exports.Lightning = Lightning;
var Lightning;
(function (Lightning) {
    var WalletBalance = (function () {
        function WalletBalance() {
        }
        WalletBalance.methodName = "WalletBalance";
        WalletBalance.service = Lightning;
        WalletBalance.requestStream = false;
        WalletBalance.responseStream = false;
        WalletBalance.requestType = rpc_pb.WalletBalanceRequest;
        WalletBalance.responseType = rpc_pb.WalletBalanceResponse;
        return WalletBalance;
    }());
    Lightning.WalletBalance = WalletBalance;
    var ChannelBalance = (function () {
        function ChannelBalance() {
        }
        ChannelBalance.methodName = "ChannelBalance";
        ChannelBalance.service = Lightning;
        ChannelBalance.requestStream = false;
        ChannelBalance.responseStream = false;
        ChannelBalance.requestType = rpc_pb.ChannelBalanceRequest;
        ChannelBalance.responseType = rpc_pb.ChannelBalanceResponse;
        return ChannelBalance;
    }());
    Lightning.ChannelBalance = ChannelBalance;
    var GetTransactions = (function () {
        function GetTransactions() {
        }
        GetTransactions.methodName = "GetTransactions";
        GetTransactions.service = Lightning;
        GetTransactions.requestStream = false;
        GetTransactions.responseStream = false;
        GetTransactions.requestType = rpc_pb.GetTransactionsRequest;
        GetTransactions.responseType = rpc_pb.TransactionDetails;
        return GetTransactions;
    }());
    Lightning.GetTransactions = GetTransactions;
    var SendCoins = (function () {
        function SendCoins() {
        }
        SendCoins.methodName = "SendCoins";
        SendCoins.service = Lightning;
        SendCoins.requestStream = false;
        SendCoins.responseStream = false;
        SendCoins.requestType = rpc_pb.SendCoinsRequest;
        SendCoins.responseType = rpc_pb.SendCoinsResponse;
        return SendCoins;
    }());
    Lightning.SendCoins = SendCoins;
    var SubscribeTransactions = (function () {
        function SubscribeTransactions() {
        }
        SubscribeTransactions.methodName = "SubscribeTransactions";
        SubscribeTransactions.service = Lightning;
        SubscribeTransactions.requestStream = false;
        SubscribeTransactions.responseStream = true;
        SubscribeTransactions.requestType = rpc_pb.GetTransactionsRequest;
        SubscribeTransactions.responseType = rpc_pb.Transaction;
        return SubscribeTransactions;
    }());
    Lightning.SubscribeTransactions = SubscribeTransactions;
    var SendMany = (function () {
        function SendMany() {
        }
        SendMany.methodName = "SendMany";
        SendMany.service = Lightning;
        SendMany.requestStream = false;
        SendMany.responseStream = false;
        SendMany.requestType = rpc_pb.SendManyRequest;
        SendMany.responseType = rpc_pb.SendManyResponse;
        return SendMany;
    }());
    Lightning.SendMany = SendMany;
    var NewAddress = (function () {
        function NewAddress() {
        }
        NewAddress.methodName = "NewAddress";
        NewAddress.service = Lightning;
        NewAddress.requestStream = false;
        NewAddress.responseStream = false;
        NewAddress.requestType = rpc_pb.NewAddressRequest;
        NewAddress.responseType = rpc_pb.NewAddressResponse;
        return NewAddress;
    }());
    Lightning.NewAddress = NewAddress;
    var NewWitnessAddress = (function () {
        function NewWitnessAddress() {
        }
        NewWitnessAddress.methodName = "NewWitnessAddress";
        NewWitnessAddress.service = Lightning;
        NewWitnessAddress.requestStream = false;
        NewWitnessAddress.responseStream = false;
        NewWitnessAddress.requestType = rpc_pb.NewWitnessAddressRequest;
        NewWitnessAddress.responseType = rpc_pb.NewAddressResponse;
        return NewWitnessAddress;
    }());
    Lightning.NewWitnessAddress = NewWitnessAddress;
    var SignMessage = (function () {
        function SignMessage() {
        }
        SignMessage.methodName = "SignMessage";
        SignMessage.service = Lightning;
        SignMessage.requestStream = false;
        SignMessage.responseStream = false;
        SignMessage.requestType = rpc_pb.SignMessageRequest;
        SignMessage.responseType = rpc_pb.SignMessageResponse;
        return SignMessage;
    }());
    Lightning.SignMessage = SignMessage;
    var VerifyMessage = (function () {
        function VerifyMessage() {
        }
        VerifyMessage.methodName = "VerifyMessage";
        VerifyMessage.service = Lightning;
        VerifyMessage.requestStream = false;
        VerifyMessage.responseStream = false;
        VerifyMessage.requestType = rpc_pb.VerifyMessageRequest;
        VerifyMessage.responseType = rpc_pb.VerifyMessageResponse;
        return VerifyMessage;
    }());
    Lightning.VerifyMessage = VerifyMessage;
    var ConnectPeer = (function () {
        function ConnectPeer() {
        }
        ConnectPeer.methodName = "ConnectPeer";
        ConnectPeer.service = Lightning;
        ConnectPeer.requestStream = false;
        ConnectPeer.responseStream = false;
        ConnectPeer.requestType = rpc_pb.ConnectPeerRequest;
        ConnectPeer.responseType = rpc_pb.ConnectPeerResponse;
        return ConnectPeer;
    }());
    Lightning.ConnectPeer = ConnectPeer;
    var DisconnectPeer = (function () {
        function DisconnectPeer() {
        }
        DisconnectPeer.methodName = "DisconnectPeer";
        DisconnectPeer.service = Lightning;
        DisconnectPeer.requestStream = false;
        DisconnectPeer.responseStream = false;
        DisconnectPeer.requestType = rpc_pb.DisconnectPeerRequest;
        DisconnectPeer.responseType = rpc_pb.DisconnectPeerResponse;
        return DisconnectPeer;
    }());
    Lightning.DisconnectPeer = DisconnectPeer;
    var ListPeers = (function () {
        function ListPeers() {
        }
        ListPeers.methodName = "ListPeers";
        ListPeers.service = Lightning;
        ListPeers.requestStream = false;
        ListPeers.responseStream = false;
        ListPeers.requestType = rpc_pb.ListPeersRequest;
        ListPeers.responseType = rpc_pb.ListPeersResponse;
        return ListPeers;
    }());
    Lightning.ListPeers = ListPeers;
    var GetInfo = (function () {
        function GetInfo() {
        }
        GetInfo.methodName = "GetInfo";
        GetInfo.service = Lightning;
        GetInfo.requestStream = false;
        GetInfo.responseStream = false;
        GetInfo.requestType = rpc_pb.GetInfoRequest;
        GetInfo.responseType = rpc_pb.GetInfoResponse;
        return GetInfo;
    }());
    Lightning.GetInfo = GetInfo;
    var PendingChannels = (function () {
        function PendingChannels() {
        }
        PendingChannels.methodName = "PendingChannels";
        PendingChannels.service = Lightning;
        PendingChannels.requestStream = false;
        PendingChannels.responseStream = false;
        PendingChannels.requestType = rpc_pb.PendingChannelRequest;
        PendingChannels.responseType = rpc_pb.PendingChannelResponse;
        return PendingChannels;
    }());
    Lightning.PendingChannels = PendingChannels;
    var ListChannels = (function () {
        function ListChannels() {
        }
        ListChannels.methodName = "ListChannels";
        ListChannels.service = Lightning;
        ListChannels.requestStream = false;
        ListChannels.responseStream = false;
        ListChannels.requestType = rpc_pb.ListChannelsRequest;
        ListChannels.responseType = rpc_pb.ListChannelsResponse;
        return ListChannels;
    }());
    Lightning.ListChannels = ListChannels;
    var OpenChannelSync = (function () {
        function OpenChannelSync() {
        }
        OpenChannelSync.methodName = "OpenChannelSync";
        OpenChannelSync.service = Lightning;
        OpenChannelSync.requestStream = false;
        OpenChannelSync.responseStream = false;
        OpenChannelSync.requestType = rpc_pb.OpenChannelRequest;
        OpenChannelSync.responseType = rpc_pb.ChannelPoint;
        return OpenChannelSync;
    }());
    Lightning.OpenChannelSync = OpenChannelSync;
    var OpenChannel = (function () {
        function OpenChannel() {
        }
        OpenChannel.methodName = "OpenChannel";
        OpenChannel.service = Lightning;
        OpenChannel.requestStream = false;
        OpenChannel.responseStream = true;
        OpenChannel.requestType = rpc_pb.OpenChannelRequest;
        OpenChannel.responseType = rpc_pb.OpenStatusUpdate;
        return OpenChannel;
    }());
    Lightning.OpenChannel = OpenChannel;
    var CloseChannel = (function () {
        function CloseChannel() {
        }
        CloseChannel.methodName = "CloseChannel";
        CloseChannel.service = Lightning;
        CloseChannel.requestStream = false;
        CloseChannel.responseStream = true;
        CloseChannel.requestType = rpc_pb.CloseChannelRequest;
        CloseChannel.responseType = rpc_pb.CloseStatusUpdate;
        return CloseChannel;
    }());
    Lightning.CloseChannel = CloseChannel;
    var SendPayment = (function () {
        function SendPayment() {
        }
        SendPayment.methodName = "SendPayment";
        SendPayment.service = Lightning;
        SendPayment.requestStream = true;
        SendPayment.responseStream = true;
        SendPayment.requestType = rpc_pb.SendRequest;
        SendPayment.responseType = rpc_pb.SendResponse;
        return SendPayment;
    }());
    Lightning.SendPayment = SendPayment;
    var SendPaymentSync = (function () {
        function SendPaymentSync() {
        }
        SendPaymentSync.methodName = "SendPaymentSync";
        SendPaymentSync.service = Lightning;
        SendPaymentSync.requestStream = false;
        SendPaymentSync.responseStream = false;
        SendPaymentSync.requestType = rpc_pb.SendRequest;
        SendPaymentSync.responseType = rpc_pb.SendResponse;
        return SendPaymentSync;
    }());
    Lightning.SendPaymentSync = SendPaymentSync;
    var AddInvoice = (function () {
        function AddInvoice() {
        }
        AddInvoice.methodName = "AddInvoice";
        AddInvoice.service = Lightning;
        AddInvoice.requestStream = false;
        AddInvoice.responseStream = false;
        AddInvoice.requestType = rpc_pb.Invoice;
        AddInvoice.responseType = rpc_pb.AddInvoiceResponse;
        return AddInvoice;
    }());
    Lightning.AddInvoice = AddInvoice;
    var ListInvoices = (function () {
        function ListInvoices() {
        }
        ListInvoices.methodName = "ListInvoices";
        ListInvoices.service = Lightning;
        ListInvoices.requestStream = false;
        ListInvoices.responseStream = false;
        ListInvoices.requestType = rpc_pb.ListInvoiceRequest;
        ListInvoices.responseType = rpc_pb.ListInvoiceResponse;
        return ListInvoices;
    }());
    Lightning.ListInvoices = ListInvoices;
    var LookupInvoice = (function () {
        function LookupInvoice() {
        }
        LookupInvoice.methodName = "LookupInvoice";
        LookupInvoice.service = Lightning;
        LookupInvoice.requestStream = false;
        LookupInvoice.responseStream = false;
        LookupInvoice.requestType = rpc_pb.PaymentHash;
        LookupInvoice.responseType = rpc_pb.Invoice;
        return LookupInvoice;
    }());
    Lightning.LookupInvoice = LookupInvoice;
    var SubscribeInvoices = (function () {
        function SubscribeInvoices() {
        }
        SubscribeInvoices.methodName = "SubscribeInvoices";
        SubscribeInvoices.service = Lightning;
        SubscribeInvoices.requestStream = false;
        SubscribeInvoices.responseStream = true;
        SubscribeInvoices.requestType = rpc_pb.InvoiceSubscription;
        SubscribeInvoices.responseType = rpc_pb.Invoice;
        return SubscribeInvoices;
    }());
    Lightning.SubscribeInvoices = SubscribeInvoices;
    var DecodePayReq = (function () {
        function DecodePayReq() {
        }
        DecodePayReq.methodName = "DecodePayReq";
        DecodePayReq.service = Lightning;
        DecodePayReq.requestStream = false;
        DecodePayReq.responseStream = false;
        DecodePayReq.requestType = rpc_pb.PayReqString;
        DecodePayReq.responseType = rpc_pb.PayReq;
        return DecodePayReq;
    }());
    Lightning.DecodePayReq = DecodePayReq;
    var ListPayments = (function () {
        function ListPayments() {
        }
        ListPayments.methodName = "ListPayments";
        ListPayments.service = Lightning;
        ListPayments.requestStream = false;
        ListPayments.responseStream = false;
        ListPayments.requestType = rpc_pb.ListPaymentsRequest;
        ListPayments.responseType = rpc_pb.ListPaymentsResponse;
        return ListPayments;
    }());
    Lightning.ListPayments = ListPayments;
    var DeleteAllPayments = (function () {
        function DeleteAllPayments() {
        }
        DeleteAllPayments.methodName = "DeleteAllPayments";
        DeleteAllPayments.service = Lightning;
        DeleteAllPayments.requestStream = false;
        DeleteAllPayments.responseStream = false;
        DeleteAllPayments.requestType = rpc_pb.DeleteAllPaymentsRequest;
        DeleteAllPayments.responseType = rpc_pb.DeleteAllPaymentsResponse;
        return DeleteAllPayments;
    }());
    Lightning.DeleteAllPayments = DeleteAllPayments;
    var DescribeGraph = (function () {
        function DescribeGraph() {
        }
        DescribeGraph.methodName = "DescribeGraph";
        DescribeGraph.service = Lightning;
        DescribeGraph.requestStream = false;
        DescribeGraph.responseStream = false;
        DescribeGraph.requestType = rpc_pb.ChannelGraphRequest;
        DescribeGraph.responseType = rpc_pb.ChannelGraph;
        return DescribeGraph;
    }());
    Lightning.DescribeGraph = DescribeGraph;
    var GetChanInfo = (function () {
        function GetChanInfo() {
        }
        GetChanInfo.methodName = "GetChanInfo";
        GetChanInfo.service = Lightning;
        GetChanInfo.requestStream = false;
        GetChanInfo.responseStream = false;
        GetChanInfo.requestType = rpc_pb.ChanInfoRequest;
        GetChanInfo.responseType = rpc_pb.ChannelEdge;
        return GetChanInfo;
    }());
    Lightning.GetChanInfo = GetChanInfo;
    var GetNodeInfo = (function () {
        function GetNodeInfo() {
        }
        GetNodeInfo.methodName = "GetNodeInfo";
        GetNodeInfo.service = Lightning;
        GetNodeInfo.requestStream = false;
        GetNodeInfo.responseStream = false;
        GetNodeInfo.requestType = rpc_pb.NodeInfoRequest;
        GetNodeInfo.responseType = rpc_pb.NodeInfo;
        return GetNodeInfo;
    }());
    Lightning.GetNodeInfo = GetNodeInfo;
    var QueryRoutes = (function () {
        function QueryRoutes() {
        }
        QueryRoutes.methodName = "QueryRoutes";
        QueryRoutes.service = Lightning;
        QueryRoutes.requestStream = false;
        QueryRoutes.responseStream = false;
        QueryRoutes.requestType = rpc_pb.QueryRoutesRequest;
        QueryRoutes.responseType = rpc_pb.QueryRoutesResponse;
        return QueryRoutes;
    }());
    Lightning.QueryRoutes = QueryRoutes;
    var GetNetworkInfo = (function () {
        function GetNetworkInfo() {
        }
        GetNetworkInfo.methodName = "GetNetworkInfo";
        GetNetworkInfo.service = Lightning;
        GetNetworkInfo.requestStream = false;
        GetNetworkInfo.responseStream = false;
        GetNetworkInfo.requestType = rpc_pb.NetworkInfoRequest;
        GetNetworkInfo.responseType = rpc_pb.NetworkInfo;
        return GetNetworkInfo;
    }());
    Lightning.GetNetworkInfo = GetNetworkInfo;
    var StopDaemon = (function () {
        function StopDaemon() {
        }
        StopDaemon.methodName = "StopDaemon";
        StopDaemon.service = Lightning;
        StopDaemon.requestStream = false;
        StopDaemon.responseStream = false;
        StopDaemon.requestType = rpc_pb.StopRequest;
        StopDaemon.responseType = rpc_pb.StopResponse;
        return StopDaemon;
    }());
    Lightning.StopDaemon = StopDaemon;
    var SubscribeChannelGraph = (function () {
        function SubscribeChannelGraph() {
        }
        SubscribeChannelGraph.methodName = "SubscribeChannelGraph";
        SubscribeChannelGraph.service = Lightning;
        SubscribeChannelGraph.requestStream = false;
        SubscribeChannelGraph.responseStream = true;
        SubscribeChannelGraph.requestType = rpc_pb.GraphTopologySubscription;
        SubscribeChannelGraph.responseType = rpc_pb.GraphTopologyUpdate;
        return SubscribeChannelGraph;
    }());
    Lightning.SubscribeChannelGraph = SubscribeChannelGraph;
    var SetAlias = (function () {
        function SetAlias() {
        }
        SetAlias.methodName = "SetAlias";
        SetAlias.service = Lightning;
        SetAlias.requestStream = false;
        SetAlias.responseStream = false;
        SetAlias.requestType = rpc_pb.SetAliasRequest;
        SetAlias.responseType = rpc_pb.SetAliasResponse;
        return SetAlias;
    }());
    Lightning.SetAlias = SetAlias;
    var DebugLevel = (function () {
        function DebugLevel() {
        }
        DebugLevel.methodName = "DebugLevel";
        DebugLevel.service = Lightning;
        DebugLevel.requestStream = false;
        DebugLevel.responseStream = false;
        DebugLevel.requestType = rpc_pb.DebugLevelRequest;
        DebugLevel.responseType = rpc_pb.DebugLevelResponse;
        return DebugLevel;
    }());
    Lightning.DebugLevel = DebugLevel;
})(Lightning = exports.Lightning || (exports.Lightning = {}));
