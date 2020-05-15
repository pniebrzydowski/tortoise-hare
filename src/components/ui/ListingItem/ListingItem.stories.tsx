import React from 'react';

import { number, text } from '@storybook/addon-knobs';

import ListingItemComponent from './ListingItem';

export default {
  title: "UI Components",
};

export const ListingItem = () => {
  const linkText = text("Link Text", "Details");
  const title = text("Title", "List Item Title");
  const subInfo = number("Sub-title Info Items", 2);
  const info = Array.from({ length: subInfo }, (v, k) => k + 1);

  return (
    <ListingItemComponent
      linkUrl="#"
      linkText={linkText}
      title={title}
      info={info.map((i) => `Info Item #${i}`)}
    />
  );
};
