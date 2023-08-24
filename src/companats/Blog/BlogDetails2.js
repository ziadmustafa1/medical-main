import React from 'react'
import rea from '../../aswets/771.jpg'
import re from '../../aswets/770.jpg'
import reg from '../../aswets/769.jpg'
import h1 from '../../aswets/768.jpg'
import h2 from '../../aswets/767.jpg'
import h3 from '../../aswets/766.jpg'
import h4 from '../../aswets/765.jpg'
import h5 from '../../aswets/764.jpg'
import h6 from '../../aswets/763.jpg'

const BlogDetails2 = () => {
  return (
    <div>
    <div className="side-bar sticky-top aside-bx">
    <div className="widget widget_search">
    <form className="searchform">
    <div className="input-group"/>
    <input name="text" className="form-control" placeholder="Enter your keywords..." type="text"/>
        
    </form>
    </div>
    <div className="widget recent-posts-entry">
        <h4 className="widget-title">Recent Posts</h4>
        <div className="widget-post-bx">
            <div className="widget-post clearfix">
                <div className="ttr-post-media">
                     <img src={rea} width="200" height="143" alt=""/>
                      </div>
                      <div className="ttr-post-info">
              <div className="ttr-post-header">
                 <h6 className="post-title">
         <a href="/react/blog-details">Precious Tips To Help You Get Better.</a>
                                </h6></div><ul className="post-meta">
     <li className="date">
           <i className="far fa-calendar-alt">
         </i> 21 July 2021</li>
        </ul>
           </div>
             </div>
           <div className="widget-post clearfix">
            <div className="ttr-post-media">
         <img src={re} width="200" height="160" alt=""/>
                </div><div className="ttr-post-info">
              <div className="ttr-post-header">
                <h6 className="post-title">
                <a href="/react/blog-details">Ten Doubts You Should Clarify About.</a></h6>
                </div>
                <ul className="post-meta"><li className="date">
                    <i className="far fa-calendar-alt">
                        </i> 20 July 2021</li>
                        </ul>
                        </div>
                        </div>
             <div className="widget-post clearfix">
       <div className="ttr-post-media"> 
      <img src={reg} width="200" height="160" alt=""/>
              </div><div className="ttr-post-info">
                                                                                <div className="ttr-post-header">
               <h6 className="post-title"><a href="/react/blog-details">The 10 Steps Needed For Putting.</a></h6>
                                    </div><ul className="post-meta">
               <li className="date">
            <i className="far fa-calendar-alt">
    </i> 19 July 2021</li></ul>
       </div>
      </div>
    </div>
      </div>
     <div className="widget widget_gallery gallery-grid-3">
       <h4 className="widget-title">Our Gallery</h4>
             <ul className="magnific-image"><li>
        <img src={h1} alt=""/>
                    </li><li>
    <img src={h2} alt=""/>
      </li><li>
            <img src={h3} alt=""/>
           </li><li>
      <img src={h4} alt=""/>
        </li><li>
        <img src={h5} alt=""/>
             </li><li>
               <img src={h6} alt=""/>
          </li></ul></div><div className="widget widget_tag_cloud"><h4 className="widget-title">Tags</h4>
              <div className="tagcloud"><a href="/react/blog-details">Improvement</a>
               <a href="/react/blog-details">Health</a>
           <a href="/react/blog-details">Covid</a>
        <a href="/react/blog-details">Healthy</a>
        <a href="/react/blog-details">Growth</a>
            <a href="/react/blog-details">Education</a>
        <a href="/react/blog-details">Manage</a>
        <a href="/react/blog-details">General</a>
        </div>
        </div>                                                                                                                   </div>
 </div>                                                                                                                           
  )
}

export default BlogDetails2
