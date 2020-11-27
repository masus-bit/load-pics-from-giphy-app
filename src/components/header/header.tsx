import React, { useState } from "react";
import { connect } from "react-redux";
import { group } from "../../utils";
import Main from "../main/main";

import { ActionCreator, Operations } from "../reducer/operations";
import Tags from "../tags/tags";
export interface Arra {
  [index: number]: object;
}
interface tagsArr {
  [index: number]: string;
}
export interface Properties {
  comboTags?:Arra
  key?:string
  pictures?: Arra;
  tags?: tagsArr;
  onLoadClick?: any;
  onClearClick?: any;
  onGroupClick?: any;
  onJoin?:any
}

const Header = (props: Properties) => {
  const { onLoadClick, pictures, onClearClick, onGroupClick, tags, comboTags, onJoin  } = props;
  const [grouped, setGroup] = useState(false);
  console.log(comboTags)
  return (
    <React.Fragment>
      <header className="header">
        <form
          action=""
          className="load-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            const target = evt.target as HTMLTextAreaElement;
            const tag = (target.querySelector(`#tag`) as HTMLInputElement)
              .value;
              
            tag.length === 0 ? alert("заполните поле тег") : 
            tag.indexOf(',')!==-1 ?onLoadClick(tag.split(','),comboTags):onLoadClick(tag);
           
           
          }}
        >
          <input
            type="text"
            className="input"
            id="tag"
            placeholder="Введите тег"
            onKeyUp={(evt)=>{
              (evt.target as HTMLInputElement).value=(evt.target as HTMLInputElement).value.replace(/[\d А-Яа-яЁё \s !@#$%^&*()_+.?}{]/g,'')
            }}
          />
          <button className="load" type="submit">
            Загрузить
          </button>
        </form>
        <button
          className="clear"
          onClick={() => {
            (document.querySelector(`#tag`) as HTMLInputElement).value = "";
            onClearClick();
          }}
        >
          Очистить
        </button>
        <button
          className="group"
          onClick={() => {
            grouped == false ? setGroup(true) : setGroup(false);
            onGroupClick(pictures);
          }}
        >
          {grouped == false ? "Группировать" : "Разгруппировать"}
        </button>
      </header>
      {grouped == false ? (
        <Main pictures={pictures}  />
      ) : (
        <Tags tags={tags} pictures={pictures} />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state?: any) => {
  return {
    pictures: state.pictures,
    tags: state.tags,
    comboTags:state.comboTags
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoadClick: (tag: string, comboTags:any) => {
      dispatch(Operations.loadToStore(tag,comboTags));
    },
    onClearClick: () => {
      dispatch(ActionCreator.clearAll());
    },
    onGroupClick: (pictures: Properties) => {
      dispatch(ActionCreator.group(pictures));
    },
    onJoin:(comboTags:Properties,tag:any)=>{
      dispatch(ActionCreator.join(comboTags,tag))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
