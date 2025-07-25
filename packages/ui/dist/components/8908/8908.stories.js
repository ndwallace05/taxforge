import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8908;
Interview;
from;
'./Interview';
8908;
Form;
from;
'./Form';
8908;
Reducer;
from;
'../../store/slices/8908Slice';
const store = configureStore({
    reducer: {
        8908: 8908, Reducer
    }
});
const meta;
8908;
Interview > ;
{
    title: 'Forms/8908',
        component;
    8908;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8908Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8908Form printMode=", true, " />"] })),
};
