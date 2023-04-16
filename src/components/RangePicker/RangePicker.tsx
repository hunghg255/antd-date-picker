import * as React from 'react';
import { RangePicker as RcRangePicker } from 'rc-picker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import enUS from 'rc-picker/lib/locale/en_US';

const Icon = () => (
  <svg
    viewBox='0 0 1024 1024'
    focusable='false'
    data-icon='swap-right'
    width='1em'
    height='1em'
    fill='currentColor'
    aria-hidden='true'
  >
    <path d='M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z' />
  </svg>
);

const RangePicker = (props: any) => (
  <RcRangePicker
    generateConfig={dayjsGenerateConfig}
    locale={enUS}
    separator={<Icon />}
    {...props}
  />
);

export default RangePicker;
