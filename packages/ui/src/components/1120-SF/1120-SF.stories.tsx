import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-SFInterview from './Interview';
import 1120-SFForm from './Form';
import 1120-sfReducer from '../../store/slices/1120-sfSlice';

const store = configureStore({
  reducer: {
    1120-sf: 1120-sfReducer
  }
});

const meta: Meta<typeof 1120-SFInterview> = {
  title: 'Forms/1120-SF',
  component: 1120-SFInterview,
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
      <1120-SFForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-SFForm printMode={true} />
    </Provider>
  ),
};
