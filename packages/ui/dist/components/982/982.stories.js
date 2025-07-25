import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
982;
Interview;
from;
'./Interview';
982;
Form;
from;
'./Form';
982;
Reducer;
from;
'../../store/slices/982Slice';
const store = configureStore({
    reducer: {
        982: 982, Reducer
    }
});
const meta;
982;
Interview > ;
{
    title: 'Forms/982',
        component;
    982;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "982Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "982Form printMode=", true, " />"] })),
};
