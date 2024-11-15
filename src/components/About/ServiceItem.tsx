import * as React from 'react';
import { ServiceItemProps } from './types';

export const ServiceItem = ({ text }: ServiceItemProps) => (
  <div className="px-5 mt-2.5 max-w-full bg-blend-normal w-[576px] max-md:pr-5">
    {text}
  </div>
);
