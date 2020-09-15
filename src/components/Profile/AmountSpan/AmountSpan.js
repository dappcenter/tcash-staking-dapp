import React from 'react';
import numeral from 'numeral';
import Skeleton from '@material-ui/lab/Skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import extProps from './propTypes';
import tcash from '../../../assets/images/tcash/tcash-small-blue.png';

/*
 *
 * Display amount with skeleton when loading
 *
 */

const AmountSpan = React.memo(({
  classes, title, number, format = '(0.00a)', tcashPrice,
  isShowTcash, isXl, isPercent, isDay, isLoading,
}) => {
  // eslint-disable-next-line no-extra-boolean-cast
  const price = !!tcashPrice ? number * tcashPrice : number;
  const toPrint = numeral(price).format(format);

  return (
    <>
      <span className={`opacity-6 pb-2 ${isXl && 'font-size-lg'}`}>{title}</span>
      <div className="d-flex align-items-center justify-content-center">
        {
          isLoading ? (<Skeleton variant="text" width={100} height={35} />)
            : (
              <>
                { (isShowTcash && !tcashPrice) && (
                  <img alt="Tcash logo" className={classes.tcashLogo} src={tcash} height="16px" />
                ) }
                { (isShowTcash && !!tcashPrice) && (
                  <FontAwesomeIcon className={classes.iconDollar} icon={['fas', 'dollar-sign']} />
                ) }
                <span className={`font-weight-bold 
              ${isXl ? 'font-size-xl' : 'font-size-lg'} 
              ${(!isPercent && !isDay) && classes.pr16}
              ${classes.amount}`}
                >
                  { (!isPercent && !isDay) ? toPrint.slice(0, -1) : toPrint }
                  { (!isPercent && price > 999) && (<small className="opacity-6 pl-1">{toPrint.slice(-1)}</small>)}
                  { isPercent && (<small className="opacity-6 pl-1">%</small>)}
                  { isDay && (<small className="opacity-6 pl-1">Day</small>)}
                </span>
              </>
            )
        }
      </div>
    </>
  );
});

AmountSpan.propTypes = extProps;

export default AmountSpan;
