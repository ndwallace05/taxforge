import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8815Interview from './Interview';
import 8815Form from './Form';
import 8815Reducer from '../../store/slices/8815Slice';

const store = configureStore({
  reducer: {
    8815: 8815Reducer
  }
});

const meta: Meta<typeof 8815Interview> = {
  title: 'Forms/8815',
  component: 8815Interview,
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
      <8815Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8815Form printMode={true} />
    </Provider>
  ),
};
