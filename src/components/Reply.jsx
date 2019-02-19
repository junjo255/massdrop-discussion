import React, { Component } from 'react'
import './stylesheet/style.css';
import './stylesheet/iconFonts.css';
import './stylesheet/index.css';

export class Reply extends Component {
  render() {
    return (
    <div>
    <div class="conversation__load_more_button">
        <i class="icon-down-open-big icon"></i>
        <span class="links links--blue links--with_text links--text_only">
            <span class="links__text">Load 2 More Comments</span>
        </span>
        <i class="icon-down-open-big icon"></i>
    </div>
    <div class="conversation_replies">
        <div name="comment-628799">
            <div class="comment__wrapper comment--reply">
                <div class="content_card comment">     
                    <div class="comment__main">
                        <div class="flexItem flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap row--comment_header comment_owner--vip">
                            <div class="flexItem flexContainer user user--link user--default comment__owner_details">
                                <a href="/profile/eksuen" class="links links--normal links--with_text links--text_only">
                                    <div class="avatar__wrapper user__avatar">
                                        <img alt="" class="responsive responsive_avatar" src="https://massdrop-s3.imgix.net/img_profile/mldowGZoQFKJ6tjQ78yt_20180713083357.jpg.png?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=24&amp;h=24&amp;dpr=1" srcset="https://massdrop-s3.imgix.net/img_profile/mldowGZoQFKJ6tjQ78yt_20180713083357.jpg.png?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=24&amp;h=24&amp;dpr=1 1x, https://massdrop-s3.imgix.net/img_profile/mldowGZoQFKJ6tjQ78yt_20180713083357.jpg.png?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=24&amp;h=24&amp;dpr=2 2x, https://massdrop-s3.imgix.net/img_profile/mldowGZoQFKJ6tjQ78yt_20180713083357.jpg.png?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=24&amp;h=24&amp;dpr=3 3x" />
                                    </div>
                                </a>
                                <div class="flexItem">
                                    <div class="flexItem flexContainer wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap user__info--main">
                                        <div class="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 username__container">
                                            <a href="/profile/eksuen" class="links links--normal links--with_text links--text_only username">
                                                <span class="links__text">eksuen</span>
                                            </a>
                                        </div>
                                        <span class="tag user__endorsements">697</span>
                                        <button type="button" class="follow_button button button--small button--blue button--bare">
                                            <i class="icon icon-follow"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="comment__misc_info_actions">
                                <time class="timestamp comment__timestamp" datetime="2017-01-13T00:35:06.000Z" title="2017-01-13T00:35:06.000Z">2y</time>
                            </div>
                        </div>
                        <div class="comment__display">
                            <div class="row row--comment__body comment__body">
                                <span class="tag reply_tag">
                                    <div class="flexItem flexContainer user comment__owner_details">
                                        <div class="flexItem">
                                            <div class="flexItem flexContainer wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap user__info--main">
                                                <div class="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 username__container">
                                                    <div class="username">funkthumb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <div class="rich_content__container">
                                    <span class="">You should try reading the email before going on a pointless rant. Received tracking today. Massdrop support was quick and got me shipping information well before they promised after a brief explanation of why I hadn't received correct shipping information to begin with. If everything goes accordingly the product should arrive before the promised ship date. Solid customer service despite the hick-up.
                                        </span>
                                </div>
                            </div>
                            <div class="row row--comment__footer">
                                <footer class="comment__footer">
                                    <span class="links links--action links--with_text endorsement__icon">
                                        <i class="icon material-icons material-icon--thumb_up endorsement__icon">thumb_up</i>
                                        <span class="links__text valign_with_icon">3</span>
                                    </span>
                                    <span class="links links--action links--with_text comment__reply">
                                        <i class="icon material-icons material-icon--reply comment__reply">reply</i>
                                        <span class="links__text valign_with_icon">Reply</span>
                                    </span>
                                    <div class="comment__footer--right">
                                        <div class="menu social_sharing_icon__menu">
                                            <div class="menu__toggle">
                                                <span>
                                                    <i class="icon material-icons material-icon--share social_sharing_icon__icon">share</i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="tooltip__toggle favorites__tooltip">
                                            <span class="links links--action links--with_text links--text_only favorite favorite--link favorite--bookmark">
                                                <span class="links__text">
                                                    <i class="icon material-icons material-icon--bookmark_border">bookmark_border</i>
                                                    <span class="valign_with_icon">Save</span>
                                                </span>
                                            </span>
                                        </div>
                                        <div class="menu comment__menu_actions">
                                            <div class="menu__toggle">
                                                <i class="icon material-icons material-icon--more_vert">more_vert</i>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
  }
}

export default Reply; 
