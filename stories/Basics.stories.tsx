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
  <>
  <TimePicker
    placeholder='please select'
    saveValueFormat='HH:mm'
    onChange={(e,f)=>{
      console.log("here",f)
    }} 
    />
    </>
};

export const Disabled = {
  render: () => <>
    <h5>disabled=true</h5>
    <TimePicker disabled defaultValue={new Date()} onChange={onChange} />

     <h5>disabledHours=[1,2,3,4]</h5>
    <TimePicker defaultValue={new Date()} disabledHours={()=>disabledHours([1,2,3,4])} onChange={onChange} />
   

    <h5>disabledMinutes</h5>
    <TimePicker defaultValue={new Date()}  disabledMinutes={disabledMinutes}  onChange={onChange} />
   
  </>,
};

export const Steps = {
  render: () =>
    <>
    <h5>minuteStep=10</h5>
    <TimePicker defaultValue={new Date()} minuteStep={10} />
    <h5>hourStep=2</h5>
    <TimePicker defaultValue={new Date()} hourStep={2} />
    </>
};

export const TimeFormat = {
  render: () =>
  <>
   <h5>saveValueFormat=HH:mm</h5>
    <TimePicker
      saveValueFormat={'HH:mm'}
      defaultValue={new Date()}
      onChange={onChange}
    />
    </>
};

