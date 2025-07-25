import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1041Interview from './Interview';
import 1041Form from './Form';
import 1041Reducer from '../../store/slices/1041Slice';

const store = configureStore({
  reducer: {
    1041: 1041Reducer
  }
});

const meta: Meta<typeof 1041Interview> = {
  title: 'Forms/1041',
  component: 1041Interview,
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
      <1041Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1041Form printMode={true} />
    </Provider>
  ),
};
