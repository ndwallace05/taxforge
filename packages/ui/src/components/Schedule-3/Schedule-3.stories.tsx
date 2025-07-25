import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-3Interview from './Interview';
import Schedule-3Form from './Form';
import schedule-3Reducer from '../../store/slices/schedule-3Slice';

const store = configureStore({
  reducer: {
    schedule-3: schedule-3Reducer
  }
});

const meta: Meta<typeof Schedule-3Interview> = {
  title: 'Forms/Schedule-3',
  component: Schedule-3Interview,
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
      <Schedule-3Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-3Form printMode={true} />
    </Provider>
  ),
};
