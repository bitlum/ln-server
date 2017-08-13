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
        WalletBalance.readonly = service = Lightning;
        WalletBalance.readonly = requestStream = false;
        WalletBalance.readonly = responseStream = false;
        WalletBalance.readonly = requestType = rpc_pb.WalletBalanceRequest;
        WalletBalance.readonly = responseType = rpc_pb.WalletBalanceResponse;
        return WalletBalance;
    }());
    Lightning.WalletBalance = WalletBalance;
    var ChannelBalance = (function () {
        function ChannelBalance() {
        }
        ChannelBalance.readonly = methodName = "ChannelBalance";
        ChannelBalance.readonly = service = Lightning;
        ChannelBalance.readonly = requestStream = false;
        ChannelBalance.readonly = responseStream = false;
        ChannelBalance.readonly = requestType = rpc_pb.ChannelBalanceRequest;
        ChannelBalance.readonly = responseType = rpc_pb.ChannelBalanceResponse;
        return ChannelBalance;
    }());
    Lightning.ChannelBalance = ChannelBalance;
    var GetTransactions = (function () {
        function GetTransactions() {
        }
        GetTransactions.readonly = methodName = "GetTransactions";
        GetTransactions.readonly = service = Lightning;
        GetTransactions.readonly = requestStream = false;
        GetTransactions.readonly = responseStream = false;
        GetTransactions.readonly = requestType = rpc_pb.GetTransactionsRequest;
        GetTransactions.readonly = responseType = rpc_pb.TransactionDetails;
        return GetTransactions;
    }());
    Lightning.GetTransactions = GetTransactions;
    var SendCoins = (function () {
        function SendCoins() {
        }
        SendCoins.readonly = methodName = "SendCoins";
        SendCoins.readonly = service = Lightning;
        SendCoins.readonly = requestStream = false;
        SendCoins.readonly = responseStream = false;
        SendCoins.readonly = requestType = rpc_pb.SendCoinsRequest;
        SendCoins.readonly = responseType = rpc_pb.SendCoinsResponse;
        return SendCoins;
    }());
    Lightning.SendCoins = SendCoins;
    var SubscribeTransactions = (function () {
        function SubscribeTransactions() {
        }
        SubscribeTransactions.readonly = methodName = "SubscribeTransactions";
        SubscribeTransactions.readonly = service = Lightning;
        SubscribeTransactions.readonly = requestStream = false;
        SubscribeTransactions.readonly = responseStream = true;
        SubscribeTransactions.readonly = requestType = rpc_pb.GetTransactionsRequest;
        SubscribeTransactions.readonly = responseType = rpc_pb.Transaction;
        return SubscribeTransactions;
    }());
    Lightning.SubscribeTransactions = SubscribeTransactions;
    var SendMany = (function () {
        function SendMany() {
        }
        SendMany.readonly = methodName = "SendMany";
        SendMany.readonly = service = Lightning;
        SendMany.readonly = requestStream = false;
        SendMany.readonly = responseStream = false;
        SendMany.readonly = requestType = rpc_pb.SendManyRequest;
        SendMany.readonly = responseType = rpc_pb.SendManyResponse;
        return SendMany;
    }());
    Lightning.SendMany = SendMany;
    var NewAddress = (function () {
        function NewAddress() {
        }
        NewAddress.readonly = methodName = "NewAddress";
        NewAddress.readonly = service = Lightning;
        NewAddress.readonly = requestStream = false;
        NewAddress.readonly = responseStream = false;
        NewAddress.readonly = requestType = rpc_pb.NewAddressRequest;
        NewAddress.readonly = responseType = rpc_pb.NewAddressResponse;
        return NewAddress;
    }());
    Lightning.NewAddress = NewAddress;
    var NewWitnessAddress = (function () {
        function NewWitnessAddress() {
        }
        NewWitnessAddress.readonly = methodName = "NewWitnessAddress";
        NewWitnessAddress.readonly = service = Lightning;
        NewWitnessAddress.readonly = requestStream = false;
        NewWitnessAddress.readonly = responseStream = false;
        NewWitnessAddress.readonly = requestType = rpc_pb.NewWitnessAddressRequest;
        NewWitnessAddress.readonly = responseType = rpc_pb.NewAddressResponse;
        return NewWitnessAddress;
    }());
    Lightning.NewWitnessAddress = NewWitnessAddress;
    var SignMessage = (function () {
        function SignMessage() {
        }
        SignMessage.readonly = methodName = "SignMessage";
        SignMessage.readonly = service = Lightning;
        SignMessage.readonly = requestStream = false;
        SignMessage.readonly = responseStream = false;
        SignMessage.readonly = requestType = rpc_pb.SignMessageRequest;
        SignMessage.readonly = responseType = rpc_pb.SignMessageResponse;
        return SignMessage;
    }());
    Lightning.SignMessage = SignMessage;
    var VerifyMessage = (function () {
        function VerifyMessage() {
        }
        VerifyMessage.readonly = methodName = "VerifyMessage";
        VerifyMessage.readonly = service = Lightning;
        VerifyMessage.readonly = requestStream = false;
        VerifyMessage.readonly = responseStream = false;
        VerifyMessage.readonly = requestType = rpc_pb.VerifyMessageRequest;
        VerifyMessage.readonly = responseType = rpc_pb.VerifyMessageResponse;
        return VerifyMessage;
    }());
    Lightning.VerifyMessage = VerifyMessage;
    var ConnectPeer = (function () {
        function ConnectPeer() {
        }
        ConnectPeer.readonly = methodName = "ConnectPeer";
        ConnectPeer.readonly = service = Lightning;
        ConnectPeer.readonly = requestStream = false;
        ConnectPeer.readonly = responseStream = false;
        ConnectPeer.readonly = requestType = rpc_pb.ConnectPeerRequest;
        ConnectPeer.readonly = responseType = rpc_pb.ConnectPeerResponse;
        return ConnectPeer;
    }());
    Lightning.ConnectPeer = ConnectPeer;
    var DisconnectPeer = (function () {
        function DisconnectPeer() {
        }
        DisconnectPeer.readonly = methodName = "DisconnectPeer";
        DisconnectPeer.readonly = service = Lightning;
        DisconnectPeer.readonly = requestStream = false;
        DisconnectPeer.readonly = responseStream = false;
        DisconnectPeer.readonly = requestType = rpc_pb.DisconnectPeerRequest;
        DisconnectPeer.readonly = responseType = rpc_pb.DisconnectPeerResponse;
        return DisconnectPeer;
    }());
    Lightning.DisconnectPeer = DisconnectPeer;
    var ListPeers = (function () {
        function ListPeers() {
        }
        ListPeers.readonly = methodName = "ListPeers";
        ListPeers.readonly = service = Lightning;
        ListPeers.readonly = requestStream = false;
        ListPeers.readonly = responseStream = false;
        ListPeers.readonly = requestType = rpc_pb.ListPeersRequest;
        ListPeers.readonly = responseType = rpc_pb.ListPeersResponse;
        return ListPeers;
    }());
    Lightning.ListPeers = ListPeers;
    var GetInfo = (function () {
        function GetInfo() {
        }
        GetInfo.readonly = methodName = "GetInfo";
        GetInfo.readonly = service = Lightning;
        GetInfo.readonly = requestStream = false;
        GetInfo.readonly = responseStream = false;
        GetInfo.readonly = requestType = rpc_pb.GetInfoRequest;
        GetInfo.readonly = responseType = rpc_pb.GetInfoResponse;
        return GetInfo;
    }());
    Lightning.GetInfo = GetInfo;
    var PendingChannels = (function () {
        function PendingChannels() {
        }
        PendingChannels.readonly = methodName = "PendingChannels";
        PendingChannels.readonly = service = Lightning;
        PendingChannels.readonly = requestStream = false;
        PendingChannels.readonly = responseStream = false;
        PendingChannels.readonly = requestType = rpc_pb.PendingChannelRequest;
        PendingChannels.readonly = responseType = rpc_pb.PendingChannelResponse;
        return PendingChannels;
    }());
    Lightning.PendingChannels = PendingChannels;
    var ListChannels = (function () {
        function ListChannels() {
        }
        ListChannels.readonly = methodName = "ListChannels";
        ListChannels.readonly = service = Lightning;
        ListChannels.readonly = requestStream = false;
        ListChannels.readonly = responseStream = false;
        ListChannels.readonly = requestType = rpc_pb.ListChannelsRequest;
        ListChannels.readonly = responseType = rpc_pb.ListChannelsResponse;
        return ListChannels;
    }());
    Lightning.ListChannels = ListChannels;
    var OpenChannelSync = (function () {
        function OpenChannelSync() {
        }
        OpenChannelSync.readonly = methodName = "OpenChannelSync";
        OpenChannelSync.readonly = service = Lightning;
        OpenChannelSync.readonly = requestStream = false;
        OpenChannelSync.readonly = responseStream = false;
        OpenChannelSync.readonly = requestType = rpc_pb.OpenChannelRequest;
        OpenChannelSync.readonly = responseType = rpc_pb.ChannelPoint;
        return OpenChannelSync;
    }());
    Lightning.OpenChannelSync = OpenChannelSync;
    var OpenChannel = (function () {
        function OpenChannel() {
        }
        OpenChannel.readonly = methodName = "OpenChannel";
        OpenChannel.readonly = service = Lightning;
        OpenChannel.readonly = requestStream = false;
        OpenChannel.readonly = responseStream = true;
        OpenChannel.readonly = requestType = rpc_pb.OpenChannelRequest;
        OpenChannel.readonly = responseType = rpc_pb.OpenStatusUpdate;
        return OpenChannel;
    }());
    Lightning.OpenChannel = OpenChannel;
    var CloseChannel = (function () {
        function CloseChannel() {
        }
        CloseChannel.readonly = methodName = "CloseChannel";
        CloseChannel.readonly = service = Lightning;
        CloseChannel.readonly = requestStream = false;
        CloseChannel.readonly = responseStream = true;
        CloseChannel.readonly = requestType = rpc_pb.CloseChannelRequest;
        CloseChannel.readonly = responseType = rpc_pb.CloseStatusUpdate;
        return CloseChannel;
    }());
    Lightning.CloseChannel = CloseChannel;
    var SendPayment = (function () {
        function SendPayment() {
        }
        SendPayment.readonly = methodName = "SendPayment";
        SendPayment.readonly = service = Lightning;
        SendPayment.readonly = requestStream = true;
        SendPayment.readonly = responseStream = true;
        SendPayment.readonly = requestType = rpc_pb.SendRequest;
        SendPayment.readonly = responseType = rpc_pb.SendResponse;
        return SendPayment;
    }());
    Lightning.SendPayment = SendPayment;
    var SendPaymentSync = (function () {
        function SendPaymentSync() {
        }
        SendPaymentSync.readonly = methodName = "SendPaymentSync";
        SendPaymentSync.readonly = service = Lightning;
        SendPaymentSync.readonly = requestStream = false;
        SendPaymentSync.readonly = responseStream = false;
        SendPaymentSync.readonly = requestType = rpc_pb.SendRequest;
        SendPaymentSync.readonly = responseType = rpc_pb.SendResponse;
        return SendPaymentSync;
    }());
    Lightning.SendPaymentSync = SendPaymentSync;
    var AddInvoice = (function () {
        function AddInvoice() {
        }
        AddInvoice.readonly = methodName = "AddInvoice";
        AddInvoice.readonly = service = Lightning;
        AddInvoice.readonly = requestStream = false;
        AddInvoice.readonly = responseStream = false;
        AddInvoice.readonly = requestType = rpc_pb.Invoice;
        AddInvoice.readonly = responseType = rpc_pb.AddInvoiceResponse;
        return AddInvoice;
    }());
    Lightning.AddInvoice = AddInvoice;
    var ListInvoices = (function () {
        function ListInvoices() {
        }
        ListInvoices.readonly = methodName = "ListInvoices";
        ListInvoices.readonly = service = Lightning;
        ListInvoices.readonly = requestStream = false;
        ListInvoices.readonly = responseStream = false;
        ListInvoices.readonly = requestType = rpc_pb.ListInvoiceRequest;
        ListInvoices.readonly = responseType = rpc_pb.ListInvoiceResponse;
        return ListInvoices;
    }());
    Lightning.ListInvoices = ListInvoices;
    var LookupInvoice = (function () {
        function LookupInvoice() {
        }
        LookupInvoice.readonly = methodName = "LookupInvoice";
        LookupInvoice.readonly = service = Lightning;
        LookupInvoice.readonly = requestStream = false;
        LookupInvoice.readonly = responseStream = false;
        LookupInvoice.readonly = requestType = rpc_pb.PaymentHash;
        LookupInvoice.readonly = responseType = rpc_pb.Invoice;
        return LookupInvoice;
    }());
    Lightning.LookupInvoice = LookupInvoice;
    var SubscribeInvoices = (function () {
        function SubscribeInvoices() {
        }
        SubscribeInvoices.readonly = methodName = "SubscribeInvoices";
        SubscribeInvoices.readonly = service = Lightning;
        SubscribeInvoices.readonly = requestStream = false;
        SubscribeInvoices.readonly = responseStream = true;
        SubscribeInvoices.readonly = requestType = rpc_pb.InvoiceSubscription;
        SubscribeInvoices.readonly = responseType = rpc_pb.Invoice;
        return SubscribeInvoices;
    }());
    Lightning.SubscribeInvoices = SubscribeInvoices;
    var DecodePayReq = (function () {
        function DecodePayReq() {
        }
        DecodePayReq.readonly = methodName = "DecodePayReq";
        DecodePayReq.readonly = service = Lightning;
        DecodePayReq.readonly = requestStream = false;
        DecodePayReq.readonly = responseStream = false;
        DecodePayReq.readonly = requestType = rpc_pb.PayReqString;
        DecodePayReq.readonly = responseType = rpc_pb.PayReq;
        return DecodePayReq;
    }());
    Lightning.DecodePayReq = DecodePayReq;
    var ListPayments = (function () {
        function ListPayments() {
        }
        ListPayments.readonly = methodName = "ListPayments";
        ListPayments.readonly = service = Lightning;
        ListPayments.readonly = requestStream = false;
        ListPayments.readonly = responseStream = false;
        ListPayments.readonly = requestType = rpc_pb.ListPaymentsRequest;
        ListPayments.readonly = responseType = rpc_pb.ListPaymentsResponse;
        return ListPayments;
    }());
    Lightning.ListPayments = ListPayments;
    var DeleteAllPayments = (function () {
        function DeleteAllPayments() {
        }
        DeleteAllPayments.readonly = methodName = "DeleteAllPayments";
        DeleteAllPayments.readonly = service = Lightning;
        DeleteAllPayments.readonly = requestStream = false;
        DeleteAllPayments.readonly = responseStream = false;
        DeleteAllPayments.readonly = requestType = rpc_pb.DeleteAllPaymentsRequest;
        DeleteAllPayments.readonly = responseType = rpc_pb.DeleteAllPaymentsResponse;
        return DeleteAllPayments;
    }());
    Lightning.DeleteAllPayments = DeleteAllPayments;
    var DescribeGraph = (function () {
        function DescribeGraph() {
        }
        DescribeGraph.readonly = methodName = "DescribeGraph";
        DescribeGraph.readonly = service = Lightning;
        DescribeGraph.readonly = requestStream = false;
        DescribeGraph.readonly = responseStream = false;
        DescribeGraph.readonly = requestType = rpc_pb.ChannelGraphRequest;
        DescribeGraph.readonly = responseType = rpc_pb.ChannelGraph;
        return DescribeGraph;
    }());
    Lightning.DescribeGraph = DescribeGraph;
    var GetChanInfo = (function () {
        function GetChanInfo() {
        }
        GetChanInfo.readonly = methodName = "GetChanInfo";
        GetChanInfo.readonly = service = Lightning;
        GetChanInfo.readonly = requestStream = false;
        GetChanInfo.readonly = responseStream = false;
        GetChanInfo.readonly = requestType = rpc_pb.ChanInfoRequest;
        GetChanInfo.readonly = responseType = rpc_pb.ChannelEdge;
        return GetChanInfo;
    }());
    Lightning.GetChanInfo = GetChanInfo;
    var GetNodeInfo = (function () {
        function GetNodeInfo() {
        }
        GetNodeInfo.readonly = methodName = "GetNodeInfo";
        GetNodeInfo.readonly = service = Lightning;
        GetNodeInfo.readonly = requestStream = false;
        GetNodeInfo.readonly = responseStream = false;
        GetNodeInfo.readonly = requestType = rpc_pb.NodeInfoRequest;
        GetNodeInfo.readonly = responseType = rpc_pb.NodeInfo;
        return GetNodeInfo;
    }());
    Lightning.GetNodeInfo = GetNodeInfo;
    var QueryRoutes = (function () {
        function QueryRoutes() {
        }
        QueryRoutes.readonly = methodName = "QueryRoutes";
        QueryRoutes.readonly = service = Lightning;
        QueryRoutes.readonly = requestStream = false;
        QueryRoutes.readonly = responseStream = false;
        QueryRoutes.readonly = requestType = rpc_pb.QueryRoutesRequest;
        QueryRoutes.readonly = responseType = rpc_pb.QueryRoutesResponse;
        return QueryRoutes;
    }());
    Lightning.QueryRoutes = QueryRoutes;
    var GetNetworkInfo = (function () {
        function GetNetworkInfo() {
        }
        GetNetworkInfo.readonly = methodName = "GetNetworkInfo";
        GetNetworkInfo.readonly = service = Lightning;
        GetNetworkInfo.readonly = requestStream = false;
        GetNetworkInfo.readonly = responseStream = false;
        GetNetworkInfo.readonly = requestType = rpc_pb.NetworkInfoRequest;
        GetNetworkInfo.readonly = responseType = rpc_pb.NetworkInfo;
        return GetNetworkInfo;
    }());
    Lightning.GetNetworkInfo = GetNetworkInfo;
    var StopDaemon = (function () {
        function StopDaemon() {
        }
        StopDaemon.readonly = methodName = "StopDaemon";
        StopDaemon.readonly = service = Lightning;
        StopDaemon.readonly = requestStream = false;
        StopDaemon.readonly = responseStream = false;
        StopDaemon.readonly = requestType = rpc_pb.StopRequest;
        StopDaemon.readonly = responseType = rpc_pb.StopResponse;
        return StopDaemon;
    }());
    Lightning.StopDaemon = StopDaemon;
    var SubscribeChannelGraph = (function () {
        function SubscribeChannelGraph() {
        }
        SubscribeChannelGraph.readonly = methodName = "SubscribeChannelGraph";
        SubscribeChannelGraph.readonly = service = Lightning;
        SubscribeChannelGraph.readonly = requestStream = false;
        SubscribeChannelGraph.readonly = responseStream = true;
        SubscribeChannelGraph.readonly = requestType = rpc_pb.GraphTopologySubscription;
        SubscribeChannelGraph.readonly = responseType = rpc_pb.GraphTopologyUpdate;
        return SubscribeChannelGraph;
    }());
    Lightning.SubscribeChannelGraph = SubscribeChannelGraph;
    var SetAlias = (function () {
        function SetAlias() {
        }
        SetAlias.readonly = methodName = "SetAlias";
        SetAlias.readonly = service = Lightning;
        SetAlias.readonly = requestStream = false;
        SetAlias.readonly = responseStream = false;
        SetAlias.readonly = requestType = rpc_pb.SetAliasRequest;
        SetAlias.readonly = responseType = rpc_pb.SetAliasResponse;
        return SetAlias;
    }());
    Lightning.SetAlias = SetAlias;
    var DebugLevel = (function () {
        function DebugLevel() {
        }
        DebugLevel.readonly = methodName = "DebugLevel";
        DebugLevel.readonly = service = Lightning;
        DebugLevel.readonly = requestStream = false;
        DebugLevel.readonly = responseStream = false;
        DebugLevel.readonly = requestType = rpc_pb.DebugLevelRequest;
        DebugLevel.readonly = responseType = rpc_pb.DebugLevelResponse;
        return DebugLevel;
    }());
    Lightning.DebugLevel = DebugLevel;
})(Lightning = exports.Lightning || (exports.Lightning = {}));
