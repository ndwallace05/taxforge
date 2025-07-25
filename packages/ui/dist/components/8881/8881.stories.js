import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8881;
Interview;
from;
'./Interview';
8881;
Form;
from;
'./Form';
8881;
Reducer;
from;
'../../store/slices/8881Slice';
const store = configureStore({
    reducer: {
        8881: 8881, Reducer
    }
});
const meta;
8881;
Interview > ;
{
    title: 'Forms/8881',
        component;
    8881;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8881Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8881Form printMode=", true, " />"] })),
};
