const router = (require('express').Router)();
const grpc = require('grpc-web-client').grpc;
const Code = require('grpc-web-client').Code;
const Lightning = require('./../libs/_rpc_pb_service').Lightning;
const Invoice = require('./../libs/rpc_pb').Invoice;
const PaymentHash = require('./../libs/rpc_pb').PaymentHash;
const log = require('./../logger');
const configNode = require('./../config/nodeConfig');

router.get('/addInvoice', function (req, res) {
    let invoiceRequest = new Invoice();

    //Somebody should set amount on server-side or check user amount
    invoiceRequest.setValue(123433);
    grpc.unary(Lightning.AddInvoice, {
        request: invoiceRequest,
        host: configNode.host,
        onEnd: function(result) {
            let status = result.status;
            let message = result.message;
            if (status === Code.OK && message) {
                res.send({
                    status: 200,
                    response: message.toObject()
                });
            } else {
                log.error(result);
                res.send({
                    status: 500,
                    response: result
                });
            }
        }
    });
});

router.get('/checkInvoice/:rHash', function (req, res) {
    const rHash = req.params.id;
    let paymenthash = new PaymentHash();
    paymenthash.setRHashStr(rHash);

    grpc.unary(Lightning.LookupInvoice, {
        request: paymenthash,
        host: configNode.host,
        onEnd: function(result) {
            let status = result.status;
            let message = result.message;
            if (status === Code.OK && message) {
                res.send({
                    status: 200,
                    response: message.toObject()
                });
            } else {
                log.error(result);
                res.send({
                    status: 500,
                    response: result
                });
            }
        }
    });
});

module.exports = router;