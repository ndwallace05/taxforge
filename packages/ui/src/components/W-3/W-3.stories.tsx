import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-3Interview from './Interview';
import W-3Form from './Form';
import w-3Reducer from '../../store/slices/w-3Slice';

const store = configureStore({
  reducer: {
    w-3: w-3Reducer
  }
});

const meta: Meta<typeof W-3Interview> = {
  title: 'Forms/W-3',
  component: W-3Interview,
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
      <W-3Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-3Form printMode={true} />
    </Provider>
  ),
};
