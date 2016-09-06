// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const assert = require('assert');
const makeChange = require('../index.js').makeChange;

describe('makeChange()', function(){
  it('returns the quantities of coins necessary to make change, without overpaying', function(){
    //                      Q, D, N, P
    assert.deepStrictEqual([0, 0, 0, 1], makeChange(4.99, 5.00));
    assert.deepStrictEqual([0, 0, 1, 0], makeChange(4.95, 5.00));
    assert.deepStrictEqual([0, 2, 0, 0], makeChange(4.80, 5.00));
    assert.deepStrictEqual([8, 0, 0, 0], makeChange(3.00, 5.00));
    assert.deepStrictEqual([2, 1, 1, 4], makeChange(4.31, 5.00));
  });
  context('if the payment is less than the price', function(){
    it('returns an array of zeroes', function(){
      assert.deepStrictEqual([0, 0, 0, 0], makeChange(5.00, 3.00));
      assert.deepStrictEqual([0, 0, 0, 0], makeChange(5.00, 4.31));
    });
  });
});
