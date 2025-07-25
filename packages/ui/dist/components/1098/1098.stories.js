import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1098;
Interview;
from;
'./Interview';
1098;
Form;
from;
'./Form';
1098;
Reducer;
from;
'../../store/slices/1098Slice';
const store = configureStore({
    reducer: {
        1098: 1098, Reducer
    }
});
const meta;
1098;
Interview > ;
{
    title: 'Forms/1098',
        component;
    1098;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098Form printMode=", true, " />"] })),
};
