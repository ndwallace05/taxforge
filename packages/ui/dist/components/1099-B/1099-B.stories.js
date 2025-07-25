import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - BInterview;
from;
'./Interview';
1099 - BForm;
from;
'./Form';
1099 - bReducer;
from;
'../../store/slices/1099-bSlice';
const store = configureStore({
    reducer: {
        1099: -b, 1099: -bReducer
    }
});
const meta;
1099 - BInterview > ;
{
    title: 'Forms/1099-B',
        component;
    1099 - BInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-BForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-BForm printMode=", true, " />"] })),
};
