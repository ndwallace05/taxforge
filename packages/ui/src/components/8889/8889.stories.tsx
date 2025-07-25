import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8889Interview from './Interview';
import 8889Form from './Form';
import 8889Reducer from '../../store/slices/8889Slice';

const store = configureStore({
  reducer: {
    8889: 8889Reducer
  }
});

const meta: Meta<typeof 8889Interview> = {
  title: 'Forms/8889',
  component: 8889Interview,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interview: Story = {
  args: {},
};

export const FormView: Story = {
  render: () => (
    <Provider store={store}>
      <8889Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8889Form printMode={true} />
    </Provider>
  ),
};
