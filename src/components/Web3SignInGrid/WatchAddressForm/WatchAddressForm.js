import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';

import extProps from './propTypes';

/*
 *
 * Form to set watch-only wallet (can be ENS)
 *
 */

const WatchAddressForm = React.memo(({
  classes, messages, onConfirm, isLoading,
}) => {
  const [walletAddress, setWalletAddress] = useState(false);

  return (
    <div className={classes.divForm}>
      <TextField
        variant="outlined"
        label={messages['Wallet address or ENS']}
        fullWidth
        type="text"
        placeholder="0xc078901477b01c708874e0a7e335366a01bf14ce"
        onKeyDown={(e) => { if (e.key === 'Enter' && !!walletAddress) onConfirm(walletAddress); }}
        onChange={(e) => setWalletAddress(e.target.value)}
        className={classes.inputWallet}
      />
      <div className={classes.wrapper}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          disabled={!walletAddress || isLoading}
          onClick={() => onConfirm(walletAddress)}
          className={classes.btnConfirm}
        >
          {messages.Confirm}
        </Button>
        { isLoading && (<CircularProgress size={26} className={classes.buttonProgress} />)}
      </div>
    </div>
  );
});

WatchAddressForm.propTypes = extProps;

export default WatchAddressForm;
