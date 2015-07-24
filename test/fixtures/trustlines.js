/* eslint-disable max-len */
'use strict';
var _ = require('lodash');
var addresses = require('./../fixtures').addresses;

var DEFAULTS = {
  account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
  flags: 2147483648,
  hash: '0F480D344CFC610DFA5CAC62CC1621C92953A05FE8C319281CA49C5C162AF40E',
  currency: 'USD',
  limit: '1'
};

module.exports.requestPath = function(address, params) {
  return '/v1/accounts/' + address + '/trustlines' + (params || '');
};

module.exports.accountLinesResponse = function(request, options) {
  options = options || {};

  _.defaults(options, {
    validated: true
  });

  return JSON.stringify({
    id: request.id,
    status: 'success',
    type: 'response',
    result: {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      marker: options.marker,
      limit: request.limit,
      ledger_index: options.ledger,
      validated: options.validated,
      lines: [
        {
        account: 'r3vi7mWxru9rJCxETCyA1CHvzL96eZWx5z',
        balance: '0',
        currency: 'ASP',
        limit: '0',
        limit_peer: '10',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'r3vi7mWxru9rJCxETCyA1CHvzL96eZWx5z',
        balance: '0',
        currency: 'XAU',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: addresses.COUNTERPARTY,
        balance: '2.497605752725159',
        currency: 'USD',
        limit: '5',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rHpXfibHgSb64n8kK9QWDpdbfqSpYbM9a4',
        balance: '481.992867407479',
        currency: 'MXN',
        limit: '1000',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun',
        balance: '0.793598266778297',
        currency: 'EUR',
        limit: '1',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK',
        balance: '0',
        currency: 'CNY',
        limit: '3',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rGwUWgN5BEg3QGNY3RX2HfYowjUTZdid3E',
        balance: '1.294889190631542',
        currency: 'DYM',
        limit: '3',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        balance: '0.3488146605801446',
        currency: 'CHF',
        limit: '0',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        balance: '2.114103174931847',
        currency: 'BTC',
        limit: '3',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        balance: '0',
        currency: 'USD',
        limit: '5000',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rpgKWEmNqSDAGFhy5WDnsyPqfQxbWxKeVd',
        balance: '-0.00111',
        currency: 'BTC',
        limit: '0',
        limit_peer: '10',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rBJ3YjwXi2MGbg7GVLuTXUWQ8DjL7tDXh4',
        balance: '-0.1010780000080207',
        currency: 'BTC',
        limit: '0',
        limit_peer: '10',
        quality_in: 0,
        quality_out: 0,
        freeze_peer: true
      },
      {
        account: 'rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun',
        balance: '1',
        currency: 'USD',
        limit: '1',
        limit_peer: '0',
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA',
        balance: '8.07619790068559',
        currency: 'CNY',
        limit: '100',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        balance: '7.292695098901099',
        currency: 'JPY',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0,
        freeze: true
      },
      {
        account: 'r3vi7mWxru9rJCxETCyA1CHvzL96eZWx5z',
        balance: '0',
        currency: 'AUX',
        limit: '0',
        limit_peer: '0',
        no_ripple: true,
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'r9vbV3EHvXWjSkeQ6CAcYVPGeq7TuiXY2X',
        balance: '0',
        currency: 'USD',
        limit: '1',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
        balance: '12.41688780720394',
        currency: 'EUR',
        limit: '100',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rfF3PNkwkq1DygW2wum2HK3RGfgkJjdPVD',
        balance: '35',
        currency: 'USD',
        limit: '500',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rwUVoVMSURqNyvocPCcvLu3ygJzZyw8qwp',
        balance: '-5',
        currency: 'JOE',
        limit: '0',
        limit_peer: '50',
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2',
        balance: '0',
        currency: 'USD',
        limit: '0',
        limit_peer: '100',
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2',
        balance: '0',
        currency: 'JOE',
        limit: '0',
        limit_peer: '100',
        no_ripple_peer: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rs9M85karFkCRjvc6KMWn8Coigm9cbcgcx',
        balance: '0',
        currency: '015841551A748AD2C1F76FF6ECB0CCCD00000000',
        limit: '10.01037626125837',
        limit_peer: '0',
        no_ripple: true,
        quality_in: 0,
        quality_out: 0
      },
      {
        account: 'rEhDDUUNxpXgEHVJtC2cjXAgyx5VCFxdMF',
        balance: '0',
        currency: 'USD',
        limit: '0',
        limit_peer: '1',
        quality_in: 0,
        quality_out: 0
      }
      ]
    }
  });
};

module.exports.RESTAccountTrustlinesResponse = function(options) {
  options = options || {};

  _.defaults(options, {
    validated: true,
    limit: 200
  });

  return JSON.stringify({
    success: true,
    marker: options.marker,
    limit: options.limit,
    ledger: options.ledger,
    validated: options.validated,
    trustlines: [
      {
        account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
        counterparty: 'r3vi7mWxru9rJCxETCyA1CHvzL96eZWx5z',
        currency: 'ASP',
        limit: '0',
        reciprocated_limit: '10',
        account_allows_rippling: true,
        counterparty_allows_rippling: true,
        account_trustline_frozen: false,
        counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'r3vi7mWxru9rJCxETCyA1CHvzL96eZWx5z',
      currency: 'XAU',
      limit: '0',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: false,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: addresses.COUNTERPARTY,
      currency: 'USD',
      limit: '5',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rHpXfibHgSb64n8kK9QWDpdbfqSpYbM9a4',
      currency: 'MXN',
      limit: '1000',
      reciprocated_limit: '0',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun',
      currency: 'EUR',
      limit: '1',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK',
      currency: 'CNY',
      limit: '3',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rGwUWgN5BEg3QGNY3RX2HfYowjUTZdid3E',
      currency: 'DYM',
      limit: '3',
      reciprocated_limit: '0',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
      currency: 'CHF',
      limit: '0',
      reciprocated_limit: '0',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
      currency: 'BTC',
      limit: '3',
      reciprocated_limit: '0',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
      currency: 'USD',
      limit: '5000',
      reciprocated_limit: '0',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rpgKWEmNqSDAGFhy5WDnsyPqfQxbWxKeVd',
      currency: 'BTC',
      limit: '0',
      reciprocated_limit: '10',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rBJ3YjwXi2MGbg7GVLuTXUWQ8DjL7tDXh4',
      currency: 'BTC',
      limit: '0',
      reciprocated_limit: '10',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: true
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rLEsXccBGNR3UPuPu2hUXPjziKC3qKSBun',
      currency: 'USD',
      limit: '1',
      reciprocated_limit: '0',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'razqQKzJRdB4UxFPWf5NEpEG3WMkmwgcXA',
      currency: 'CNY',
      limit: '100',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
      currency: 'JPY',
      limit: '0',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: true,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'r3vi7mWxru9rJCxETCyA1CHvzL96eZWx5z',
      currency: 'AUX',
      limit: '0',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: false,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'r9vbV3EHvXWjSkeQ6CAcYVPGeq7TuiXY2X',
      currency: 'USD',
      limit: '1',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
      currency: 'EUR',
      limit: '100',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rfF3PNkwkq1DygW2wum2HK3RGfgkJjdPVD',
      currency: 'USD',
      limit: '500',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rwUVoVMSURqNyvocPCcvLu3ygJzZyw8qwp',
      currency: 'JOE',
      limit: '0',
      reciprocated_limit: '50',
      account_allows_rippling: true,
      counterparty_allows_rippling: false,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2',
      currency: 'USD',
      limit: '0',
      reciprocated_limit: '100',
      account_allows_rippling: true,
      counterparty_allows_rippling: false,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rE6R3DWF9fBD7CyiQciePF9SqK58Ubp8o2',
      currency: 'JOE',
      limit: '0',
      reciprocated_limit: '100',
      account_allows_rippling: true,
      counterparty_allows_rippling: false,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rs9M85karFkCRjvc6KMWn8Coigm9cbcgcx',
      currency: '015841551A748AD2C1F76FF6ECB0CCCD00000000',
      limit: '10.01037626125837',
      reciprocated_limit: '0',
      account_allows_rippling: false,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    },
    {
      account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
      counterparty: 'rEhDDUUNxpXgEHVJtC2cjXAgyx5VCFxdMF',
      currency: 'USD',
      limit: '0',
      reciprocated_limit: '1',
      account_allows_rippling: true,
      counterparty_allows_rippling: true,
      account_trustline_frozen: false,
      counterparty_trustline_frozen: false
    }
    ]
  });
};

module.exports.submitTrustlineResponse = function(request, options) {
  options = options || {};
  _.defaults(options, DEFAULTS);

  return JSON.stringify({
    id: request.id,
    result: {
      engine_result: 'tesSUCCESS',
      engine_result_code: 0,
      engine_result_message: 'The transaction was applied.',
      tx_blob: request.tx_blob,
      tx_json: {
        Account: options.account,
        Fee: '12',
        Flags: options.flags,
        LastLedgerSequence: 8819963,
        LimitAmount: {
          currency: options.currency,
          issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
          value: options.limit
        },
        Sequence: 3054,
        SigningPubKey: '0306E9F38DF11402953A5B030C1AE8A88C47E348170C3B8EC6C8D775E797168462',
        TransactionType: 'TrustSet',
        TxnSignature: '304402202604A313678AC3BEC1A3C46A556258A512422ACB5EB0034D9024DDB45316F1BD02207AD751BF27C937AD5001ADD551312933C67670086155FA0B8B8107452CD00E41',
        hash: options.hash
      }
    },
    status: 'success',
    type: 'response'
  });
};

module.exports.ledgerSequenceTooHighResponse = function(request, options) {
  options = options || {};
  _.defaults(options, {
    hash: '0F480D344CFC610DFA5CAC62CC1621C92953A05FE8C319281CA49C5C162AF40E'
  });
  return JSON.stringify({
    id: request.id,
    result: {
      engine_result: 'tefMAX_LEDGER',
      engine_result_code: -186,
      engine_result_message: 'Ledger sequence too high.',
      tx_blob: request.tx_blob,
      tx_json: {
        Account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
        Fee: '12',
        Flags: 2147483648,
        LastLedgerSequence: 8819963,
        LimitAmount: {
          currency: 'USD',
          issuer: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
          value: '1'
        },
        Sequence: 3054,
        SigningPubKey: '0306E9F38DF11402953A5B030C1AE8A88C47E348170C3B8EC6C8D775E797168462',
        TransactionType: 'TrustSet',
        TxnSignature: '304402202604A313678AC3BEC1A3C46A556258A512422ACB5EB0034D9024DDB45316F1BD02207AD751BF27C937AD5001ADD551312933C67670086155FA0B8B8107452CD00E41',
        hash: options.hash
      }
    },
    status: 'success',
    type: 'response'
  });
};

module.exports.setTrustValidatedResponse = function(options) {
  options = options || {};
  _.defaults(options, DEFAULTS);

  return JSON.stringify({
    engine_result: 'tesSUCCESS',
    engine_result_code: 0,
    engine_result_message: 'The transaction was applied.',
    ledger_hash: 'E0B48625C74115865D83F777081163D1C33144AD11A3104292720092D2183770',
    ledger_index: 9810402,
    meta: {
      AffectedNodes: [
        {
          ModifiedNode: {
            FinalFields: {
              Account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
              Balance: '792505355',
              Flags: 0,
              OwnerCount: 3,
              Sequence: 12
            },
            LedgerEntryType: 'AccountRoot',
            LedgerIndex: '25FF5CC1037AE7E2C491A2E4C6206CBE31D0F1609B6426E6E8C3626BAC8C3439',
            PreviousFields: {
              Balance: '792505367',
              Sequence: 11
            },
            PreviousTxnID: 'B7B913FC00AE7838238F5021CE88ED8A5D408110726BED719BDC2A024FAE793D',
            PreviousTxnLgrSeq: 9791833
          }
        },
        {
          ModifiedNode: {
            FinalFields: {
              Balance: {
                currency: 'USD',
                issuer: 'rrrrrrrrrrrrrrrrrrrrBZbvji',
                value: '0.2899999999999999'
              },
              Flags: 1114112,
              HighLimit: {
                currency: 'USD',
                issuer: addresses.COUNTERPARTY,
                value: '0'
              },
              HighNode: '0000000000000163',
              LowLimit: {
                currency: 'USD',
                issuer: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
                value: options.limit
              },
              LowNode: '0000000000000000'
            },
            LedgerEntryType: 'RippleState',
            LedgerIndex: '620379E07473AAE2E6CCCB196AE9DD13C5D036C4B47211BB3DAA55D019CB2226',
            PreviousFields: {
              Flags: 65536
            },
            PreviousTxnID: 'A1344FACEAE2FA0EC795A1A64B972F144DDBBB1441B9C253BF63AC6294258287',
            PreviousTxnLgrSeq: 9791722
          }
        }
      ],
      TransactionIndex: 0,
      TransactionResult: 'tesSUCCESS'
    },
    status: 'closed',
    transaction: {
      Account: options.account,
      Fee: '12',
      Flags: options.flags,
      LastLedgerSequence: 9810409,
      LimitAmount: {
        currency: 'USD',
        issuer: addresses.COUNTERPARTY,
        value: options.limit
      },
      Sequence: 11,
      SigningPubKey: '02AFA3692CC78A804ACC11DBA23DBB99943C6F8D61D3CB07BBE6D28356EB5B9C57',
      TransactionType: 'TrustSet',
      TxnSignature: '304402201178957B6ABB7673DB21F05C58E66061D5C753B9D63158032B0C1CC9CB68C94802203CEB99C8B72BB33EF63684B2A6BF77A232448ECACBB5FFC9FD8DCC8065948847',
      date: 468718190,
      hash: options.hash
    },
    type: 'transaction',
    validated: true
  });
};

module.exports.prepareTrustLineRequest = {
  secret: addresses.SECRET,
  trustline: {
    limit: '1',
    currency: 'USD',
    counterparty: addresses.COUNTERPARTY
  }
};

module.exports.prepareTrustLineResponse = JSON.stringify({
  success: true,
  tx_blob: '12001422000000002400000017201B008694F363D4838D7EA4C6800000000000000000000000000055534400000000000A20B3C85F482532A9578DBB3950B85CA06594D168400000000000000C732102F89EAEC7667B30F33D0687BBA86C3FE2A08CCA40A9186C5BDE2DAA6FA97A37D87446304402207660BDEF67105CE1EBA9AD35DC7156BAB43FF1D47633199EE257D70B6B9AAFBF022078CE777AB818E24DB16822C0ECC920D2F014D4771D2DE644CD02B573F044309981144FBFF73DA4ECF9B701940F27341FA8020C313443',
  hash: '5D873BA38AB5C5955CE4FA0F69D141A9F8CCBCEAE146E94E126FDC2A5D6C3203',
  trustline: {
    account: 'r3GgMwvgvP8h4yVWvjH1dPZNvC37TjzBBE',
    limit: '1',
    currency: 'USD',
    counterparty: 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B',
    account_allows_rippling: true,
    account_trustline_frozen: false
  },
  tx_json: {
    Flags: 0,
    TransactionType: 'TrustSet',
    Account: addresses.VALID,
    LimitAmount: {
      value: '1',
      currency: 'USD',
      issuer: addresses.COUNTERPARTY
    },
    LastLedgerSequence: 8819955,
    Fee: '12',
    Sequence: 23,
    SigningPubKey: '02F89EAEC7667B30F33D0687BBA86C3FE2A08CCA40A9186C5BDE2DAA6FA97A37D8',
    TxnSignature: '304402207660BDEF67105CE1EBA9AD35DC7156BAB43FF1D47633199EE257D70B6B9AAFBF022078CE777AB818E24DB16822C0ECC920D2F014D4771D2DE644CD02B573F0443099'
  }
});
