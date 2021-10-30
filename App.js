import React, {Component} from 'react';
import DemoComponent from './src/Buoi01/DemoComponent';
import ExLayout from './src/Buoi02/ExLayout';
import BinddingData from './src/Buoi03/BinddingData';
import ExUI from './src/Buoi03/ExUI';
import RenderList from './src/Buoi03/RenderList';
import Bidding from './src/Buoi03/BTVN/Bidding';
import DemoProps from './src/Buoi04/Props';
import DemoScrollView from './src/Buoi04/ScrollView';
import DemoFlatList from './src/Buoi04/FlastList';
import DemoSectionList from './src/Buoi04/SectionList';
import LayoutZalo from './src/Buoi04/BTVN';
import RockPaperScissor from './src/Buoi05_06/RockPaperScissor';
import {Provider} from 'react-redux';
import {store} from './src/Buoi07/Redux/store';
import DemoRedux from './src/Buoi07/DemoRedux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DemoRedux />
      </Provider>
    );
  }
}

export default App;
