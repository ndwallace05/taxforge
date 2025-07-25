import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-4PInterview from './Interview';
import W-4PForm from './Form';
import w-4pReducer from '../../store/slices/w-4pSlice';

const store = configureStore({
  reducer: {
    w-4p: w-4pReducer
  }
});

const meta: Meta<typeof W-4PInterview> = {
  title: 'Forms/W-4P',
  component: W-4PInterview,
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
      <W-4PForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-4PForm printMode={true} />
    </Provider>
  ),
};
