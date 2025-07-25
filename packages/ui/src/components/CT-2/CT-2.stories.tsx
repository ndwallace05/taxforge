import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CT-2Interview from './Interview';
import CT-2Form from './Form';
import ct-2Reducer from '../../store/slices/ct-2Slice';

const store = configureStore({
  reducer: {
    ct-2: ct-2Reducer
  }
});

const meta: Meta<typeof CT-2Interview> = {
  title: 'Forms/CT-2',
  component: CT-2Interview,
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
      <CT-2Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <CT-2Form printMode={true} />
    </Provider>
  ),
};
