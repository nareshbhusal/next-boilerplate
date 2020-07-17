// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { AboutActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("About action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.About.SetReducer
            },
        ];

        store.dispatch(AboutActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            about: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.About.ResetReducer
            },
        ];

        store.dispatch(AboutActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
