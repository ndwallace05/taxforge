import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5498-ESAInterview from './Interview';
import 5498-ESAForm from './Form';
import 5498-esaReducer from '../../store/slices/5498-esaSlice';

const store = configureStore({
  reducer: {
    5498-esa: 5498-esaReducer
  }
});

const meta: Meta<typeof 5498-ESAInterview> = {
  title: 'Forms/5498-ESA',
  component: 5498-ESAInterview,
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
      <5498-ESAForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5498-ESAForm printMode={true} />
    </Provider>
  ),
};
