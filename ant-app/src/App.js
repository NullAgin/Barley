import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalState from './context/globalState';
import logo from './logo.svg';
import './App.css';
import './oneDesign.css'
import InputDemo from './containers/inputDemo';
import FormDemo from './containers/formDemo';
import AlertDemo from './containers/alertDemo';
import Header from './components/header';
import CheckboxDemo from './containers/checkboxDemo';
import StepForm from './containers/stepForm';
import BadgeForm from './containers/badgeForm';
import NotificationForm from './containers/notificationDemo';
import CascadeForm from './containers/cascadeDemo';
import TimelineFrom from './containers/timeline';
import MenuFrom from './containers/menuDemo';
import SwitchForm from './containers/switchDemo';
import TagDemo from './containers/tagDemo';
import TopDemo from './containers/topDemo';
import DividerForm from './containers/dividerDemo';
import AnchorForm from './containers/anchorDemo';
import TooltipForm from './containers/toolTipDemo';
import PopoverForm from './containers/popoverDemo';
import RateFrom from './containers/rateDemo';
import MessageForm from './containers/messageDemo';
import ModalForm from './containers/modalDemo';
import TableForm from './containers/tableDemo';
import TreeSelectDemo from './containers/treeSelectDemo';
import DatepickerDemo from './containers/datepickerDemo';
import TimepickerDemo from './containers/timepickerDemo';
import UploadDemo from './containers/uploadDemo';
import DescriptionDemo from './containers/descriptionDemo';
import GridDemo from './containers/GridDemo';
import LayoutDemo from './containers/layoutDemo';
import CardDemo from './containers/cardDemo';
import PopconfirmDemo from './containers/popconfirmDemo';
import ResultDemo from './containers/resultDemo';


import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route path="/" component={InputDemo} exact />
            {/* <Route path="/:id" component={FormDemo} exact /> */}
            <Route path="/form" component={FormDemo} exact />
            <Route path="/alert" component={AlertDemo} exact />
            <Route path="/checkbox" component={CheckboxDemo} exact />
            <Route path="/step" component={StepForm} exact />
            <Route path="/badge" component={BadgeForm} exact />
            <Route path="/toaster" component={NotificationForm} exact />
            <Route path="/cascade" component={CascadeForm} exact />
            <Route path="/timeline" component={TimelineFrom} exact />
            <Route path="/menu" component={MenuFrom} exact />
            <Route path="/switch" component={SwitchForm} exact />
            <Route path="/tag" component={TagDemo} exact />
            <Route path="/top" component={TopDemo} exact />
            <Route path="/divider" component={DividerForm} exact />
            <Route path="/anchor" component={AnchorForm} exact />
            <Route path="/tooltip" component={TooltipForm} exact /> 
            <Route path="/popover" component={PopoverForm} exact />
            <Route path="/rate" component={RateFrom} exact />  
            <Route path="/message" component={MessageForm} exact />
            <Route path="/modal" component={ModalForm} exact />        
            <Route path="/table" component={TableForm} exact /> 
            <Route path="/treeselect" component={TreeSelectDemo} exact /> 
            <Route path="/date" component={DatepickerDemo} exact />    
            <Route path="/time" component={TimepickerDemo} exact />       
            <Route path="/upload" component={UploadDemo} exact />
            <Route path="/Desc" component={DescriptionDemo} exact />
            <Route path="/grid" component={GridDemo} exact />
            <Route path="/layout" component={LayoutDemo} exact />
            <Route path="/card" component={CardDemo} exact />
            <Route path="/popConfirm" component={PopconfirmDemo} exact />
            <Route path="/result" component={ResultDemo} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
