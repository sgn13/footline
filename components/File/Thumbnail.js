import React, { useEffect, useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from 'react-icons/fa';

export const getFileExt = (fileString) => {
  const splittedFileIcon = String(fileString).split('.');

  if (splittedFileIcon.length) {
    return splittedFileIcon[splittedFileIcon.length - 1];
  }
};

const Thumbnail = ({ file, fileIcon, onClear, multiple }) => {
  const [thumb, setThumb] = useState(undefined);
  const [thumbType, setThumbType] = useState('');
  const [fileType, setFileType] = useState('');
  useEffect(() => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumb(reader.result);
    };
    file && reader.readAsDataURL(file);
  }, [file]);

  useEffect(() => {
    thumb && setThumbType(String(String(thumb).split('data:')[1]).split(';')[0]);
  }, [thumb]);

  useEffect(() => {
    if (fileIcon) {
      setFileType(getFileExt(fileIcon));
    }
  }, [fileIcon]);

  return (
    <div
      style={{
        width: '120px',
        height: '120px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        margin: '5px',
      }}
    >
      {(thumb || fileIcon) && (
        <>
          <img
            src={
              thumb
                ? thumbType.includes('image')
                  ? thumb
                  : require('assets/pdf.png')
                : fileType.includes('pdf')
                ? require('assets/pdf.png')
                : fileIcon
            }
            style={{
              borderRadius: '25px',
              border: '.1px solid #ccc',
              width: '100%',
              height: '100%',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          {onClear && (
            <button
              style={{
                width: 25,
                height: 25,
                position: 'absolute',
                top: '6px',
                right: '6px',
                background: 'gray',
                color: 'black',
                borderRadius: '100%',
                outline: 'none',
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (multiple) {
                  onClear(file);
                } else {
                  setThumb(undefined);
                  onClear('');
                }
              }}
            >
              {/* <FontAwesomeIcon icon={faTimes} color="white" /> */}
              <FaTimes />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Thumbnail;
