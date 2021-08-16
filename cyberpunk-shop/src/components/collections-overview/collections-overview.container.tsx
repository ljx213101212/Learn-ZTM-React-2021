import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';
import { selectIsCollectionFetching } from '../../redux/page-state/page-state.selectors';

const mapStateToProps = createStructuredSelector<any, any, any>({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer: React.FC = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview) as unknown as React.FC;

export default CollectionsOverviewContainer;
