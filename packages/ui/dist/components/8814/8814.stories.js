import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8814;
Interview;
from;
'./Interview';
8814;
Form;
from;
'./Form';
8814;
Reducer;
from;
'../../store/slices/8814Slice';
const store = configureStore({
    reducer: {
        8814: 8814, Reducer
    }
});
const meta;
8814;
Interview > ;
{
    title: 'Forms/8814',
        component;
    8814;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8814Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8814Form printMode=", true, " />"] })),
};
