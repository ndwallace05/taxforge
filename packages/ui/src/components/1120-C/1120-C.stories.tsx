import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-CInterview from './Interview';
import 1120-CForm from './Form';
import 1120-cReducer from '../../store/slices/1120-cSlice';

const store = configureStore({
  reducer: {
    1120-c: 1120-cReducer
  }
});

const meta: Meta<typeof 1120-CInterview> = {
  title: 'Forms/1120-C',
  component: 1120-CInterview,
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
      <1120-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-CForm printMode={true} />
    </Provider>
  ),
};
