import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx('icon')}>
          {checked ? (
            <MdCheckBox className={cx('checked')} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

/*
classNames 사용시, 여러 개의 스타일이나 조건부 스타일링을 적용할 때 더 쉽게 사용 가능 
cx('one', 'two')
cx('my-component', {
  condition: true
})
cx('my-component', ['another', 'classnames']) 
*/

export default CheckBox;
