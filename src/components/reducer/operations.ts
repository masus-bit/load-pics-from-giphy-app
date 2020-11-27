import { group } from "../../utils";
import { Properties } from "../header/header";

export const actionType = {
  LOAD_STORE: "LOAD_STORE",
  CLEAR_ALL: "CLEAR_ALL",
  GROUP: "GROUP",
  COMBO_TAG:"COMBO_TAG"
};

export const ActionCreator = {
  loadToStore: (data: string, tag: string) => {
    return {
      type: actionType.LOAD_STORE,
      payload: { data, tag },
    };
  },
  clearAll: () => {
    return {
      type: actionType.CLEAR_ALL,
      payload: [],
    };
  },
  group: (pictures: Properties) => {
    return {
      type: actionType.GROUP,
      payload: group(pictures),
    };
  },
  comboTag:(data: string, tag: string)=>{
     return{ type:actionType.COMBO_TAG,
      payload:{data,tag}
     }
  }
};

export const Operations = {
  loadToStore: (tag: string & Properties) => (
    dispatch: any,
    _getState: any,
    api: any
  ) => {
    if (typeof tag === "string") {
      return api.get(`${tag}`).then((response: any) => {
        dispatch(ActionCreator.loadToStore(response.data.data.image_url, tag));
      });
    } else {
      (tag as any).map((it: any, i: any) => {
        return api.get(`${it}`).then((response: any) => {
          dispatch(
            ActionCreator.comboTag(response.data.data.image_url, tag)
          );
        });
      });
    }
  },
};