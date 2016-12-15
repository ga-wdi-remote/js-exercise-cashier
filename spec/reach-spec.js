// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

const makeChange = require('../index.js').makeChange;

describe('makeChange()', function(){
  context('when given a "denominations" array as an optional argument', function(){
    it('returns an equal-sized array to the "denominations" array', function(){
      expect(makeChange(3.31, 5.00, [1]).length).to.equal(1);
      expect(makeChange(3.31, 5.00, [100, 50, 25, 1]).length).to.equal(4);
    });
    it('returns the returns the quantities of the coins specified by the "denominations" array necessary to make change, without overpaying', function(){
      expect(makeChange(3.31, 5.00, [1])).to.deep.equal([169]);
      expect(makeChange(3.31, 5.00, [100, 50, 25, 1])).to.deep.equal([1, 1, 0, 19]);
    });
    context('where it is not possible to make change with the given denominations', function(){
      it('will round down, and give the maximum possible change without going over', function(){
        expect(makeChange(3.31, 5.00, [100, 50])).to.deep.equal([1, 1]);
        expect(makeChange(3.31, 5.00, [100, 50, 10])).to.deep.equal([1, 1, 1]);
        expect(makeChange(3.31, 5.00, [100, 50, 10, 5])).to.deep.equal([1, 1, 1, 1]);
        expect(makeChange(3.31, 5.00, [100, 50, 10, 5, 3])).to.deep.equal([1, 1, 1, 1, 1]);
        expect(makeChange(3.31, 5.00, [100, 50, 10, 5, 1])).to.deep.equal([1, 1, 1, 1, 4]);
      });
    });
  });
});
