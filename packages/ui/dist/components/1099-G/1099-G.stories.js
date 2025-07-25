import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - GInterview;
from;
'./Interview';
1099 - GForm;
from;
'./Form';
1099 - gReducer;
from;
'../../store/slices/1099-gSlice';
const store = configureStore({
    reducer: {
        1099: -g, 1099: -gReducer
    }
});
const meta;
1099 - GInterview > ;
{
    title: 'Forms/1099-G',
        component;
    1099 - GInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-GForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-GForm printMode=", true, " />"] })),
};
