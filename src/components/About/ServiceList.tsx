import * as React from 'react';
import { ServiceListProps } from './types';
import { ServiceItem } from './ServiceItem';

export const ServiceList = ({ items }: ServiceListProps) => (
  <div className="flex flex-col mt-4 leading-loose bg-blend-normal min-h-[120px] max-md:pb-24 max-md:max-w-full">
    {items.map((item, index) => (
      <ServiceItem key={index} text={item} />
    ))}
  </div>
);
