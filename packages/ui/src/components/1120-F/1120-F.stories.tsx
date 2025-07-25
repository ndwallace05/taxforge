import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-FInterview from './Interview';
import 1120-FForm from './Form';
import 1120-fReducer from '../../store/slices/1120-fSlice';

const store = configureStore({
  reducer: {
    1120-f: 1120-fReducer
  }
});

const meta: Meta<typeof 1120-FInterview> = {
  title: 'Forms/1120-F',
  component: 1120-FInterview,
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
      <1120-FForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-FForm printMode={true} />
    </Provider>
  ),
};
