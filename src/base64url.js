const Base64Url = {
    _urlEncode(str)
    {
        return str
            .replaceAll("+",   "-")
            .replaceAll("/",   "_")
            .replaceAll("=", "%3D");
    },

    _urlDecode(str)
    {
        return str
            .replaceAll("-",     "+")
            .replaceAll("_",     "/")
            .replaceAll(/%3D/ig, "=");
    },

    fromString(str)
    {
        return this._urlEncode(btoa(str));
    },

    toString(encoded)
    {
        return atob(this._urlDecode(encoded));
    },

    fromBytes(bytes)
    {
        return this._urlEncode(btoa(String.fromCharCode.apply(null, bytes)));
    },

    toBytes(encoded)
    {
        return new Uint8Array(atob(this._urlDecode(encoded)).split("").map(c => c.charCodeAt(0)));
    },
};

module.exports = Base64Url;