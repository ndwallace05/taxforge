import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8822 - BInterview;
from;
'./Interview';
8822 - BForm;
from;
'./Form';
8822 - bReducer;
from;
'../../store/slices/8822-bSlice';
const store = configureStore({
    reducer: {
        8822: -b, 8822: -bReducer
    }
});
const meta;
8822 - BInterview > ;
{
    title: 'Forms/8822-B',
        component;
    8822 - BInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8822-BForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8822-BForm printMode=", true, " />"] })),
};
