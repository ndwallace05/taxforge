import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-1Interview from './Interview';
import Schedule-1Form from './Form';
import schedule-1Reducer from '../../store/slices/schedule-1Slice';

const store = configureStore({
  reducer: {
    schedule-1: schedule-1Reducer
  }
});

const meta: Meta<typeof Schedule-1Interview> = {
  title: 'Forms/Schedule-1',
  component: Schedule-1Interview,
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
      <Schedule-1Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-1Form printMode={true} />
    </Provider>
  ),
};
