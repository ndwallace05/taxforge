import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8453;
Interview;
from;
'./Interview';
8453;
Form;
from;
'./Form';
8453;
Reducer;
from;
'../../store/slices/8453Slice';
const store = configureStore({
    reducer: {
        8453: 8453, Reducer
    }
});
const meta;
8453;
Interview > ;
{
    title: 'Forms/8453',
        component;
    8453;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453Form printMode=", true, " />"] })),
};
