import { group } from "../../utils";
import { Properties } from "../header/header";

export const actionType = {
  LOAD_STORE: "LOAD_STORE",
  CLEAR_ALL: "CLEAR_ALL",
  GROUP: "GROUP",
  JOIN: "JOIN",
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
  join: (result: Properties, tag?: any) => {
    return {
      type: actionType.JOIN,
      payload: { result, tag },
    };
  },
};

export const Operations = {
  loadToStore: (tag: string & Properties) => (
    dispatch: any,
    _getState: any,
    api: any
  ) => {
    if (typeof tag == "string" && tag !== "delay") {
      return api.get(`${tag}`).then((response: any) => {
        dispatch(ActionCreator.loadToStore(response.data.data.image_url, tag));
      });
    } else if (Array.isArray(tag)) {
      const result: any = [];
      const promisesList: any = [];
      (tag as any).forEach((it: any) => {
        promisesList.push(api.get(`${it}`));
      });
      Promise.all(promisesList).then((res) => {
        res.forEach((it: any) => {
          result.push({ data: it.data.data.image_url, tag: it.config.url });
        });

        dispatch(ActionCreator.join(result));
      });
    } else if (tag == "delay") {
      api.get().then((response: any) => {
        dispatch(ActionCreator.loadToStore(response.data.data.image_url, tag));
      });
      const random = () => {
        setTimeout(() => {
          api.get().then((response: any) => {
            dispatch(
              ActionCreator.loadToStore(response.data.data.image_url, tag)
            );
            random();
          });
        }, 5000);
      };
      random();
    }
  },
};
