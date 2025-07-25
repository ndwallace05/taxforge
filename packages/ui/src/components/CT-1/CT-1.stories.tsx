import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CT-1Interview from './Interview';
import CT-1Form from './Form';
import ct-1Reducer from '../../store/slices/ct-1Slice';

const store = configureStore({
  reducer: {
    ct-1: ct-1Reducer
  }
});

const meta: Meta<typeof CT-1Interview> = {
  title: 'Forms/CT-1',
  component: CT-1Interview,
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
      <CT-1Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <CT-1Form printMode={true} />
    </Provider>
  ),
};
