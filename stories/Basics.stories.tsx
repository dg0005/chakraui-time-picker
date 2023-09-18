/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  onChange,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
} from './helper';
import TimePicker from '../src/TimePicker';

const meta = { 
  component: TimePicker,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;


export const Default = {
  render: () =>
    <TimePicker
    //  defaultValue={new Date()} 
    placeholder='please select'
    onChange={onChange} />
};

export const Disabled = {
  render: () => <>
    <h5>disabled=true</h5>
    <TimePicker disabled defaultValue={new Date()} onChange={onChange} />
    <br />
    <h5>disabledHours,disabledMinutes,disabledSeconds</h5>
    <TimePicker
      showSecond
      defaultValue={new Date()}
      onChange={onChange}
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      disabledSeconds={disabledSeconds}
    />
  </>,
};

export const Steps = {
  render: () =>
    <TimePicker defaultValue={new Date()} minuteStep={10} use12Hours showSecond={false} />
};

export const Hours = {
  render: () =>
    <TimePicker
      use12Hours
      showSecond={false}
      defaultValue={new Date()}
      onChange={onChange}
    />
};

export const Format = {
  render: () =>
    <>
      <h5>showHour=false</h5>
      <TimePicker defaultValue={new Date()} showHour={false} />
      <br />
      <h5>showMinute=false</h5>
      <TimePicker defaultValue={new Date()} showMinute={false} />
      <br />
      <h5>showSecond=false</h5>
      <TimePicker defaultValue={new Date()} showSecond={false} />
      <br />
      <h5>showMinute=false, showSecond=false</h5>
      <TimePicker
        defaultValue={new Date()}
        showMinute={false}
        showSecond={false}
      />
      <br />
      <h5>showHour=false, showSecond=false</h5>
      <TimePicker
        defaultValue={new Date()}
        showHour={false}
        showSecond={false}
      />
      <br />
      <h5>showHour=false, showMinute=false</h5>
      <TimePicker
        defaultValue={new Date()}
        showHour={false}
        showMinute={false}
      />
    </>
};