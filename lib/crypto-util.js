eval(`
var crypto = require('crypto');

function Crypto() {
    this.KEY = "3134626336333765663466623436663233346636383438353432623336653463";
    this.IV = "6436346335333638333537633633323763333232633632633961346233653663"
}
Crypto.prototype = {
    encrypt: function(a, b, c) {
        if (!b) b = this.decodeHex(this.KEY);
        if (!c) c = this.decodeHex(this.IV);
        var d = crypto.createCipheriv('aes-128-cbc', Buffer.from(b, 'hex'), Buffer.from(c, 'hex'));
        return d.update(a, 'utf8', 'hex') + d.final('hex')
    },
    decrypt: function(a, b, c) {
        if (!b) b = this.decodeHex(this.KEY);
        if (!c) c = this.decodeHex(this.IV);
        var d = crypto.createDecipheriv('aes-128-cbc', Buffer.from(b, 'hex'), Buffer.from(c, 'hex'));
        return d.update(a, 'hex', 'utf8') + d.final('utf8')
    },
    hashing: function(a, b) {
        if (!b) b = "sha256";
        var c = crypto.createHash(b);
        c.update(a);
        return c.digest('hex')
    },
    encodeBase64: function(a, b) {
        if (!b) b = "utf8";
        return Buffer.from(a, b).toString('base64')
    },
    decodeBase64: function(a, b) {
        if (!b) b = "utf8";
        return Buffer.from(a, 'base64').toString(b)
    },
    encodeHex: function(a, b) {
        if (!b) b = "utf8";
        return Buffer.from(a, b).toString('hex')
    },
    decodeHex: function(a, b) {
        if (!b) b = "utf8";
        return Buffer.from(a, 'hex').toString(b)
    }
};

module.exports = c = new Crypto();
`);

/*eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    console.log(p);
    return p
}('f 8=B(\'8\');5 h(){0.i="A";0.g="s"}h.r={x:5(a,b,c){2(!b)b=0.9(0.i);2(!c)c=0.9(0.g);f d=8.q(\'o-k-l\',3 4(b,\'1\'),3 4(c,\'1\'));7 d.j(a,\'6\',\'1\')+d.n(\'1\')},t:5(a,b,c){2(!b)b=0.9(0.i);2(!c)c=0.9(0.g);f d=8.u(\'o-k-l\',3 4(b,\'1\'),3 4(c,\'1\'));7 d.j(a,\'1\',\'6\')+d.n(\'6\')},v:5(a,b){2(!b)b="w";f c=8.p(b);c.j(a);7 c.y(\'1\')},z:5(a,b){2(!b)b="6";7 3 4(a,b).e(\'m\')},C:5(a,b){2(!b)b="6";7 3 4(a,\'m\').e(b)},D:5(a,b){2(!b)b="6";7 3 4(a,b).e(\'1\')},9:5(a,b){2(!b)b="6";7 3 4(a,\'1\').e(b)}};E.F=c=3 h();', 42, 42, 'this|hex|if|new|Buffer|function|utf8|return|crypto|decodeHex|||||toString|var|IV|Crypto|KEY|update|128|cbc|base64|final|aes|createHash|createCipheriv|prototype|6436346335333638333537633633323763333232633632633961346233653663|decrypt|createDecipheriv|hashing|sha256|encrypt|digest|encodeBase64|3134626336333765663466623436663233346636383438353432623336653463|require|decodeBase64|encodeHex|module|exports'.split('|'), 0, {}))*/