import React, { Component } from 'react'
import './stylesheet/style.css';
import './stylesheet/iconFonts.css';
import './stylesheet/index.css';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 



export class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: '' 
    } 
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange = event => {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     name: this.state.name
  //   };

  //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }


  render() {
    return (
      <div class="container-comment">
      <div class="row row-comment">
         <div class="column avatar_wrapper">
             <div class="avatar_wrapper_img">
                 <img alt="" class="avatar" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
             </div>
         </div>
         <div class="col">
             <div class="flexItem comment_field_main">
           
                 <div class="comment_edit comment_editor-new">
                    <div class="row row-comment_editor">
                      <div class="rich_content_editor text_editor">
                        <ReactQuill value={this.state.text}
                                  onChange={this.handleChange} />
                      </div>
                      
                      
                    </div>


                    <div class="row row--comment_field_footer">
                      <button type="button" class="button button--small button--blue button--solid button--disabled" disabled="">Submit</button>
                      <button type="button" class="button button--small button--ghost button--bare">Cancel</button>
                    </div>   
                  </div>             
                </div> 
              </div>
            </div>
          </div> 
    )
  }
}

export default Comment
