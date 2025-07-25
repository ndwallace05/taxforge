import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1040-XInterview from './Interview';
import 1040-XForm from './Form';
import 1040-xReducer from '../../store/slices/1040-xSlice';

const store = configureStore({
  reducer: {
    1040-x: 1040-xReducer
  }
});

const meta: Meta<typeof 1040-XInterview> = {
  title: 'Forms/1040-X',
  component: 1040-XInterview,
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
      <1040-XForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1040-XForm printMode={true} />
    </Provider>
  ),
};
