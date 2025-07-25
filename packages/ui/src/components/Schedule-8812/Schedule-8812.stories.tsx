import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-8812Interview from './Interview';
import Schedule-8812Form from './Form';
import schedule-8812Reducer from '../../store/slices/schedule-8812Slice';

const store = configureStore({
  reducer: {
    schedule-8812: schedule-8812Reducer
  }
});

const meta: Meta<typeof Schedule-8812Interview> = {
  title: 'Forms/Schedule-8812',
  component: Schedule-8812Interview,
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
      <Schedule-8812Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-8812Form printMode={true} />
    </Provider>
  ),
};
