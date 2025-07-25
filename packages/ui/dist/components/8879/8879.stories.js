import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8879;
Interview;
from;
'./Interview';
8879;
Form;
from;
'./Form';
8879;
Reducer;
from;
'../../store/slices/8879Slice';
const store = configureStore({
    reducer: {
        8879: 8879, Reducer
    }
});
const meta;
8879;
Interview > ;
{
    title: 'Forms/8879',
        component;
    8879;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8879Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8879Form printMode=", true, " />"] })),
};
