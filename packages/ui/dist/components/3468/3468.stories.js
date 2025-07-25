import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
3468;
Interview;
from;
'./Interview';
3468;
Form;
from;
'./Form';
3468;
Reducer;
from;
'../../store/slices/3468Slice';
const store = configureStore({
    reducer: {
        3468: 3468, Reducer
    }
});
const meta;
3468;
Interview > ;
{
    title: 'Forms/3468',
        component;
    3468;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3468Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3468Form printMode=", true, " />"] })),
};
