// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

const makeChange = require('../index.js').makeChange;

describe('makeChange()', function(){
  it('returns the quantities of coins necessary to make change, without overpaying', function(){
    //      Q, D, N, P
    expect([0, 0, 0, 1]).to.deep.equal(makeChange(4.99, 5.00));
    expect([0, 0, 1, 0]).to.deep.equal(makeChange(4.95, 5.00));
    expect([0, 2, 0, 0]).to.deep.equal(makeChange(4.80, 5.00));
    expect([8, 0, 0, 0]).to.deep.equal(makeChange(3.00, 5.00));
    expect([2, 1, 1, 4]).to.deep.equal(makeChange(4.31, 5.00));
  });
  context('if the payment is less than the price', function(){
    it('returns an array of zeroes', function(){
      expect([0, 0, 0, 0]).to.deep.equal(makeChange(5.00, 3.00));
      expect([0, 0, 0, 0]).to.deep.equal(makeChange(5.00, 4.31));
    });
  });
});
