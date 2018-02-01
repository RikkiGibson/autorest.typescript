/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { AutoRestUrlTestService } from "../autoRestUrlTestService";

const WebResource = msRest.WebResource;

/** Class representing a PathItems. */
export class PathItems {
  private readonly client: AutoRestUrlTestService;
  /**
   * Create a PathItems.
   * @param {AutoRestUrlTestService} client Reference to the service client.
   */
  constructor(client: AutoRestUrlTestService) {
    this.client = client;
  }

  /**
   * send globalStringPath='globalStringPath',
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery='globalStringQuery',
   * pathItemStringQuery='pathItemStringQuery',
   * localStringQuery='localStringQuery'
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetAllWithValuesOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getAllWithValuesWithHttpOperationResponse(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetAllWithValuesOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
    let pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
    // Validate
    try {
      if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
        throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
      }
      if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
        throw new Error('localStringQuery must be of type string.');
      }
      if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
        throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
      }
      if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
        throw new Error('pathItemStringQuery must be of type string.');
      }
      if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
        throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
      }
      if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
        throw new Error('this.client.globalStringQuery must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery';
    requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
    requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
    requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
    let queryParamsArray: Array<any> = [];
    if (localStringQuery !== null && localStringQuery !== undefined) {
      queryParamsArray.push('localStringQuery=' + encodeURIComponent(localStringQuery));
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
      queryParamsArray.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
      queryParamsArray.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
    }
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
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * send globalStringPath='globalStringPath',
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery=null, pathItemStringQuery='pathItemStringQuery',
   * localStringQuery='localStringQuery'
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetGlobalQueryNullOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getGlobalQueryNullWithHttpOperationResponse(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalQueryNullOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
    let pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
    // Validate
    try {
      if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
        throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
      }
      if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
        throw new Error('localStringQuery must be of type string.');
      }
      if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
        throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
      }
      if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
        throw new Error('pathItemStringQuery must be of type string.');
      }
      if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
        throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
      }
      if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
        throw new Error('this.client.globalStringQuery must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery';
    requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
    requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
    requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
    let queryParamsArray: Array<any> = [];
    if (localStringQuery !== null && localStringQuery !== undefined) {
      queryParamsArray.push('localStringQuery=' + encodeURIComponent(localStringQuery));
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
      queryParamsArray.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
      queryParamsArray.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
    }
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
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * send globalStringPath=globalStringPath,
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery=null, pathItemStringQuery='pathItemStringQuery',
   * localStringQuery=null
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetGlobalAndLocalQueryNullOptionalParams} [options]
   * Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getGlobalAndLocalQueryNullWithHttpOperationResponse(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
    let pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
    // Validate
    try {
      if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
        throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
      }
      if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
        throw new Error('localStringQuery must be of type string.');
      }
      if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
        throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
      }
      if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
        throw new Error('pathItemStringQuery must be of type string.');
      }
      if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
        throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
      }
      if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
        throw new Error('this.client.globalStringQuery must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null';
    requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
    requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
    requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
    let queryParamsArray: Array<any> = [];
    if (localStringQuery !== null && localStringQuery !== undefined) {
      queryParamsArray.push('localStringQuery=' + encodeURIComponent(localStringQuery));
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
      queryParamsArray.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
      queryParamsArray.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
    }
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
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * send globalStringPath='globalStringPath',
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery='globalStringQuery', pathItemStringQuery=null,
   * localStringQuery=null
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetLocalPathItemQueryNullOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getLocalPathItemQueryNullWithHttpOperationResponse(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetLocalPathItemQueryNullOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let localStringQuery = (options && options.localStringQuery !== undefined) ? options.localStringQuery : undefined;
    let pathItemStringQuery = (options && options.pathItemStringQuery !== undefined) ? options.pathItemStringQuery : undefined;
    // Validate
    try {
      if (localStringPath === null || localStringPath === undefined || typeof localStringPath.valueOf() !== 'string') {
        throw new Error('localStringPath cannot be null or undefined and it must be of type string.');
      }
      if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery.valueOf() !== 'string') {
        throw new Error('localStringQuery must be of type string.');
      }
      if (pathItemStringPath === null || pathItemStringPath === undefined || typeof pathItemStringPath.valueOf() !== 'string') {
        throw new Error('pathItemStringPath cannot be null or undefined and it must be of type string.');
      }
      if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery.valueOf() !== 'string') {
        throw new Error('pathItemStringQuery must be of type string.');
      }
      if (this.client.globalStringPath === null || this.client.globalStringPath === undefined || typeof this.client.globalStringPath.valueOf() !== 'string') {
        throw new Error('this.client.globalStringPath cannot be null or undefined and it must be of type string.');
      }
      if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined && typeof this.client.globalStringQuery.valueOf() !== 'string') {
        throw new Error('this.client.globalStringQuery must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null';
    requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
    requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
    requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(this.client.globalStringPath));
    let queryParamsArray: Array<any> = [];
    if (localStringQuery !== null && localStringQuery !== undefined) {
      queryParamsArray.push('localStringQuery=' + encodeURIComponent(localStringQuery));
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
      queryParamsArray.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
    }
    if (this.client.globalStringQuery !== null && this.client.globalStringQuery !== undefined) {
      queryParamsArray.push('globalStringQuery=' + encodeURIComponent(this.client.globalStringQuery));
    }
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
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * send globalStringPath='globalStringPath',
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery='globalStringQuery',
   * pathItemStringQuery='pathItemStringQuery',
   * localStringQuery='localStringQuery'
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetAllWithValuesOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllWithValues(localStringPath: string, pathItemStringPath: string): Promise<void>;
  getAllWithValues(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetAllWithValuesOptionalParams): Promise<void>;
  getAllWithValues(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  getAllWithValues(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetAllWithValuesOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getAllWithValues(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetAllWithValuesOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getAllWithValuesWithHttpOperationResponse(localStringPath, pathItemStringPath, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getAllWithValuesWithHttpOperationResponse(localStringPath, pathItemStringPath, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * send globalStringPath='globalStringPath',
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery=null, pathItemStringQuery='pathItemStringQuery',
   * localStringQuery='localStringQuery'
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetGlobalQueryNullOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string): Promise<void>;
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetGlobalQueryNullOptionalParams): Promise<void>;
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetGlobalQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalQueryNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getGlobalQueryNullWithHttpOperationResponse(localStringPath, pathItemStringPath, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getGlobalQueryNullWithHttpOperationResponse(localStringPath, pathItemStringPath, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * send globalStringPath=globalStringPath,
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery=null, pathItemStringQuery='pathItemStringQuery',
   * localStringQuery=null
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetGlobalAndLocalQueryNullOptionalParams} [options]
   * Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string): Promise<void>;
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams): Promise<void>;
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getGlobalAndLocalQueryNullWithHttpOperationResponse(localStringPath, pathItemStringPath, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getGlobalAndLocalQueryNullWithHttpOperationResponse(localStringPath, pathItemStringPath, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * send globalStringPath='globalStringPath',
   * pathItemStringPath='pathItemStringPath', localStringPath='localStringPath',
   * globalStringQuery='globalStringQuery', pathItemStringQuery=null,
   * localStringQuery=null
   *
   * @param {string} localStringPath should contain value 'localStringPath'
   *
   * @param {string} pathItemStringPath A string value 'pathItemStringPath' that
   * appears in the path
   *
   * @param {PathItemsGetLocalPathItemQueryNullOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string): Promise<void>;
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetLocalPathItemQueryNullOptionalParams): Promise<void>;
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetLocalPathItemQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetLocalPathItemQueryNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getLocalPathItemQueryNullWithHttpOperationResponse(localStringPath, pathItemStringPath, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getLocalPathItemQueryNullWithHttpOperationResponse(localStringPath, pathItemStringPath, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

}
