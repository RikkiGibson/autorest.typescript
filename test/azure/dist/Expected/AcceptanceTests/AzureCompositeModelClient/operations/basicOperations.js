"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Mappers = require("../models/mappers");
const WebResource = msRest.WebResource;
/** Class representing a BasicOperations. */
class BasicOperations {
    /**
     * Create a BasicOperations.
     * @param {AzureCompositeModel} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get complex type {id: 2, name: 'abc', color: 'YELLOW'}
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getValidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/basic/valid';
            let queryParamsArray = [];
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Basic;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Please put {id: 2, name: 'abc', color: 'Magenta'}
     *
     * @param {Basic} complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    putValidWithHttpOperationResponse(complexBody, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let apiVersion = '2016-02-29';
            // Validate
            try {
                if (complexBody === null || complexBody === undefined) {
                    throw new Error('complexBody cannot be null or undefined.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/basic/valid';
            let queryParamsArray = [];
            queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'PUT';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Serialize Request
            let requestContent = null;
            let requestModel = null;
            try {
                if (complexBody !== null && complexBody !== undefined) {
                    let requestModelMapper = Mappers.Basic;
                    requestModel = client.serializer.serialize(requestModelMapper, complexBody, 'complexBody');
                    requestContent = JSON.stringify(requestModel);
                }
            }
            catch (error) {
                let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
                    `payload - ${JSON.stringify(complexBody, null, 2)}.`);
                return Promise.reject(serializationError);
            }
            httpRequest.body = requestContent;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get a basic complex type that is invalid for the local strong type
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getInvalidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/basic/invalid';
            let queryParamsArray = [];
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Basic;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get a basic complex type that is empty
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getEmptyWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/basic/empty';
            let queryParamsArray = [];
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Basic;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get a basic complex type whose properties are null
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getNullWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/basic/null';
            let queryParamsArray = [];
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Basic;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get a basic complex type while the server doesn't provide a response payload
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getNotProvidedWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/basic/notprovided';
            let queryParamsArray = [];
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.Basic;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    getValid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getValidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    putValid(complexBody, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.putValidWithHttpOperationResponse(complexBody, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.putValidWithHttpOperationResponse(complexBody, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getInvalid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getInvalidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getInvalidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getEmpty(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getEmptyWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getEmptyWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getNull(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getNullWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getNullWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getNotProvided(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getNotProvidedWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getNotProvidedWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
exports.BasicOperations = BasicOperations;
//# sourceMappingURL=basicOperations.js.map