import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8815;
Interview;
from;
'./Interview';
8815;
Form;
from;
'./Form';
8815;
Reducer;
from;
'../../store/slices/8815Slice';
const store = configureStore({
    reducer: {
        8815: 8815, Reducer
    }
});
const meta;
8815;
Interview > ;
{
    title: 'Forms/8815',
        component;
    8815;
    Interview,
        decorators;
    [
        (Story) => (_jsx(Provider, { store: store, children: _jsx(Story, {}) })),
    ],
    ;
}
;
export default meta;
export const Interview = {
    args: {},
};
export const FormView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8815Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8815Form printMode=", true, " />"] })),
};
