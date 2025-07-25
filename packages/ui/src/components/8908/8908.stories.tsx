import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8908Interview from './Interview';
import 8908Form from './Form';
import 8908Reducer from '../../store/slices/8908Slice';

const store = configureStore({
  reducer: {
    8908: 8908Reducer
  }
});

const meta: Meta<typeof 8908Interview> = {
  title: 'Forms/8908',
  component: 8908Interview,
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
      <8908Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8908Form printMode={true} />
    </Provider>
  ),
};
