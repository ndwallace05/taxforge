import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-CInterview from './Interview';
import Schedule-CForm from './Form';
import schedule-cReducer from '../../store/slices/schedule-cSlice';

const store = configureStore({
  reducer: {
    schedule-c: schedule-cReducer
  }
});

const meta: Meta<typeof Schedule-CInterview> = {
  title: 'Forms/Schedule-C',
  component: Schedule-CInterview,
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
      <Schedule-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-CForm printMode={true} />
    </Provider>
  ),
};
