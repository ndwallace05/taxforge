import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1041-ESInterview from './Interview';
import 1041-ESForm from './Form';
import 1041-esReducer from '../../store/slices/1041-esSlice';

const store = configureStore({
  reducer: {
    1041-es: 1041-esReducer
  }
});

const meta: Meta<typeof 1041-ESInterview> = {
  title: 'Forms/1041-ES',
  component: 1041-ESInterview,
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
      <1041-ESForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1041-ESForm printMode={true} />
    </Provider>
  ),
};
