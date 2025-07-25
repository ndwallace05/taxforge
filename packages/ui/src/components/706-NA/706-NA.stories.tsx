import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 706-NAInterview from './Interview';
import 706-NAForm from './Form';
import 706-naReducer from '../../store/slices/706-naSlice';

const store = configureStore({
  reducer: {
    706-na: 706-naReducer
  }
});

const meta: Meta<typeof 706-NAInterview> = {
  title: 'Forms/706-NA',
  component: 706-NAInterview,
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
      <706-NAForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <706-NAForm printMode={true} />
    </Provider>
  ),
};
