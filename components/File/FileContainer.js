import React, { useEffect, useMemo, useState } from 'react';

import Dropzone from 'react-dropzone';

import BaseComponent from 'components/BaseComponent';
import Thumbnail, { getFileExt } from './Thumbnail';

// import ViewUploads from 'components/ViewUploads/index';

const baseStyle = {
  width: '100%',
  justifyContent: 'center',
  minHeight: '100px',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  cursor: 'pointer',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const FileContainer = ({
  onChange,
  onClear,
  onRemove,
  onAddRemoved,
  value = [],
  thumb,
  removedThumb,
  multiple = false,
  accept,
  ...attributes
}) => {
  return (
    <>
      <BaseComponent {...attributes}>
        <Dropzone
          accept={accept || ''}
          onDrop={(acceptedFiles) => {
            if (acceptedFiles.length === 0) {
              return;
            }
            thumb && onRemove(thumb);
            onChange(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject }) => {
            const style = useMemo(
              () => ({
                ...baseStyle,
                ...(isDragActive ? activeStyle : {}),
                ...(isDragAccept ? acceptStyle : {}),
                ...(isDragReject ? rejectStyle : {}),
              }),
              [isDragActive, isDragReject, isDragAccept],
            );
            return (
              <section>
                {(value.length === 0 || multiple) && (
                  <div>
                    <p>Click below to add a file.</p> <input {...getInputProps()} />
                  </div>
                )}
                <div
                  {...getRootProps({
                    style: { ...style, flexDirection: 'column' },
                  })}
                >
                  {!!value.length && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '15px',
                      }}
                    >
                      {value &&
                        value.length &&
                        value.map((item, i) => (
                          <Thumbnail key={i} file={item} onClear={onClear} multiple={multiple} />
                        ))}
                    </div>
                  )}
                  {!!(multiple && thumb && thumb.length) && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '15px',
                      }}
                    >
                      {thumb.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '15px',
                          }}
                        >
                          <Thumbnail key={i} fileIcon={item} />
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemove(item);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {!!(multiple && removedThumb && removedThumb.length) && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '15px',
                        width: '100%',
                      }}
                    >
                      <p>Removed Images</p>
                      {removedThumb.map((item, i) => (
                        <>
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              marginTop: '15px',
                            }}
                          >
                            <Thumbnail key={i} fileIcon={item} />
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={(e) => {
                                e.stopPropagation();
                                onAddRemoved(item);
                              }}
                            >
                              Add
                            </button>
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                  {!!(!multiple && thumb && thumb.length) && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '15px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginTop: '15px',
                        }}
                      >
                        <Thumbnail fileIcon={thumb} />
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemove(thumb);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          }}
        </Dropzone>
      </BaseComponent>
    </>
  );
};

export default FileContainer;
