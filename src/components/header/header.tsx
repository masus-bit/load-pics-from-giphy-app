import * as React from "react";
import { connect } from "react-redux";
import { Operations } from "../reducer/operations";
interface Properties {
  pics: object;
  onLoadClick: any;
}
const Header = (props: Properties) => {
  const { onLoadClick, pics } = props;
  console.log(pics);
  return (
    <React.Fragment>
      <header className="header">
        <input type="text" className="input" placeholder="Введите тег" />
        <button className="load" onClick={() => onLoadClick("cat")}>
          Загрузить
        </button>
        <button className="clear">Очистить</button>
        <button className="group">Группировать</button>
      </header>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    pics: state.pics,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoadClick: (tag: string) => {
      dispatch(Operations.loadData(tag));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
