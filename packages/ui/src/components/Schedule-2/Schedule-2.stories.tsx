import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-2Interview from './Interview';
import Schedule-2Form from './Form';
import schedule-2Reducer from '../../store/slices/schedule-2Slice';

const store = configureStore({
  reducer: {
    schedule-2: schedule-2Reducer
  }
});

const meta: Meta<typeof Schedule-2Interview> = {
  title: 'Forms/Schedule-2',
  component: Schedule-2Interview,
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
      <Schedule-2Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-2Form printMode={true} />
    </Provider>
  ),
};
