import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8839Interview from './Interview';
import 8839Form from './Form';
import 8839Reducer from '../../store/slices/8839Slice';

const store = configureStore({
  reducer: {
    8839: 8839Reducer
  }
});

const meta: Meta<typeof 8839Interview> = {
  title: 'Forms/8839',
  component: 8839Interview,
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
      <8839Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8839Form printMode={true} />
    </Provider>
  ),
};
