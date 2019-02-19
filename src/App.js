import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment.jsx'
import Search from './components/Search.jsx'
import SortBy from './components/SortBy.jsx'
import Discussion from './components/Discussion.jsx'
import Reply from './components/Reply.jsx'





class App extends Component {
  render() {
    return (
      <div class="container">
          <Comment /> 
          <div class="container-search">
            <div class="row row-search">
              <Search />
              <SortBy />
            </div>
          </div>
          <div class="discussion_content">
          <div class="discussion">
            <div class="infinite_scroller">
              <div class="discussionTop">
                <div class="outer_col">
                  <div class="card card--conversation no_padding col" name="conversation_card_column">
                    <div class="conversation conversation--empty">
                      <Discussion />
                      <Reply />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

      </div>

    );
  }
}

export default App;
