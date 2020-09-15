import React from 'react';
import { Switch } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import extProps from './propTypes';
import tcash from '../../../assets/images/tcash/tcash-small-blue.png';

/*
 *
 * Display switch to dollar value or tcash value
 *
 */

const SwitchShowDollar = React.memo(({ classes, isShowDollar, onSwitch }) => (
  <div className={classes.divTopRight}>
    { isShowDollar
      ? (<FontAwesomeIcon className={classes.iconDollar} icon={['fas', 'dollar-sign']} />)
      : (<img alt="Tcash logo" className={classes.tcashLogo} src={tcash} height="16px" />)}
    <Switch
      checked={isShowDollar}
      onChange={() => onSwitch(!isShowDollar)}
      value="checkedA"
      color="primary"
    />
  </div>
));

SwitchShowDollar.propTypes = extProps;

export default SwitchShowDollar;
