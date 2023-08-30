import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { configuration } from 'configuration';

const DownloadView = ({ url, filename, children, ext, autoClick = false, clickCallback }) => {
  const dispatch = useDispatch();

  const downloadFile = (url) => {
    try {
      axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
        baseURL: configuration.api.url || 'http://localhost:3001/api/v1',
        headers: {
          Authorization: 'Token ' + sessionStorage.getItem('token'),
        },
        timeout: 45000,
        onDownloadProgress: (progressEvent) => {},
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${String(filename).replace(`.${ext}`, '')}.${ext}`);
        document.body.appendChild(link);
        link.click();
      });
    } catch (e) {}
  };

  if (autoClick) {
    downloadFile(url);
    clickCallback();
  }

  return (
    <span style={{ cursor: 'pointer', color: 'skyblue' }} onClick={() => downloadFile(url)}>
      {children}
    </span>
  );
};

export default DownloadView;
