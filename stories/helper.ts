import { format, isValid, parseISO } from 'date-fns';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* System font stack */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
`;

export function generateOptions(length: number, excludedOptions: number[]) {
  const arr = [];
  for (let value = 0; value < length; value += 1) {
    if (excludedOptions.indexOf(value) < 0) {
      arr.push(value);
    }
  }
  return arr;
}


export function onChange(value: Date,saveValueFormat:string) {
  try {
    const formattedTime = format(value, saveValueFormat); // Format the time as "HH:mm:ss"
    console.log( formattedTime);
  } catch (error) {
    throw new Error(`Invalid format value, kindly enter valid value`)
  }
}

export function disabledHours(arr: number[]) {
  return [...arr];
}

export function disabledMinutes(h: number | null) {
  if (!h) return [];

  switch (h) {
    case 9:
      return generateOptions(60, [30]);
    case 21:
      return generateOptions(60, [0]);
    default:
      return generateOptions(60, []);
  }
}

export function disabledSeconds(h: number | null, m: number | null) {
  if (!h || !m) return [];

  return [h + (m % 60)];
}
