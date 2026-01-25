/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.youtube = (function() {

    /**
     * Namespace youtube.
     * @exports youtube
     * @namespace
     */
    var youtube = {};

    youtube.api = (function() {

        /**
         * Namespace api.
         * @memberof youtube
         * @namespace
         */
        var api = {};

        api.innertube = (function() {

            /**
             * Namespace innertube.
             * @memberof youtube.api
             * @namespace
             */
            var innertube = {};

            innertube.SearchParams = (function() {

                /**
                 * Properties of a SearchParams.
                 * @memberof youtube.api.innertube
                 * @interface ISearchParams
                 * @property {youtube.api.innertube.SearchParams.SearchResultsSortType|null} [sortType] SearchParams sortType
                 * @property {youtube.api.innertube.SearchParams.IFilterOptions|null} [filterOptions] SearchParams filterOptions
                 * @property {number|null} [index] SearchParams index
                 * @property {string|null} [something] SearchParams something
                 */

                /**
                 * Constructs a new SearchParams.
                 * @memberof youtube.api.innertube
                 * @classdesc Represents a SearchParams.
                 * @implements ISearchParams
                 * @constructor
                 * @param {youtube.api.innertube.ISearchParams=} [properties] Properties to set
                 */
                function SearchParams(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SearchParams sortType.
                 * @member {youtube.api.innertube.SearchParams.SearchResultsSortType|null|undefined} sortType
                 * @memberof youtube.api.innertube.SearchParams
                 * @instance
                 */
                SearchParams.prototype.sortType = null;

                /**
                 * SearchParams filterOptions.
                 * @member {youtube.api.innertube.SearchParams.IFilterOptions|null|undefined} filterOptions
                 * @memberof youtube.api.innertube.SearchParams
                 * @instance
                 */
                SearchParams.prototype.filterOptions = null;

                /**
                 * SearchParams index.
                 * @member {number|null|undefined} index
                 * @memberof youtube.api.innertube.SearchParams
                 * @instance
                 */
                SearchParams.prototype.index = null;

                /**
                 * SearchParams something.
                 * @member {string|null|undefined} something
                 * @memberof youtube.api.innertube.SearchParams
                 * @instance
                 */
                SearchParams.prototype.something = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SearchParams.prototype, "_sortType", {
                    get: $util.oneOfGetter($oneOfFields = ["sortType"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SearchParams.prototype, "_filterOptions", {
                    get: $util.oneOfGetter($oneOfFields = ["filterOptions"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SearchParams.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SearchParams.prototype, "_something", {
                    get: $util.oneOfGetter($oneOfFields = ["something"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SearchParams instance using the specified properties.
                 * @function create
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {youtube.api.innertube.ISearchParams=} [properties] Properties to set
                 * @returns {youtube.api.innertube.SearchParams} SearchParams instance
                 */
                SearchParams.create = function create(properties) {
                    return new SearchParams(properties);
                };

                /**
                 * Encodes the specified SearchParams message. Does not implicitly {@link youtube.api.innertube.SearchParams.verify|verify} messages.
                 * @function encode
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {youtube.api.innertube.ISearchParams} message SearchParams message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchParams.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sortType != null && Object.hasOwnProperty.call(message, "sortType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sortType);
                    if (message.filterOptions != null && Object.hasOwnProperty.call(message, "filterOptions"))
                        $root.youtube.api.innertube.SearchParams.FilterOptions.encode(message.filterOptions, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.index);
                    if (message.something != null && Object.hasOwnProperty.call(message, "something"))
                        writer.uint32(/* id 61, wireType 2 =*/490).string(message.something);
                    return writer;
                };

                /**
                 * Encodes the specified SearchParams message, length delimited. Does not implicitly {@link youtube.api.innertube.SearchParams.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {youtube.api.innertube.ISearchParams} message SearchParams message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SearchParams.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SearchParams message from the specified reader or buffer.
                 * @function decode
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {youtube.api.innertube.SearchParams} SearchParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchParams.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.youtube.api.innertube.SearchParams();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.sortType = reader.int32();
                                break;
                            }
                        case 2: {
                                message.filterOptions = $root.youtube.api.innertube.SearchParams.FilterOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.index = reader.int32();
                                break;
                            }
                        case 61: {
                                message.something = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SearchParams message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {youtube.api.innertube.SearchParams} SearchParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SearchParams.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SearchParams message.
                 * @function verify
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SearchParams.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.sortType != null && message.hasOwnProperty("sortType")) {
                        properties._sortType = 1;
                        switch (message.sortType) {
                        default:
                            return "sortType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    }
                    if (message.filterOptions != null && message.hasOwnProperty("filterOptions")) {
                        properties._filterOptions = 1;
                        {
                            var error = $root.youtube.api.innertube.SearchParams.FilterOptions.verify(message.filterOptions);
                            if (error)
                                return "filterOptions." + error;
                        }
                    }
                    if (message.index != null && message.hasOwnProperty("index")) {
                        properties._index = 1;
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    }
                    if (message.something != null && message.hasOwnProperty("something")) {
                        properties._something = 1;
                        if (!$util.isString(message.something))
                            return "something: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a SearchParams message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {youtube.api.innertube.SearchParams} SearchParams
                 */
                SearchParams.fromObject = function fromObject(object) {
                    if (object instanceof $root.youtube.api.innertube.SearchParams)
                        return object;
                    var message = new $root.youtube.api.innertube.SearchParams();
                    switch (object.sortType) {
                    default:
                        if (typeof object.sortType === "number") {
                            message.sortType = object.sortType;
                            break;
                        }
                        break;
                    case "BY_RELEVANCE":
                    case 0:
                        message.sortType = 0;
                        break;
                    case "BY_RATING":
                    case 1:
                        message.sortType = 1;
                        break;
                    case "BY_DATE":
                    case 2:
                        message.sortType = 2;
                        break;
                    case "BY_VIEW_COUNT":
                    case 3:
                        message.sortType = 3;
                        break;
                    }
                    if (object.filterOptions != null) {
                        if (typeof object.filterOptions !== "object")
                            throw TypeError(".youtube.api.innertube.SearchParams.filterOptions: object expected");
                        message.filterOptions = $root.youtube.api.innertube.SearchParams.FilterOptions.fromObject(object.filterOptions);
                    }
                    if (object.index != null)
                        message.index = object.index | 0;
                    if (object.something != null)
                        message.something = String(object.something);
                    return message;
                };

                /**
                 * Creates a plain object from a SearchParams message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {youtube.api.innertube.SearchParams} message SearchParams
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SearchParams.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.sortType != null && message.hasOwnProperty("sortType")) {
                        object.sortType = options.enums === String ? $root.youtube.api.innertube.SearchParams.SearchResultsSortType[message.sortType] === undefined ? message.sortType : $root.youtube.api.innertube.SearchParams.SearchResultsSortType[message.sortType] : message.sortType;
                        if (options.oneofs)
                            object._sortType = "sortType";
                    }
                    if (message.filterOptions != null && message.hasOwnProperty("filterOptions")) {
                        object.filterOptions = $root.youtube.api.innertube.SearchParams.FilterOptions.toObject(message.filterOptions, options);
                        if (options.oneofs)
                            object._filterOptions = "filterOptions";
                    }
                    if (message.index != null && message.hasOwnProperty("index")) {
                        object.index = message.index;
                        if (options.oneofs)
                            object._index = "index";
                    }
                    if (message.something != null && message.hasOwnProperty("something")) {
                        object.something = message.something;
                        if (options.oneofs)
                            object._something = "something";
                    }
                    return object;
                };

                /**
                 * Converts this SearchParams to JSON.
                 * @function toJSON
                 * @memberof youtube.api.innertube.SearchParams
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SearchParams.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SearchParams
                 * @function getTypeUrl
                 * @memberof youtube.api.innertube.SearchParams
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SearchParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/youtube.api.innertube.SearchParams";
                };

                /**
                 * SearchResultsSortType enum.
                 * @name youtube.api.innertube.SearchParams.SearchResultsSortType
                 * @enum {number}
                 * @property {number} BY_RELEVANCE=0 BY_RELEVANCE value
                 * @property {number} BY_RATING=1 BY_RATING value
                 * @property {number} BY_DATE=2 BY_DATE value
                 * @property {number} BY_VIEW_COUNT=3 BY_VIEW_COUNT value
                 */
                SearchParams.SearchResultsSortType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "BY_RELEVANCE"] = 0;
                    values[valuesById[1] = "BY_RATING"] = 1;
                    values[valuesById[2] = "BY_DATE"] = 2;
                    values[valuesById[3] = "BY_VIEW_COUNT"] = 3;
                    return values;
                })();

                SearchParams.FilterOptions = (function() {

                    /**
                     * Properties of a FilterOptions.
                     * @memberof youtube.api.innertube.SearchParams
                     * @interface IFilterOptions
                     * @property {youtube.api.innertube.SearchParams.FilterOptions.UploadDateRestrictType|null} [restrictUploadDate] FilterOptions restrictUploadDate
                     * @property {youtube.api.innertube.SearchParams.FilterOptions.ResultTypeRestrictType|null} [restrictResultType] FilterOptions restrictResultType
                     * @property {youtube.api.innertube.SearchParams.FilterOptions.DurationRestrictType|null} [restrictDuration] FilterOptions restrictDuration
                     * @property {boolean|null} [restrictHighDefinition] FilterOptions restrictHighDefinition
                     * @property {boolean|null} [restrictClosedCaption] FilterOptions restrictClosedCaption
                     * @property {boolean|null} [restrictCreativeCommons] FilterOptions restrictCreativeCommons
                     * @property {boolean|null} [restrictThreed] FilterOptions restrictThreed
                     * @property {boolean|null} [restrictLive] FilterOptions restrictLive
                     * @property {boolean|null} [restrictPurchased] FilterOptions restrictPurchased
                     * @property {Array.<string>|null} [restrictUsernames] FilterOptions restrictUsernames
                     * @property {youtube.api.innertube.SearchParams.FilterOptions.SafeSearchRestrictType|null} [restrictSafeSearch] FilterOptions restrictSafeSearch
                     * @property {boolean|null} [restrictEdu] FilterOptions restrictEdu
                     * @property {boolean|null} [restrictFourk] FilterOptions restrictFourk
                     * @property {boolean|null} [restrictSpherical] FilterOptions restrictSpherical
                     * @property {boolean|null} [restrictSpacecast] FilterOptions restrictSpacecast
                     * @property {boolean|null} [restrictPaidContent] FilterOptions restrictPaidContent
                     * @property {boolean|null} [restrictFullMoviePage] FilterOptions restrictFullMoviePage
                     * @property {string|null} [restrictContentOwner] FilterOptions restrictContentOwner
                     * @property {boolean|null} [restrictLocation] FilterOptions restrictLocation
                     * @property {string|null} [restrictLocationPlaceId] FilterOptions restrictLocationPlaceId
                     * @property {boolean|null} [restrictHighDynamicRange] FilterOptions restrictHighDynamicRange
                     * @property {boolean|null} [restrictPartialSpherical] FilterOptions restrictPartialSpherical
                     * @property {boolean|null} [restrictPremiumTvfilmMoviePage] FilterOptions restrictPremiumTvfilmMoviePage
                     * @property {boolean|null} [restrictUnwatched] FilterOptions restrictUnwatched
                     * @property {boolean|null} [restrictPaidProductPlacement] FilterOptions restrictPaidProductPlacement
                     * @property {boolean|null} [restrictEightk] FilterOptions restrictEightk
                     */

                    /**
                     * Constructs a new FilterOptions.
                     * @memberof youtube.api.innertube.SearchParams
                     * @classdesc Represents a FilterOptions.
                     * @implements IFilterOptions
                     * @constructor
                     * @param {youtube.api.innertube.SearchParams.IFilterOptions=} [properties] Properties to set
                     */
                    function FilterOptions(properties) {
                        this.restrictUsernames = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FilterOptions restrictUploadDate.
                     * @member {youtube.api.innertube.SearchParams.FilterOptions.UploadDateRestrictType|null|undefined} restrictUploadDate
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictUploadDate = null;

                    /**
                     * FilterOptions restrictResultType.
                     * @member {youtube.api.innertube.SearchParams.FilterOptions.ResultTypeRestrictType|null|undefined} restrictResultType
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictResultType = null;

                    /**
                     * FilterOptions restrictDuration.
                     * @member {youtube.api.innertube.SearchParams.FilterOptions.DurationRestrictType|null|undefined} restrictDuration
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictDuration = null;

                    /**
                     * FilterOptions restrictHighDefinition.
                     * @member {boolean|null|undefined} restrictHighDefinition
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictHighDefinition = null;

                    /**
                     * FilterOptions restrictClosedCaption.
                     * @member {boolean|null|undefined} restrictClosedCaption
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictClosedCaption = null;

                    /**
                     * FilterOptions restrictCreativeCommons.
                     * @member {boolean|null|undefined} restrictCreativeCommons
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictCreativeCommons = null;

                    /**
                     * FilterOptions restrictThreed.
                     * @member {boolean|null|undefined} restrictThreed
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictThreed = null;

                    /**
                     * FilterOptions restrictLive.
                     * @member {boolean|null|undefined} restrictLive
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictLive = null;

                    /**
                     * FilterOptions restrictPurchased.
                     * @member {boolean|null|undefined} restrictPurchased
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictPurchased = null;

                    /**
                     * FilterOptions restrictUsernames.
                     * @member {Array.<string>} restrictUsernames
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictUsernames = $util.emptyArray;

                    /**
                     * FilterOptions restrictSafeSearch.
                     * @member {youtube.api.innertube.SearchParams.FilterOptions.SafeSearchRestrictType|null|undefined} restrictSafeSearch
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictSafeSearch = null;

                    /**
                     * FilterOptions restrictEdu.
                     * @member {boolean|null|undefined} restrictEdu
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictEdu = null;

                    /**
                     * FilterOptions restrictFourk.
                     * @member {boolean|null|undefined} restrictFourk
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictFourk = null;

                    /**
                     * FilterOptions restrictSpherical.
                     * @member {boolean|null|undefined} restrictSpherical
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictSpherical = null;

                    /**
                     * FilterOptions restrictSpacecast.
                     * @member {boolean|null|undefined} restrictSpacecast
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictSpacecast = null;

                    /**
                     * FilterOptions restrictPaidContent.
                     * @member {boolean|null|undefined} restrictPaidContent
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictPaidContent = null;

                    /**
                     * FilterOptions restrictFullMoviePage.
                     * @member {boolean|null|undefined} restrictFullMoviePage
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictFullMoviePage = null;

                    /**
                     * FilterOptions restrictContentOwner.
                     * @member {string|null|undefined} restrictContentOwner
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictContentOwner = null;

                    /**
                     * FilterOptions restrictLocation.
                     * @member {boolean|null|undefined} restrictLocation
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictLocation = null;

                    /**
                     * FilterOptions restrictLocationPlaceId.
                     * @member {string|null|undefined} restrictLocationPlaceId
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictLocationPlaceId = null;

                    /**
                     * FilterOptions restrictHighDynamicRange.
                     * @member {boolean|null|undefined} restrictHighDynamicRange
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictHighDynamicRange = null;

                    /**
                     * FilterOptions restrictPartialSpherical.
                     * @member {boolean|null|undefined} restrictPartialSpherical
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictPartialSpherical = null;

                    /**
                     * FilterOptions restrictPremiumTvfilmMoviePage.
                     * @member {boolean|null|undefined} restrictPremiumTvfilmMoviePage
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictPremiumTvfilmMoviePage = null;

                    /**
                     * FilterOptions restrictUnwatched.
                     * @member {boolean|null|undefined} restrictUnwatched
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictUnwatched = null;

                    /**
                     * FilterOptions restrictPaidProductPlacement.
                     * @member {boolean|null|undefined} restrictPaidProductPlacement
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictPaidProductPlacement = null;

                    /**
                     * FilterOptions restrictEightk.
                     * @member {boolean|null|undefined} restrictEightk
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     */
                    FilterOptions.prototype.restrictEightk = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictUploadDate", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictUploadDate"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictResultType", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictResultType"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictDuration", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictDuration"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictHighDefinition", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictHighDefinition"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictClosedCaption", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictClosedCaption"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictCreativeCommons", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictCreativeCommons"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictThreed", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictThreed"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictLive", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictLive"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictPurchased", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictPurchased"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictSafeSearch", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictSafeSearch"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictEdu", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictEdu"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictFourk", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictFourk"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictSpherical", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictSpherical"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictSpacecast", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictSpacecast"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictPaidContent", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictPaidContent"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictFullMoviePage", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictFullMoviePage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictContentOwner", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictContentOwner"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictLocation", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictLocation"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictLocationPlaceId", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictLocationPlaceId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictHighDynamicRange", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictHighDynamicRange"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictPartialSpherical", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictPartialSpherical"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictPremiumTvfilmMoviePage", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictPremiumTvfilmMoviePage"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictUnwatched", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictUnwatched"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictPaidProductPlacement", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictPaidProductPlacement"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(FilterOptions.prototype, "_restrictEightk", {
                        get: $util.oneOfGetter($oneOfFields = ["restrictEightk"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new FilterOptions instance using the specified properties.
                     * @function create
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {youtube.api.innertube.SearchParams.IFilterOptions=} [properties] Properties to set
                     * @returns {youtube.api.innertube.SearchParams.FilterOptions} FilterOptions instance
                     */
                    FilterOptions.create = function create(properties) {
                        return new FilterOptions(properties);
                    };

                    /**
                     * Encodes the specified FilterOptions message. Does not implicitly {@link youtube.api.innertube.SearchParams.FilterOptions.verify|verify} messages.
                     * @function encode
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {youtube.api.innertube.SearchParams.IFilterOptions} message FilterOptions message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FilterOptions.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.restrictUploadDate != null && Object.hasOwnProperty.call(message, "restrictUploadDate"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.restrictUploadDate);
                        if (message.restrictResultType != null && Object.hasOwnProperty.call(message, "restrictResultType"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.restrictResultType);
                        if (message.restrictDuration != null && Object.hasOwnProperty.call(message, "restrictDuration"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.restrictDuration);
                        if (message.restrictHighDefinition != null && Object.hasOwnProperty.call(message, "restrictHighDefinition"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.restrictHighDefinition);
                        if (message.restrictClosedCaption != null && Object.hasOwnProperty.call(message, "restrictClosedCaption"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.restrictClosedCaption);
                        if (message.restrictCreativeCommons != null && Object.hasOwnProperty.call(message, "restrictCreativeCommons"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.restrictCreativeCommons);
                        if (message.restrictThreed != null && Object.hasOwnProperty.call(message, "restrictThreed"))
                            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.restrictThreed);
                        if (message.restrictLive != null && Object.hasOwnProperty.call(message, "restrictLive"))
                            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.restrictLive);
                        if (message.restrictPurchased != null && Object.hasOwnProperty.call(message, "restrictPurchased"))
                            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.restrictPurchased);
                        if (message.restrictUsernames != null && message.restrictUsernames.length)
                            for (var i = 0; i < message.restrictUsernames.length; ++i)
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.restrictUsernames[i]);
                        if (message.restrictSafeSearch != null && Object.hasOwnProperty.call(message, "restrictSafeSearch"))
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.restrictSafeSearch);
                        if (message.restrictEdu != null && Object.hasOwnProperty.call(message, "restrictEdu"))
                            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.restrictEdu);
                        if (message.restrictFourk != null && Object.hasOwnProperty.call(message, "restrictFourk"))
                            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.restrictFourk);
                        if (message.restrictSpherical != null && Object.hasOwnProperty.call(message, "restrictSpherical"))
                            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.restrictSpherical);
                        if (message.restrictSpacecast != null && Object.hasOwnProperty.call(message, "restrictSpacecast"))
                            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.restrictSpacecast);
                        if (message.restrictPaidContent != null && Object.hasOwnProperty.call(message, "restrictPaidContent"))
                            writer.uint32(/* id 20, wireType 0 =*/160).bool(message.restrictPaidContent);
                        if (message.restrictFullMoviePage != null && Object.hasOwnProperty.call(message, "restrictFullMoviePage"))
                            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.restrictFullMoviePage);
                        if (message.restrictContentOwner != null && Object.hasOwnProperty.call(message, "restrictContentOwner"))
                            writer.uint32(/* id 22, wireType 2 =*/178).string(message.restrictContentOwner);
                        if (message.restrictLocation != null && Object.hasOwnProperty.call(message, "restrictLocation"))
                            writer.uint32(/* id 23, wireType 0 =*/184).bool(message.restrictLocation);
                        if (message.restrictLocationPlaceId != null && Object.hasOwnProperty.call(message, "restrictLocationPlaceId"))
                            writer.uint32(/* id 24, wireType 2 =*/194).string(message.restrictLocationPlaceId);
                        if (message.restrictHighDynamicRange != null && Object.hasOwnProperty.call(message, "restrictHighDynamicRange"))
                            writer.uint32(/* id 25, wireType 0 =*/200).bool(message.restrictHighDynamicRange);
                        if (message.restrictPartialSpherical != null && Object.hasOwnProperty.call(message, "restrictPartialSpherical"))
                            writer.uint32(/* id 26, wireType 0 =*/208).bool(message.restrictPartialSpherical);
                        if (message.restrictPremiumTvfilmMoviePage != null && Object.hasOwnProperty.call(message, "restrictPremiumTvfilmMoviePage"))
                            writer.uint32(/* id 28, wireType 0 =*/224).bool(message.restrictPremiumTvfilmMoviePage);
                        if (message.restrictUnwatched != null && Object.hasOwnProperty.call(message, "restrictUnwatched"))
                            writer.uint32(/* id 29, wireType 0 =*/232).bool(message.restrictUnwatched);
                        if (message.restrictPaidProductPlacement != null && Object.hasOwnProperty.call(message, "restrictPaidProductPlacement"))
                            writer.uint32(/* id 32, wireType 0 =*/256).bool(message.restrictPaidProductPlacement);
                        if (message.restrictEightk != null && Object.hasOwnProperty.call(message, "restrictEightk"))
                            writer.uint32(/* id 33, wireType 0 =*/264).bool(message.restrictEightk);
                        return writer;
                    };

                    /**
                     * Encodes the specified FilterOptions message, length delimited. Does not implicitly {@link youtube.api.innertube.SearchParams.FilterOptions.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {youtube.api.innertube.SearchParams.IFilterOptions} message FilterOptions message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FilterOptions.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FilterOptions message from the specified reader or buffer.
                     * @function decode
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {youtube.api.innertube.SearchParams.FilterOptions} FilterOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FilterOptions.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.youtube.api.innertube.SearchParams.FilterOptions();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.restrictUploadDate = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.restrictResultType = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.restrictDuration = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.restrictHighDefinition = reader.bool();
                                    break;
                                }
                            case 5: {
                                    message.restrictClosedCaption = reader.bool();
                                    break;
                                }
                            case 6: {
                                    message.restrictCreativeCommons = reader.bool();
                                    break;
                                }
                            case 7: {
                                    message.restrictThreed = reader.bool();
                                    break;
                                }
                            case 8: {
                                    message.restrictLive = reader.bool();
                                    break;
                                }
                            case 9: {
                                    message.restrictPurchased = reader.bool();
                                    break;
                                }
                            case 10: {
                                    if (!(message.restrictUsernames && message.restrictUsernames.length))
                                        message.restrictUsernames = [];
                                    message.restrictUsernames.push(reader.string());
                                    break;
                                }
                            case 11: {
                                    message.restrictSafeSearch = reader.int32();
                                    break;
                                }
                            case 12: {
                                    message.restrictEdu = reader.bool();
                                    break;
                                }
                            case 14: {
                                    message.restrictFourk = reader.bool();
                                    break;
                                }
                            case 15: {
                                    message.restrictSpherical = reader.bool();
                                    break;
                                }
                            case 16: {
                                    message.restrictSpacecast = reader.bool();
                                    break;
                                }
                            case 20: {
                                    message.restrictPaidContent = reader.bool();
                                    break;
                                }
                            case 21: {
                                    message.restrictFullMoviePage = reader.bool();
                                    break;
                                }
                            case 22: {
                                    message.restrictContentOwner = reader.string();
                                    break;
                                }
                            case 23: {
                                    message.restrictLocation = reader.bool();
                                    break;
                                }
                            case 24: {
                                    message.restrictLocationPlaceId = reader.string();
                                    break;
                                }
                            case 25: {
                                    message.restrictHighDynamicRange = reader.bool();
                                    break;
                                }
                            case 26: {
                                    message.restrictPartialSpherical = reader.bool();
                                    break;
                                }
                            case 28: {
                                    message.restrictPremiumTvfilmMoviePage = reader.bool();
                                    break;
                                }
                            case 29: {
                                    message.restrictUnwatched = reader.bool();
                                    break;
                                }
                            case 32: {
                                    message.restrictPaidProductPlacement = reader.bool();
                                    break;
                                }
                            case 33: {
                                    message.restrictEightk = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FilterOptions message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {youtube.api.innertube.SearchParams.FilterOptions} FilterOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FilterOptions.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FilterOptions message.
                     * @function verify
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FilterOptions.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.restrictUploadDate != null && message.hasOwnProperty("restrictUploadDate")) {
                            properties._restrictUploadDate = 1;
                            switch (message.restrictUploadDate) {
                            default:
                                return "restrictUploadDate: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        }
                        if (message.restrictResultType != null && message.hasOwnProperty("restrictResultType")) {
                            properties._restrictResultType = 1;
                            switch (message.restrictResultType) {
                            default:
                                return "restrictResultType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                                break;
                            }
                        }
                        if (message.restrictDuration != null && message.hasOwnProperty("restrictDuration")) {
                            properties._restrictDuration = 1;
                            switch (message.restrictDuration) {
                            default:
                                return "restrictDuration: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        }
                        if (message.restrictHighDefinition != null && message.hasOwnProperty("restrictHighDefinition")) {
                            properties._restrictHighDefinition = 1;
                            if (typeof message.restrictHighDefinition !== "boolean")
                                return "restrictHighDefinition: boolean expected";
                        }
                        if (message.restrictClosedCaption != null && message.hasOwnProperty("restrictClosedCaption")) {
                            properties._restrictClosedCaption = 1;
                            if (typeof message.restrictClosedCaption !== "boolean")
                                return "restrictClosedCaption: boolean expected";
                        }
                        if (message.restrictCreativeCommons != null && message.hasOwnProperty("restrictCreativeCommons")) {
                            properties._restrictCreativeCommons = 1;
                            if (typeof message.restrictCreativeCommons !== "boolean")
                                return "restrictCreativeCommons: boolean expected";
                        }
                        if (message.restrictThreed != null && message.hasOwnProperty("restrictThreed")) {
                            properties._restrictThreed = 1;
                            if (typeof message.restrictThreed !== "boolean")
                                return "restrictThreed: boolean expected";
                        }
                        if (message.restrictLive != null && message.hasOwnProperty("restrictLive")) {
                            properties._restrictLive = 1;
                            if (typeof message.restrictLive !== "boolean")
                                return "restrictLive: boolean expected";
                        }
                        if (message.restrictPurchased != null && message.hasOwnProperty("restrictPurchased")) {
                            properties._restrictPurchased = 1;
                            if (typeof message.restrictPurchased !== "boolean")
                                return "restrictPurchased: boolean expected";
                        }
                        if (message.restrictUsernames != null && message.hasOwnProperty("restrictUsernames")) {
                            if (!Array.isArray(message.restrictUsernames))
                                return "restrictUsernames: array expected";
                            for (var i = 0; i < message.restrictUsernames.length; ++i)
                                if (!$util.isString(message.restrictUsernames[i]))
                                    return "restrictUsernames: string[] expected";
                        }
                        if (message.restrictSafeSearch != null && message.hasOwnProperty("restrictSafeSearch")) {
                            properties._restrictSafeSearch = 1;
                            switch (message.restrictSafeSearch) {
                            default:
                                return "restrictSafeSearch: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        }
                        if (message.restrictEdu != null && message.hasOwnProperty("restrictEdu")) {
                            properties._restrictEdu = 1;
                            if (typeof message.restrictEdu !== "boolean")
                                return "restrictEdu: boolean expected";
                        }
                        if (message.restrictFourk != null && message.hasOwnProperty("restrictFourk")) {
                            properties._restrictFourk = 1;
                            if (typeof message.restrictFourk !== "boolean")
                                return "restrictFourk: boolean expected";
                        }
                        if (message.restrictSpherical != null && message.hasOwnProperty("restrictSpherical")) {
                            properties._restrictSpherical = 1;
                            if (typeof message.restrictSpherical !== "boolean")
                                return "restrictSpherical: boolean expected";
                        }
                        if (message.restrictSpacecast != null && message.hasOwnProperty("restrictSpacecast")) {
                            properties._restrictSpacecast = 1;
                            if (typeof message.restrictSpacecast !== "boolean")
                                return "restrictSpacecast: boolean expected";
                        }
                        if (message.restrictPaidContent != null && message.hasOwnProperty("restrictPaidContent")) {
                            properties._restrictPaidContent = 1;
                            if (typeof message.restrictPaidContent !== "boolean")
                                return "restrictPaidContent: boolean expected";
                        }
                        if (message.restrictFullMoviePage != null && message.hasOwnProperty("restrictFullMoviePage")) {
                            properties._restrictFullMoviePage = 1;
                            if (typeof message.restrictFullMoviePage !== "boolean")
                                return "restrictFullMoviePage: boolean expected";
                        }
                        if (message.restrictContentOwner != null && message.hasOwnProperty("restrictContentOwner")) {
                            properties._restrictContentOwner = 1;
                            if (!$util.isString(message.restrictContentOwner))
                                return "restrictContentOwner: string expected";
                        }
                        if (message.restrictLocation != null && message.hasOwnProperty("restrictLocation")) {
                            properties._restrictLocation = 1;
                            if (typeof message.restrictLocation !== "boolean")
                                return "restrictLocation: boolean expected";
                        }
                        if (message.restrictLocationPlaceId != null && message.hasOwnProperty("restrictLocationPlaceId")) {
                            properties._restrictLocationPlaceId = 1;
                            if (!$util.isString(message.restrictLocationPlaceId))
                                return "restrictLocationPlaceId: string expected";
                        }
                        if (message.restrictHighDynamicRange != null && message.hasOwnProperty("restrictHighDynamicRange")) {
                            properties._restrictHighDynamicRange = 1;
                            if (typeof message.restrictHighDynamicRange !== "boolean")
                                return "restrictHighDynamicRange: boolean expected";
                        }
                        if (message.restrictPartialSpherical != null && message.hasOwnProperty("restrictPartialSpherical")) {
                            properties._restrictPartialSpherical = 1;
                            if (typeof message.restrictPartialSpherical !== "boolean")
                                return "restrictPartialSpherical: boolean expected";
                        }
                        if (message.restrictPremiumTvfilmMoviePage != null && message.hasOwnProperty("restrictPremiumTvfilmMoviePage")) {
                            properties._restrictPremiumTvfilmMoviePage = 1;
                            if (typeof message.restrictPremiumTvfilmMoviePage !== "boolean")
                                return "restrictPremiumTvfilmMoviePage: boolean expected";
                        }
                        if (message.restrictUnwatched != null && message.hasOwnProperty("restrictUnwatched")) {
                            properties._restrictUnwatched = 1;
                            if (typeof message.restrictUnwatched !== "boolean")
                                return "restrictUnwatched: boolean expected";
                        }
                        if (message.restrictPaidProductPlacement != null && message.hasOwnProperty("restrictPaidProductPlacement")) {
                            properties._restrictPaidProductPlacement = 1;
                            if (typeof message.restrictPaidProductPlacement !== "boolean")
                                return "restrictPaidProductPlacement: boolean expected";
                        }
                        if (message.restrictEightk != null && message.hasOwnProperty("restrictEightk")) {
                            properties._restrictEightk = 1;
                            if (typeof message.restrictEightk !== "boolean")
                                return "restrictEightk: boolean expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FilterOptions message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {youtube.api.innertube.SearchParams.FilterOptions} FilterOptions
                     */
                    FilterOptions.fromObject = function fromObject(object) {
                        if (object instanceof $root.youtube.api.innertube.SearchParams.FilterOptions)
                            return object;
                        var message = new $root.youtube.api.innertube.SearchParams.FilterOptions();
                        switch (object.restrictUploadDate) {
                        default:
                            if (typeof object.restrictUploadDate === "number") {
                                message.restrictUploadDate = object.restrictUploadDate;
                                break;
                            }
                            break;
                        case "UPLOAD_DATE_ANY":
                        case 0:
                            message.restrictUploadDate = 0;
                            break;
                        case "UPLOAD_DATE_LAST_HOUR":
                        case 1:
                            message.restrictUploadDate = 1;
                            break;
                        case "UPLOAD_DATE_TODAY":
                        case 2:
                            message.restrictUploadDate = 2;
                            break;
                        case "UPLOAD_DATE_THIS_WEEK":
                        case 3:
                            message.restrictUploadDate = 3;
                            break;
                        case "UPLOAD_DATE_THIS_MONTH":
                        case 4:
                            message.restrictUploadDate = 4;
                            break;
                        case "UPLOAD_DATE_THIS_YEAR":
                        case 5:
                            message.restrictUploadDate = 5;
                            break;
                        }
                        switch (object.restrictResultType) {
                        default:
                            if (typeof object.restrictResultType === "number") {
                                message.restrictResultType = object.restrictResultType;
                                break;
                            }
                            break;
                        case "RESULT_TYPE_ANY":
                        case 0:
                            message.restrictResultType = 0;
                            break;
                        case "RESULT_TYPE_VIDEO":
                        case 1:
                            message.restrictResultType = 1;
                            break;
                        case "RESULT_TYPE_CHANNEL":
                        case 2:
                            message.restrictResultType = 2;
                            break;
                        case "RESULT_TYPE_PLAYLIST":
                        case 3:
                            message.restrictResultType = 3;
                            break;
                        case "RESULT_TYPE_MOVIE":
                        case 4:
                            message.restrictResultType = 4;
                            break;
                        case "RESULT_TYPE_SHOW":
                        case 5:
                            message.restrictResultType = 5;
                            break;
                        case "RESULT_TYPE_SCENE":
                        case 6:
                            message.restrictResultType = 6;
                            break;
                        case "RESULT_TYPE_GAME":
                        case 7:
                            message.restrictResultType = 7;
                            break;
                        case "RESULT_TYPE_EVENT":
                        case 8:
                            message.restrictResultType = 8;
                            break;
                        case "RESULT_TYPE_SHORTS":
                        case 9:
                            message.restrictResultType = 9;
                            break;
                        }
                        switch (object.restrictDuration) {
                        default:
                            if (typeof object.restrictDuration === "number") {
                                message.restrictDuration = object.restrictDuration;
                                break;
                            }
                            break;
                        case "DURATION_ANY":
                        case 0:
                            message.restrictDuration = 0;
                            break;
                        case "DURATION_SHORT":
                        case 1:
                            message.restrictDuration = 1;
                            break;
                        case "DURATION_LONG":
                        case 2:
                            message.restrictDuration = 2;
                            break;
                        case "DURATION_MEDIUM":
                        case 3:
                            message.restrictDuration = 3;
                            break;
                        case "DURATION_SHORT_V2":
                        case 4:
                            message.restrictDuration = 4;
                            break;
                        case "DURATION_MEDIUM_V2":
                        case 5:
                            message.restrictDuration = 5;
                            break;
                        }
                        if (object.restrictHighDefinition != null)
                            message.restrictHighDefinition = Boolean(object.restrictHighDefinition);
                        if (object.restrictClosedCaption != null)
                            message.restrictClosedCaption = Boolean(object.restrictClosedCaption);
                        if (object.restrictCreativeCommons != null)
                            message.restrictCreativeCommons = Boolean(object.restrictCreativeCommons);
                        if (object.restrictThreed != null)
                            message.restrictThreed = Boolean(object.restrictThreed);
                        if (object.restrictLive != null)
                            message.restrictLive = Boolean(object.restrictLive);
                        if (object.restrictPurchased != null)
                            message.restrictPurchased = Boolean(object.restrictPurchased);
                        if (object.restrictUsernames) {
                            if (!Array.isArray(object.restrictUsernames))
                                throw TypeError(".youtube.api.innertube.SearchParams.FilterOptions.restrictUsernames: array expected");
                            message.restrictUsernames = [];
                            for (var i = 0; i < object.restrictUsernames.length; ++i)
                                message.restrictUsernames[i] = String(object.restrictUsernames[i]);
                        }
                        switch (object.restrictSafeSearch) {
                        default:
                            if (typeof object.restrictSafeSearch === "number") {
                                message.restrictSafeSearch = object.restrictSafeSearch;
                                break;
                            }
                            break;
                        case "DEFAULT":
                        case 0:
                            message.restrictSafeSearch = 0;
                            break;
                        case "NO_FILTERING":
                        case 1:
                            message.restrictSafeSearch = 1;
                            break;
                        case "MODERATE_FILTERING":
                        case 2:
                            message.restrictSafeSearch = 2;
                            break;
                        case "STRICT_FILTERING":
                        case 3:
                            message.restrictSafeSearch = 3;
                            break;
                        }
                        if (object.restrictEdu != null)
                            message.restrictEdu = Boolean(object.restrictEdu);
                        if (object.restrictFourk != null)
                            message.restrictFourk = Boolean(object.restrictFourk);
                        if (object.restrictSpherical != null)
                            message.restrictSpherical = Boolean(object.restrictSpherical);
                        if (object.restrictSpacecast != null)
                            message.restrictSpacecast = Boolean(object.restrictSpacecast);
                        if (object.restrictPaidContent != null)
                            message.restrictPaidContent = Boolean(object.restrictPaidContent);
                        if (object.restrictFullMoviePage != null)
                            message.restrictFullMoviePage = Boolean(object.restrictFullMoviePage);
                        if (object.restrictContentOwner != null)
                            message.restrictContentOwner = String(object.restrictContentOwner);
                        if (object.restrictLocation != null)
                            message.restrictLocation = Boolean(object.restrictLocation);
                        if (object.restrictLocationPlaceId != null)
                            message.restrictLocationPlaceId = String(object.restrictLocationPlaceId);
                        if (object.restrictHighDynamicRange != null)
                            message.restrictHighDynamicRange = Boolean(object.restrictHighDynamicRange);
                        if (object.restrictPartialSpherical != null)
                            message.restrictPartialSpherical = Boolean(object.restrictPartialSpherical);
                        if (object.restrictPremiumTvfilmMoviePage != null)
                            message.restrictPremiumTvfilmMoviePage = Boolean(object.restrictPremiumTvfilmMoviePage);
                        if (object.restrictUnwatched != null)
                            message.restrictUnwatched = Boolean(object.restrictUnwatched);
                        if (object.restrictPaidProductPlacement != null)
                            message.restrictPaidProductPlacement = Boolean(object.restrictPaidProductPlacement);
                        if (object.restrictEightk != null)
                            message.restrictEightk = Boolean(object.restrictEightk);
                        return message;
                    };

                    /**
                     * Creates a plain object from a FilterOptions message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {youtube.api.innertube.SearchParams.FilterOptions} message FilterOptions
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FilterOptions.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.restrictUsernames = [];
                        if (message.restrictUploadDate != null && message.hasOwnProperty("restrictUploadDate")) {
                            object.restrictUploadDate = options.enums === String ? $root.youtube.api.innertube.SearchParams.FilterOptions.UploadDateRestrictType[message.restrictUploadDate] === undefined ? message.restrictUploadDate : $root.youtube.api.innertube.SearchParams.FilterOptions.UploadDateRestrictType[message.restrictUploadDate] : message.restrictUploadDate;
                            if (options.oneofs)
                                object._restrictUploadDate = "restrictUploadDate";
                        }
                        if (message.restrictResultType != null && message.hasOwnProperty("restrictResultType")) {
                            object.restrictResultType = options.enums === String ? $root.youtube.api.innertube.SearchParams.FilterOptions.ResultTypeRestrictType[message.restrictResultType] === undefined ? message.restrictResultType : $root.youtube.api.innertube.SearchParams.FilterOptions.ResultTypeRestrictType[message.restrictResultType] : message.restrictResultType;
                            if (options.oneofs)
                                object._restrictResultType = "restrictResultType";
                        }
                        if (message.restrictDuration != null && message.hasOwnProperty("restrictDuration")) {
                            object.restrictDuration = options.enums === String ? $root.youtube.api.innertube.SearchParams.FilterOptions.DurationRestrictType[message.restrictDuration] === undefined ? message.restrictDuration : $root.youtube.api.innertube.SearchParams.FilterOptions.DurationRestrictType[message.restrictDuration] : message.restrictDuration;
                            if (options.oneofs)
                                object._restrictDuration = "restrictDuration";
                        }
                        if (message.restrictHighDefinition != null && message.hasOwnProperty("restrictHighDefinition")) {
                            object.restrictHighDefinition = message.restrictHighDefinition;
                            if (options.oneofs)
                                object._restrictHighDefinition = "restrictHighDefinition";
                        }
                        if (message.restrictClosedCaption != null && message.hasOwnProperty("restrictClosedCaption")) {
                            object.restrictClosedCaption = message.restrictClosedCaption;
                            if (options.oneofs)
                                object._restrictClosedCaption = "restrictClosedCaption";
                        }
                        if (message.restrictCreativeCommons != null && message.hasOwnProperty("restrictCreativeCommons")) {
                            object.restrictCreativeCommons = message.restrictCreativeCommons;
                            if (options.oneofs)
                                object._restrictCreativeCommons = "restrictCreativeCommons";
                        }
                        if (message.restrictThreed != null && message.hasOwnProperty("restrictThreed")) {
                            object.restrictThreed = message.restrictThreed;
                            if (options.oneofs)
                                object._restrictThreed = "restrictThreed";
                        }
                        if (message.restrictLive != null && message.hasOwnProperty("restrictLive")) {
                            object.restrictLive = message.restrictLive;
                            if (options.oneofs)
                                object._restrictLive = "restrictLive";
                        }
                        if (message.restrictPurchased != null && message.hasOwnProperty("restrictPurchased")) {
                            object.restrictPurchased = message.restrictPurchased;
                            if (options.oneofs)
                                object._restrictPurchased = "restrictPurchased";
                        }
                        if (message.restrictUsernames && message.restrictUsernames.length) {
                            object.restrictUsernames = [];
                            for (var j = 0; j < message.restrictUsernames.length; ++j)
                                object.restrictUsernames[j] = message.restrictUsernames[j];
                        }
                        if (message.restrictSafeSearch != null && message.hasOwnProperty("restrictSafeSearch")) {
                            object.restrictSafeSearch = options.enums === String ? $root.youtube.api.innertube.SearchParams.FilterOptions.SafeSearchRestrictType[message.restrictSafeSearch] === undefined ? message.restrictSafeSearch : $root.youtube.api.innertube.SearchParams.FilterOptions.SafeSearchRestrictType[message.restrictSafeSearch] : message.restrictSafeSearch;
                            if (options.oneofs)
                                object._restrictSafeSearch = "restrictSafeSearch";
                        }
                        if (message.restrictEdu != null && message.hasOwnProperty("restrictEdu")) {
                            object.restrictEdu = message.restrictEdu;
                            if (options.oneofs)
                                object._restrictEdu = "restrictEdu";
                        }
                        if (message.restrictFourk != null && message.hasOwnProperty("restrictFourk")) {
                            object.restrictFourk = message.restrictFourk;
                            if (options.oneofs)
                                object._restrictFourk = "restrictFourk";
                        }
                        if (message.restrictSpherical != null && message.hasOwnProperty("restrictSpherical")) {
                            object.restrictSpherical = message.restrictSpherical;
                            if (options.oneofs)
                                object._restrictSpherical = "restrictSpherical";
                        }
                        if (message.restrictSpacecast != null && message.hasOwnProperty("restrictSpacecast")) {
                            object.restrictSpacecast = message.restrictSpacecast;
                            if (options.oneofs)
                                object._restrictSpacecast = "restrictSpacecast";
                        }
                        if (message.restrictPaidContent != null && message.hasOwnProperty("restrictPaidContent")) {
                            object.restrictPaidContent = message.restrictPaidContent;
                            if (options.oneofs)
                                object._restrictPaidContent = "restrictPaidContent";
                        }
                        if (message.restrictFullMoviePage != null && message.hasOwnProperty("restrictFullMoviePage")) {
                            object.restrictFullMoviePage = message.restrictFullMoviePage;
                            if (options.oneofs)
                                object._restrictFullMoviePage = "restrictFullMoviePage";
                        }
                        if (message.restrictContentOwner != null && message.hasOwnProperty("restrictContentOwner")) {
                            object.restrictContentOwner = message.restrictContentOwner;
                            if (options.oneofs)
                                object._restrictContentOwner = "restrictContentOwner";
                        }
                        if (message.restrictLocation != null && message.hasOwnProperty("restrictLocation")) {
                            object.restrictLocation = message.restrictLocation;
                            if (options.oneofs)
                                object._restrictLocation = "restrictLocation";
                        }
                        if (message.restrictLocationPlaceId != null && message.hasOwnProperty("restrictLocationPlaceId")) {
                            object.restrictLocationPlaceId = message.restrictLocationPlaceId;
                            if (options.oneofs)
                                object._restrictLocationPlaceId = "restrictLocationPlaceId";
                        }
                        if (message.restrictHighDynamicRange != null && message.hasOwnProperty("restrictHighDynamicRange")) {
                            object.restrictHighDynamicRange = message.restrictHighDynamicRange;
                            if (options.oneofs)
                                object._restrictHighDynamicRange = "restrictHighDynamicRange";
                        }
                        if (message.restrictPartialSpherical != null && message.hasOwnProperty("restrictPartialSpherical")) {
                            object.restrictPartialSpherical = message.restrictPartialSpherical;
                            if (options.oneofs)
                                object._restrictPartialSpherical = "restrictPartialSpherical";
                        }
                        if (message.restrictPremiumTvfilmMoviePage != null && message.hasOwnProperty("restrictPremiumTvfilmMoviePage")) {
                            object.restrictPremiumTvfilmMoviePage = message.restrictPremiumTvfilmMoviePage;
                            if (options.oneofs)
                                object._restrictPremiumTvfilmMoviePage = "restrictPremiumTvfilmMoviePage";
                        }
                        if (message.restrictUnwatched != null && message.hasOwnProperty("restrictUnwatched")) {
                            object.restrictUnwatched = message.restrictUnwatched;
                            if (options.oneofs)
                                object._restrictUnwatched = "restrictUnwatched";
                        }
                        if (message.restrictPaidProductPlacement != null && message.hasOwnProperty("restrictPaidProductPlacement")) {
                            object.restrictPaidProductPlacement = message.restrictPaidProductPlacement;
                            if (options.oneofs)
                                object._restrictPaidProductPlacement = "restrictPaidProductPlacement";
                        }
                        if (message.restrictEightk != null && message.hasOwnProperty("restrictEightk")) {
                            object.restrictEightk = message.restrictEightk;
                            if (options.oneofs)
                                object._restrictEightk = "restrictEightk";
                        }
                        return object;
                    };

                    /**
                     * Converts this FilterOptions to JSON.
                     * @function toJSON
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FilterOptions.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for FilterOptions
                     * @function getTypeUrl
                     * @memberof youtube.api.innertube.SearchParams.FilterOptions
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    FilterOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/youtube.api.innertube.SearchParams.FilterOptions";
                    };

                    /**
                     * UploadDateRestrictType enum.
                     * @name youtube.api.innertube.SearchParams.FilterOptions.UploadDateRestrictType
                     * @enum {number}
                     * @property {number} UPLOAD_DATE_ANY=0 UPLOAD_DATE_ANY value
                     * @property {number} UPLOAD_DATE_LAST_HOUR=1 UPLOAD_DATE_LAST_HOUR value
                     * @property {number} UPLOAD_DATE_TODAY=2 UPLOAD_DATE_TODAY value
                     * @property {number} UPLOAD_DATE_THIS_WEEK=3 UPLOAD_DATE_THIS_WEEK value
                     * @property {number} UPLOAD_DATE_THIS_MONTH=4 UPLOAD_DATE_THIS_MONTH value
                     * @property {number} UPLOAD_DATE_THIS_YEAR=5 UPLOAD_DATE_THIS_YEAR value
                     */
                    FilterOptions.UploadDateRestrictType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UPLOAD_DATE_ANY"] = 0;
                        values[valuesById[1] = "UPLOAD_DATE_LAST_HOUR"] = 1;
                        values[valuesById[2] = "UPLOAD_DATE_TODAY"] = 2;
                        values[valuesById[3] = "UPLOAD_DATE_THIS_WEEK"] = 3;
                        values[valuesById[4] = "UPLOAD_DATE_THIS_MONTH"] = 4;
                        values[valuesById[5] = "UPLOAD_DATE_THIS_YEAR"] = 5;
                        return values;
                    })();

                    /**
                     * ResultTypeRestrictType enum.
                     * @name youtube.api.innertube.SearchParams.FilterOptions.ResultTypeRestrictType
                     * @enum {number}
                     * @property {number} RESULT_TYPE_ANY=0 RESULT_TYPE_ANY value
                     * @property {number} RESULT_TYPE_VIDEO=1 RESULT_TYPE_VIDEO value
                     * @property {number} RESULT_TYPE_CHANNEL=2 RESULT_TYPE_CHANNEL value
                     * @property {number} RESULT_TYPE_PLAYLIST=3 RESULT_TYPE_PLAYLIST value
                     * @property {number} RESULT_TYPE_MOVIE=4 RESULT_TYPE_MOVIE value
                     * @property {number} RESULT_TYPE_SHOW=5 RESULT_TYPE_SHOW value
                     * @property {number} RESULT_TYPE_SCENE=6 RESULT_TYPE_SCENE value
                     * @property {number} RESULT_TYPE_GAME=7 RESULT_TYPE_GAME value
                     * @property {number} RESULT_TYPE_EVENT=8 RESULT_TYPE_EVENT value
                     * @property {number} RESULT_TYPE_SHORTS=9 RESULT_TYPE_SHORTS value
                     */
                    FilterOptions.ResultTypeRestrictType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "RESULT_TYPE_ANY"] = 0;
                        values[valuesById[1] = "RESULT_TYPE_VIDEO"] = 1;
                        values[valuesById[2] = "RESULT_TYPE_CHANNEL"] = 2;
                        values[valuesById[3] = "RESULT_TYPE_PLAYLIST"] = 3;
                        values[valuesById[4] = "RESULT_TYPE_MOVIE"] = 4;
                        values[valuesById[5] = "RESULT_TYPE_SHOW"] = 5;
                        values[valuesById[6] = "RESULT_TYPE_SCENE"] = 6;
                        values[valuesById[7] = "RESULT_TYPE_GAME"] = 7;
                        values[valuesById[8] = "RESULT_TYPE_EVENT"] = 8;
                        values[valuesById[9] = "RESULT_TYPE_SHORTS"] = 9;
                        return values;
                    })();

                    /**
                     * DurationRestrictType enum.
                     * @name youtube.api.innertube.SearchParams.FilterOptions.DurationRestrictType
                     * @enum {number}
                     * @property {number} DURATION_ANY=0 DURATION_ANY value
                     * @property {number} DURATION_SHORT=1 DURATION_SHORT value
                     * @property {number} DURATION_LONG=2 DURATION_LONG value
                     * @property {number} DURATION_MEDIUM=3 DURATION_MEDIUM value
                     * @property {number} DURATION_SHORT_V2=4 DURATION_SHORT_V2 value
                     * @property {number} DURATION_MEDIUM_V2=5 DURATION_MEDIUM_V2 value
                     */
                    FilterOptions.DurationRestrictType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "DURATION_ANY"] = 0;
                        values[valuesById[1] = "DURATION_SHORT"] = 1;
                        values[valuesById[2] = "DURATION_LONG"] = 2;
                        values[valuesById[3] = "DURATION_MEDIUM"] = 3;
                        values[valuesById[4] = "DURATION_SHORT_V2"] = 4;
                        values[valuesById[5] = "DURATION_MEDIUM_V2"] = 5;
                        return values;
                    })();

                    /**
                     * SafeSearchRestrictType enum.
                     * @name youtube.api.innertube.SearchParams.FilterOptions.SafeSearchRestrictType
                     * @enum {number}
                     * @property {number} DEFAULT=0 DEFAULT value
                     * @property {number} NO_FILTERING=1 NO_FILTERING value
                     * @property {number} MODERATE_FILTERING=2 MODERATE_FILTERING value
                     * @property {number} STRICT_FILTERING=3 STRICT_FILTERING value
                     */
                    FilterOptions.SafeSearchRestrictType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "DEFAULT"] = 0;
                        values[valuesById[1] = "NO_FILTERING"] = 1;
                        values[valuesById[2] = "MODERATE_FILTERING"] = 2;
                        values[valuesById[3] = "STRICT_FILTERING"] = 3;
                        return values;
                    })();

                    return FilterOptions;
                })();

                return SearchParams;
            })();

            return innertube;
        })();

        return api;
    })();

    return youtube;
})();

module.exports = $root;
