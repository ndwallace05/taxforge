import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8863;
Interview;
from;
'./Interview';
8863;
Form;
from;
'./Form';
8863;
Reducer;
from;
'../../store/slices/8863Slice';
const store = configureStore({
    reducer: {
        8863: 8863, Reducer
    }
});
const meta;
8863;
Interview > ;
{
    title: 'Forms/8863',
        component;
    8863;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8863Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8863Form printMode=", true, " />"] })),
};
