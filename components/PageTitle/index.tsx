import { useEffect } from 'react';

const PageTitle = (props) => {
  if (!props.title) return props.children;

  useEffect(() => {
    if (props.title) {
      document.title = props.title || '';
    }
  }, [props]);
  return props.children;
};

export default PageTitle;
