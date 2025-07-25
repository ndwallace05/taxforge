import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8889;
Interview;
from;
'./Interview';
8889;
Form;
from;
'./Form';
8889;
Reducer;
from;
'../../store/slices/8889Slice';
const store = configureStore({
    reducer: {
        8889: 8889, Reducer
    }
});
const meta;
8889;
Interview > ;
{
    title: 'Forms/8889',
        component;
    8889;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8889Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8889Form printMode=", true, " />"] })),
};
