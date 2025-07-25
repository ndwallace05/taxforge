import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-LInterview from './Interview';
import 1120-LForm from './Form';
import 1120-lReducer from '../../store/slices/1120-lSlice';

const store = configureStore({
  reducer: {
    1120-l: 1120-lReducer
  }
});

const meta: Meta<typeof 1120-LInterview> = {
  title: 'Forms/1120-L',
  component: 1120-LInterview,
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
      <1120-LForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-LForm printMode={true} />
    </Provider>
  ),
};
