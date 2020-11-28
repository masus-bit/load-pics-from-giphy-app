import * as React from "react";
import { Properties } from "../header/header";
const Main = (props: Properties) => {
  const { pictures } = props;
  return (
    <React.Fragment>
      <div className="main-container">
        {(pictures as any).map((it: any) => {
          return (
            <div className="pic-block" key={it.data}>
              {console.log(it.hasOwnProperty("result"))}
              {it.hasOwnProperty("result") ? (
                <div className="pic-big">
                  {it.result.map((item: any) => (
                    <img
                      src={item.data}
                      key={item.data}
                      alt="as"
                      className="picture-small"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={it.data}
                  key={it.data}
                  alt="as"
                  className="picture"
                  onClick={() => {
                    (document.querySelector(`#tag`) as HTMLInputElement).value =
                      it.tag;
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Main;
