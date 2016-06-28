var apiCall = require('../requests/apiCall');
var api;
var xml = require('../utils/xml');

describe('DESCRIBE', function () {
    beforeEach(function () {
        api = new apiCall();
    });

    it('IT should 1', function (done) {
        api.getProductInfo('bc')
            .then(function (result) {
                expect(result.response.statusCode).toBe(200);
                expect(result.response.headers['content-type']).toBe('application/xml');
                expect(result.response.headers['access-control-allow-origin']).toBe('*');
                expect(xml.getAttributeValue(result.body,'abbreviation')).toBe('bc');
            }, function (error) {
                expect(error).toBe(null);
            })
            .fin(function () {
                done();
            });
    });
});
