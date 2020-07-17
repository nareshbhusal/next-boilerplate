// #region Interface Imports
import { IHomePage, IAbout } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    about: IAbout.IStateProps;
    home: IHomePage.IStateProps;
}
