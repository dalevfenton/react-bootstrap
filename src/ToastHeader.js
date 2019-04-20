import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';

import { useBootstrapPrefix } from './ThemeProvider';
import CloseButton from './CloseButton';

const propTypes = {
  bsPrefix: PropTypes.string,

  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: PropTypes.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Toast component, the onHide will automatically be propagated up to the
   * parent Toast `onHide`.
   */
  onHide: PropTypes.func,
};

const defaultProps = {
  closeLabel: 'Close',
  closeButton: false,
};

const ToastHeader = () => <h1>Header</h1>;

ToastHeader.displayName = 'ToastHeader';
ToastHeader.propTypes = propTypes;
ToastHeader.defaultProps = defaultProps;

export default ToastHeader;