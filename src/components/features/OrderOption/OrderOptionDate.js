import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.module.scss';

const OrderOptionDate = ({setOptionValue, currentValue}) => (
  <div className={styles.component}>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)} />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

OrderOptionDate.defaultProps = {
  currentValue: new Date(),
};

export default OrderOptionDate;