import React from 'react'
import rea from '../../aswets/774.jpeg'
import re from '../../aswets/773.jpeg'

const BlogDetailsComments = () => {
  return (
    <div>
        <div className="comments-area" id="comments">
        <h4 className="widget-title">8 Comments</h4>
        <div className="clearfix"><ol className="comment-list">
        <li className="comment"><div className="comment-body">
        <div className="comment-author vcard">
        <img className="avatar photo" src={rea} alt=""/>
        <div className="clearfix">
        <cite className="fn">George</cite><span className="says">says:</span>
        <div className="comment-meta"> 
        <a href="/react/blog-details">May 09, 2021 at 10:45 am</a> 
        </div>
        </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley.</p>
          <div className="reply">
           <a className="comment-reply-link" href="/react/blog-details">Reply</a>
            </div>
            </div>
            <ol className="children">
            <li className="comment odd parent"><div className="comment-body">
            <div className="comment-author vcard">
            <img className="avatar photo" src={re} alt=""/>
            <div className="clearfix">
            <cite className="fn">Falikaz</cite><span className="says">says:</span>
            <div className="comment-meta"> <a href="/react/blog-details">May 09, 2021 at 10:45 am</a>
            </div>
            </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley.</p>
              <div className="reply"> 
              <a className="comment-reply-link" href="/react/blog-details">Reply</a>
              </div></div></li></ol></li><li className="comment">
              <div className="comment-body"><div className="comment-author vcard">
              <img className="avatar photo" src={rea} alt=""/>
              <div className="clearfix">
              <cite className="fn">Sonar</cite>
              <span className="says">says:</span>
              <div className="comment-meta"> 
              <a href="/react/blog-details">May 09, 2021 at 10:45 am</a> </div>
              </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley.</p>
                <div className="reply">
                 <a className="comment-reply-link" href="/react/blog-details">Reply</a> 
                 </div></div></li><li className="comment">
                 <div className="comment-body"><div className="comment-author vcard">
                 <img className="avatar photo" src={re} alt=""/>
                 <div className="clearfix">
                    <cite className="fn">Michel</cite>
                    <span className="says">says:</span>
                    <div className="comment-meta">
                        <a href="/react/blog-details">May 09, 2021 at 10:45 am</a> 
                        </div>
                        </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley.</p>
                              <div className="reply">
                                <a className="comment-reply-link" href="/react/blog-details">Reply</a> 
                                </div>
                                </div>
                                </li></ol>
                                <div className="comment-respond" id="respond">
                                    <h4 className="widget-title">Leave a Reply</h4>
                                    <form className="comment-form" id="commentform">
                                        <p className="comment-form-author">
                                            <label for="author">Name <span className="required">*</span></label>
                                            <input type="text" name="Author" placeholder="Author" id="author" value=""/>
                                            </p><p className="comment-form-email">
                                                <label for="email">Email <span className="required">*</span></label>
                                                <input type="text" placeholder="Email" name="email" id="email" value=""/>
                                                </p><p className="comment-form-comment">
                                                    <label for="comment">Comment</label>
                                                    <textarea rows="8" name="comment" placeholder="Comment" id="comment">
                            </textarea></p>
                            <p className="form-submit">
                            <input type="submit" className="submit" id="submit" name="submit"/></p>
                        </form>
                        </div>
                        </div>
                        </div>
    </div>
  )
}

export default BlogDetailsComments