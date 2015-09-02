/* eslint-disable new-cap */
/* eslint-disable max-len */
'use strict';

var assert = require('assert');
var fixtures = require('./fixtures').restConverter;
var addresses = require('./../fixtures').addresses;
var createPaymentTransaction =
  require('./../../api/transaction/payment').createPaymentTransaction;
var ACCOUNT = addresses.VALID;

suite('unit - createPaymentTransaction', function() {
  test('payment with IOU and issuer', function() {
    var transaction = createPaymentTransaction(ACCOUNT, fixtures.paymentRest);
    assert.deepEqual(transaction.summary(), fixtures.paymentTx);
  });

  test('payment with IOU and empty paths', function() {
    var transaction = createPaymentTransaction(ACCOUNT, fixtures.exportsPaymentRestIssuers({
      paths: '[]'
    }));
    assert.strictEqual(transaction.tx_json.Paths, undefined);
  });

  test('payment with XRP and no source amount', function() {
    var transaction = createPaymentTransaction(ACCOUNT,
      fixtures.paymentRestXRP);
    assert.deepEqual(transaction.summary(), fixtures.paymentTxXRP);
    assert.strictEqual(transaction.tx_json.SendMax, undefined);
  });

  test(' payment XRP to XRP', function() {
    var transaction = createPaymentTransaction(ACCOUNT,
      fixtures.paymentRestXRPtoXRP);
    assert.strictEqual(transaction.tx_json.SendMax, undefined);
    assert.strictEqual(transaction.tx_json.Paths, undefined);
  });

  test(' payment XRP to non-XRP', function() {
    var transaction =
      createPaymentTransaction(ACCOUNT, fixtures.exportsPaymentRestIssuers({
        sourceAccount: addresses.VALID,
        sourceAmount: '10',
        sourceCurrency: 'XRP',
        destinationAccount: addresses.COUNTERPARTY,
        sourceIssuer: '',
        destinationIssuer: addresses.ISSUER
    }));
    assert.strictEqual(transaction.tx_json.SendMax, '10000000');
  });

  test('payment with additional flags', function() {
    var transaction = createPaymentTransaction(ACCOUNT,
      fixtures.paymentRestComplex);
    assert.deepEqual(transaction.summary(), fixtures.paymentTxComplex);
  });

  test('payment with currency that has same issuer for source and destination amount', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      destinationAccount: addresses.COUNTERPARTY,
      sourceIssuer: addresses.ISSUER,
      destinationIssuer: addresses.ISSUER
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10',
      currency: 'USD',
      issuer: addresses.ISSUER
    });
  });

  test('payment with currency that has different issuers for source and destination amount', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      destinationAccount: addresses.COUNTERPARTY,
      sourceIssuer: addresses.VALID2,
      destinationIssuer: addresses.ISSUER2
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10',
      currency: 'USD',
      issuer: addresses.VALID2
    });
  });

  test('payment with currency that has different issuers for source and destination amount and a source_slippage of 0.1', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      destinationAccount: addresses.COUNTERPARTY,
      sourceIssuer: addresses.VALID2,
      destinationIssuer: addresses.ISSUER2,
      sourceSlippage: '0.1',
      sourceAmount: '10'
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10.1',
      currency: 'USD',
      issuer: addresses.VALID2
    });
  });

  test('payment with same currency for source and destination, no issuer for source amount', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      destinationAccount: addresses.COUNTERPARTY,
      sourceIssuer: ''
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10',
      currency: 'USD',
      issuer: addresses.VALID
    });
  });

  test('payment with same currency for source and destination, no issuer for source and destination amount', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      sourceIssuer: '',
      destinationAccount: addresses.COUNTERPARTY,
      destinationIssuer: ''
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10',
      currency: 'USD',
      issuer: addresses.VALID
    });
  });

  test('payment with same currency for source and destination, no issuer for destination amount', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      sourceIssuer: addresses.VALID, // source account is source issuer
      destinationAccount: addresses.COUNTERPARTY,
      destinationIssuer: ''
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10',
      currency: 'USD',
      issuer: addresses.VALID
    });
  });

  test('payment with same currency for source and destination, issuers are source and destination', function() {
    var payment = fixtures.exportsPaymentRestIssuers({
      sourceAccount: addresses.VALID,
      sourceIssuer: addresses.VALID, // source account is source issuer
      destinationAccount: addresses.COUNTERPARTY,
      destinationIssuer: addresses.COUNTERPARTY // destination account is destination issuer
    });
    var transaction = createPaymentTransaction(ACCOUNT, payment);
    assert.deepEqual(transaction.tx_json.SendMax, {
      value: '10',
      currency: 'USD',
      issuer: addresses.VALID
    });
  });
});
