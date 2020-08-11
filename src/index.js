// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  show?: boolean,
  hide?: boolean,
};


export default function ReactWind({children, className, show, hide, as: As = "div", ...restOfProps}) {


  return show && !hide ? <As className={classNames(className)} {...restOfProps}>{children}</As> : null;

}
