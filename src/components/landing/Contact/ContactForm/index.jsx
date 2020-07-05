import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Wrapper, Box } from './styles';

export default () => (
  <div
    style={{
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      flexDirection: 'row',
      padding: '2em',
    }}
  >
    <div className={Wrapper} style={{ fontSize: '18pt', lineHeight: '1.5em' }}>
      <h3 style={{ fontSize: '26pt' }}> Let's Talk! </h3>
      <div className={Box}>
        <span>Email : </span>
        <span>
          <a target="_blank" href="mailto:spiropoulos94@gmail.com">
            spiropoulos94@gmail.com
          </a>
        </span>
      </div>
      <div className={Box}>
        <span>Linked In : </span>
        <span>
          <a target="_blank" href="https://www.linkedin.com/in/nikos-spiropoulos-813167181/">
            Nikos Spiropoulos
          </a>
        </span>
      </div>
      <div className={Box}>
        <span>Github : </span>
        <span>
          <a target="_blank" href="https://github.com/spiropoulos94">
            spiropoulos94
          </a>
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Telephone : 6975549959 </span>
        <a style={{ color: 'white' }} href="tel:6975549959">
          <Button style={{ marginTop: '2vh' }}>Call Me</Button>
        </a>
      </div>
    </div>
  </div>
);
