import React, { Component } from 'react'
import './stylesheet/style.css';
import './stylesheet/iconFonts.css';
import './stylesheet/index.css';

export class SortBy extends Component {
  render() {
    return (
    <div class="sortBy">
        <div class="discussion__sort_dropdown discussion__sort_dropdown">
            <div class="sort_dropdown">
                <div class="Menu communities__filter2">
                    <div class="Menu__MenuTrigger Menu__MenuTrigger__inactive communities__filter2--current link_button--primary" tabindex="0" role="button" aria-owns="communities_filter_menu" aria-haspopup="true">
                        <span class="sort_by">SORT BY:</span>
                        <span class="filter_name">Newest</span>
                        <span class="icon_container">
                            <i class="icon-down-open icon"></i>
                        </span>
                    </div>
                    <div id="communities_filter_menu" role="menu" tabindex="-1" aria-expanded="false" class="Menu__MenuOptions communities__filter2_list dropdown__menu dropdown__menu--active communities__filter2_list_full_width Menu__MenuOptions--horizontal-right Menu__MenuOptions--vertical-bottom" style={{display: 'none'}}>
                        <div class="Menu__MenuOption communities__filter2_item dropdown__menu_item communities__filter2_item--selected Menu__MenuOption--active" role="menuitem" tabindex="-1">
                            <span class="dropdown_menu__display">Newest</span>
                        </div>
                        <div class="Menu__MenuOption communities__filter2_item dropdown__menu_item" role="menuitem" tabindex="-1">
                            <span class="dropdown_menu__display">Top Conversations</span>
                        </div>
                        <div class="Menu__MenuOption communities__filter2_item dropdown__menu_item" role="menuitem" tabindex="-1">
                            <span class="dropdown_menu__display">Latest Reply</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default SortBy; 
