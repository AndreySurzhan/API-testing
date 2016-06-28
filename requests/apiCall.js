var config = require('../config');
var DOMParser = require('xmldom').DOMParser;
var http = require('http');
var request = require('request');
var Q = require('q');
var url = require('url');

var apiCall = function () {
    var urlObj = {
        protocol: config.protocol,
        host: config.host,
        port: config.port
    };
    
    /**
     * @param {string} product
     *
     * @returns {promise}
     * */
    this.getProductInfo = function (product) {
        var deferred = Q.defer();

        urlObj.pathname = '/productinfo/{product}'.replace('{product}', product);

        request.get(url.format(urlObj), function (error, response, body) {
            var xml;

            if (error) {
                deferred.reject(error);

                return;
            }

            xml = new DOMParser().parseFromString(body);

            deferred.resolve({
                response: response,
                body: xml
            });
        });

        return deferred.promise;
    }
};

module.exports = apiCall;
