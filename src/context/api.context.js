import React, {useState, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let accessToken =
  'BQAnMEkLSASxNkB3Mk_23-HsiQ87rOBjphwB0FeMjH7PywEFtKlyvrqG09cAuzXWU9kpNQilKiaKR-2FSoeEVVguFByg6aeGdnaVhDtJfSz3uLMbQS4';

const baseURL = 'https://api.spotify.com/v1/';
const timeout = 60000;
export const ApiContext = createContext();

const getToken = async () => JSON.parse(await AsyncStorage.getItem('token'));

export const ApiProvider = props => {
  const get = async (url, options) => {
    const requestURL = `${baseURL}${url}`;
    const token = await getToken();
    axios
      .get(requestURL, {
        // headers: {Authorization: `Bearer ${token}`},
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        timeout: parseInt(timeout),
      })
      .then(response => {
        console.log(response);
        if (options.success) options.success(response);
        else __DEV__ && console.warn(response);
      })
      .catch(error => {
        console.log(error);
        if (options.error) options.error(error);
        else __DEV__ && console.warn(error);
      });
  };

  const post = async (url, params, options) => {
    let CancelToken = axios.CancelToken;
    const requestURL = `${baseURL}${url}`;
    const token = await getToken();

    console.log(params);
    axios
      .post(requestURL, params, {
        headers: {Authorization: `Bearer ${accessToken}`},
        // headers: {
        //   'X-RapidAPI-Key':
        //     '6c9ef7de4fmsh9cb04c9a1fcf04ap16c501jsn47a76937a2d2',
        //   'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
        // },
        timeout: parseInt(timeout),
        onDownloadProgress: progress => {
          if (options.onDownloadProgress) {
            options.onDownloadProgress(progress);
          }
        },
        onUploadProgress: progress => {
          if (options.onUploadProgress) {
            options.onUploadProgress(progress);
          }
        },
        cancelToken: new CancelToken(cancel => {
          if (options.cancel) {
            options.cancel(cancel);
          }
        }),
      })
      .then(response => {
        if (options.success) {
          console.log(response.data);
          options.success(response);
        } else __DEV__ && console.warn(response.data);
      })
      .catch(error => {
        if (options.error) options.error(error);
        else __DEV__ && console.warn(error);
      });
  };

  const put = async (url, params, options) => {
    let CancelToken = axios.CancelToken;
    const requestURL = `${baseURL}${url}`;
    const token = await getToken();

    axios
      .put(requestURL, params, {
        headers: {Authorization: `Bearer ${token}`},
        timeout: parseInt(timeout),
        onDownloadProgress: progress => {
          if (options.onDownloadProgress) {
            options.onDownloadProgress(progress);
          }
        },
        onUploadProgress: progress => {
          if (options.onUploadProgress) {
            options.onUploadProgress(progress);
          }
        },
        cancelToken: new CancelToken(cancel => {
          if (options.cancel) {
            options.cancel(cancel);
          }
        }),
      })
      .then(response => {
        if (options.success) options.success(response.data);
        else __DEV__ && console.warn(response.data);
      })
      .catch(error => {
        if (options.error) options.error(error);
        else __DEV__ && console.warn(error);
      });
  };

  const patch = async (url, params, options) => {
    let CancelToken = axios.CancelToken;
    const requestURL = `${baseURL}${url}`;
    const token = await getToken();

    axios
      .patch(requestURL, params, {
        headers: {Authorization: `Bearer ${token}`},
        timeout: parseInt(timeout),
        onDownloadProgress: progress => {
          if (options.onDownloadProgress) {
            options.onDownloadProgress(progress);
          }
        },
        onUploadProgress: progress => {
          if (options.onUploadProgress) {
            options.onUploadProgress(progress);
          }
        },
        cancelToken: new CancelToken(cancel => {
          if (options.cancel) {
            options.cancel(cancel);
          }
        }),
      })
      .then(response => {
        if (options.success) options.success(response.data);
        else __DEV__ && console.warn(response.data);
      })
      .catch(error => {
        if (options.error) options.error(error);
        else __DEV__ && console.warn(error);
      });
  };

  const remove = async (url, params, options) => {
    const requestURL = `${baseURL}${url}`;
    const token = await getToken();

    axios
      .delete(requestURL, {
        headers: {Authorization: `Bearer ${token}`},
        timeout: parseInt(timeout),
        data: {...params},
        params: {...params},
      })
      .then(response => {
        if (options.success) options.success(response.data);
        else __DEV__ && console.warn(response.data);
      })
      .catch(error => {
        if (options.error) options.error(error);
        else __DEV__ && console.warn(error);
      });
  };

  // const baseUrl = 'https://devapi.fabluent.com/';
  const apiBaseUrl = 'https://devapi.fabluent.com/api/';
  const assetBaseUrl = 'https://devapi.fabluent.com/img/';

  const contextValue = {
    baseURL,
    apiBaseUrl,
    assetBaseUrl,
    get,
    post,
    remove,
    put,
    patch,
  };

  return (
    <ApiContext.Provider value={contextValue}>
      {props.children}
    </ApiContext.Provider>
  );
};

export const useAxios = () => useContext(ApiContext);
