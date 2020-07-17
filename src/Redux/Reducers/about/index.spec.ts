// #region Local Imports
import { IAction, IAbout } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { AboutReducer } from ".";
// #endregion Local Imports

describe("About reducer", () => {
    it("should return the initial state", () => {
        expect(AboutReducer(
            undefined,
            {} as IAction<IAbout.IStateProps>)
        ).toEqual({});
    });
});
