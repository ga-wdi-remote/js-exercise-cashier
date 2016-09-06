// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";

const assert = require('assert');
const makeChange = require('../index.js').makeChange;

describe('makeChange()', function(){
  context('when given a "denominations" array as an optional argument', function(){
    it('returns an equal-sized array to the "denominations" array', function(){
      assert.deepStrictEqual(1, makeChange(3.31, 5.00, [1]).length);
      assert.deepStrictEqual(4, makeChange(3.31, 5.00, [100, 50, 25, 1]).length);
    });
    it('returns the returns the quantities of the coins specified by the "denominations" array necessary to make change, without overpaying', function(){
      assert.deepStrictEqual([169], makeChange(3.31, 5.00, [1]));
      assert.deepStrictEqual([1, 1, 0, 19], makeChange(3.31, 5.00, [100, 50, 25, 1]));
    });
    context('where it is not possible to make change with the given denominations', function(){
      it('will round down, and give the maximum possible change without going over', function(){
        assert.deepStrictEqual([1, 1], makeChange(3.31, 5.00, [100, 50]));
        assert.deepStrictEqual([1, 1, 1], makeChange(3.31, 5.00, [100, 50, 10]));
        assert.deepStrictEqual([1, 1, 1, 1], makeChange(3.31, 5.00, [100, 50, 10, 5]));
        assert.deepStrictEqual([1, 1, 1, 1, 1], makeChange(3.31, 5.00, [100, 50, 10, 5, 3]));
        assert.deepStrictEqual([1, 1, 1, 1, 4], makeChange(3.31, 5.00, [100, 50, 10, 5, 1]));
      });
    });
  });
});
