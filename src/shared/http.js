import 'isomorphic-fetch';


/**
 * Fire the actual http request & return a Promise object.
 *
 * @param {string} method standard http method.
 * @param {string} url endpoint url to request.
 * @param {object} settings configurations used by superagent.
 * @return {Promise} Promise object for futher processing.
 * @api private
 */
const execute = (method, url, settings) => {
  // SEE https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
  const defaults = { credentials: url.startsWith('http') ? 'include' : 'same-origin' };
  const options = Object.assign({}, defaults, settings);
  options.method = method;
  return fetch(url, options).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  });
};

/**
 * Fire an http GET request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const get = (url, options) => execute('GET', url, options);


/**
 * Fire an http POST request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const post = (url, options) => execute('POST', url, options);


/**
 * Fire an http PUT request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const put = (url, options) => execute('PUT', url, options);


/**
 * Fire an http DELETE request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const remove = (url, options) => execute('DELETE', url, options);


export {
  get,
  post,
  put,
  remove,
};
