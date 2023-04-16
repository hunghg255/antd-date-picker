import * as React from 'react';
import Picker from 'rc-picker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import enUS from 'rc-picker/lib/locale/en_US';

const DatePicker = (props: any) => {
  return <Picker generateConfig={dayjsGenerateConfig} locale={enUS} {...props} />;
};

export default DatePicker;
