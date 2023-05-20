import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import SearchSyncToolbar from '../../components/SearchSyncToolbar';
import { useImportTool } from '../../hooks/Tools';

export default {
  title: 'Hooks/Tools/Import Tool',
  component: SearchSyncToolbar,
} as Meta<typeof SearchSyncToolbar>;

const Template: StoryFn<typeof SearchSyncToolbar> = () => {
  const importTool = useImportTool();
  return <SearchSyncToolbar tools={[importTool]} />;
};

export const Default = Template.bind({});
Default.args = {};
