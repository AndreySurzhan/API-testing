
var XML = {

    /**
     * @param {Document} doc
     * @param {string} attributeName
     *
     * @returns {string}
     * */
    getAttributeValue: function (doc, attributeName) {
        return doc.documentElement.getAttribute(attributeName);
    }
};

module.exports = XML;
