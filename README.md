# Chakra UI Time Picker

[![npm](https://img.shields.io/npm/v/react-samay)](https://npmjs.com/package/react-samay)
[![Node.js CI](https://github.com/sushantdhiman/react-samay/actions/workflows/ci.js.yml/badge.svg)](https://github.com/sushantdhiman/react-samay/actions/workflows/ci.js.yml)

Time picker for React.js

> This is a fork from [react-samay](https://www.npmjs.com/package/react-samay),
> I have also mixed styling
> support from [chakra ui](https://chakra-ui.com).

## Features

- Uses native date object
- Dropdown based hours, minutes, seconds & meridiem selection.
- Keyboard navigation
- Similar API as `react-samay`
- Written with Typescript, with built-in typings

## Demo link
> Storybook [Demo](https://dg0005.github.io/chakraui-time-picker/) link

## Install

```bash
npm i --save chakra-ui-time-picker
```

## Usage

```js
import { TimePicker } from 'chakra-ui-time-picker';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <TimePicker
    defaultValue={new Date()}
    onChange={(date) => {
      console.log(date);
    }}
  />,
  <div id="app" />
);
```

<!-- You can find more storybook examples [here](https://sushantdhiman.com/projects/react-samay). -->

## API

### TimePicker

| Name                | Type               | Default       |
| ------------------- | ------------------ | ------------- |
| prefixCls           | String             | 'react-samay' |
| disabled            | Boolean            | false         |
| isValid             | Boolean            | false         |
| open                | Boolean            | false         |
| defaultValue        | Date               | null          |
| defaultOpenValue    | Date               | new Date()    |
| value               | Date               | null          |
| placeholder         | String             | ''            |
| className           | String             | ''            |
| inputClassName      | String             | ''            |
| name                | String             | -             |
| id                  | String             | ''            |
| showHour            | Boolean            | true          |
| showMinute          | Boolean            | true          |
| showSecond          | Boolean            | true          |
| format              | String             | -             |
| disabledHours       | Function           | -             |
| disabledMinutes     | Function           | -             |
| disabledSeconds     | Function           | -             |
| use12Hours          | Boolean            | false         |
| hideDisabledOptions | Boolean            | false         |
| onChange            | Function           | null          |
| onAmPmChange        | Function           | null          |
| onOpen              | Function({ open }) |               |
| onClose             | Function({ open }) |               |
| hourStep            | Number             | 1             |
| minuteStep          | Number             | 1             |
| secondStep          | Number             | 1             |
