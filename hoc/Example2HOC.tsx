import React from 'react';
import { connect } from 'react-redux';
import { setSidebar } from 'store/app/actions';
import { Example2Sidebar } from 'constants/sidebar';
import withAuth from 'hoc/withAuth';

export const IndexHOC = (WrappedComponent) => {
  class HOC extends React.Component {
    componentDidMount() {
      const { setSidebar } = this.props;

      setSidebar(Example2Sidebar({}));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({}) => ({});

  const mapDispatchToProps = {
    setSidebar,
  };

  const connector = connect(mapStateToProps, mapDispatchToProps);

  return connector(withAuth(HOC));
};

export default IndexHOC;
