/* global describe, it */

(function () {
    'use strict';

    describe('The image slider.', function () {
     it('Should correctly show hidden image after 2.5 seconds.', function () {

      var pictureShow = new picture();
      expect(pictureShow.hidden).to.equal(false);

      });
     });
    });
})();
