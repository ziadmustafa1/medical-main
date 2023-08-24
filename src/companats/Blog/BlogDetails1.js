/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import re from '../../aswets/666.jpg'
import rea from '../../aswets/665.jpeg'
import fe from '../../aswets/664.jpg'
import fea from '../../aswets/663.jpg'
import BlogDetailsCard from './BlogDetailsCard'
import BlogDetailsComments from './BlogDetailsComments'

const BlogDetails1 = () => {
    return (
        <div className='blog-card'>
            <div className='post-media'>
                <img src={re} />
            </div>
            <div className="info-bx">
                <ul className="post-meta">
                    <li className="author">
                        <a href="/react/blog-details" className='text-decoration-none'>
                            <img src={rea} alt=""/> Sonar Moyna </a>
                    </li><li className="date">
                        <i className="far fa-calendar-alt">
                        </i> 19 July 2021</li>
                </ul><div className="ttr-post-title">
                    <h2 className="post-title">Precious Tips To Help You Get Better.</h2>
                </div>
                <div className="ttr-post-text">
                    <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions.
                         If you’re not satisfied with the results,
                          you can always hit the refresh button to generate a new list of unique titles.</p>
                    <blockquote className="wp-block-quote">
                        <p>Once you’ve gotten all the titles and have chosen the best one,
                             the next thing you need to do is to craft a magnetic content.
                              Great content marketers excel at creating content.</p></blockquote>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <ul className="wp-block-gallery columns-6 is-cropped">
                            <li className="blocks-gallery-item">
                            <img alt="" src={fe} />
                            </li><li className="blocks-gallery-item">
                            <img alt="" src={fea} />
                    </li>
                    </ul>
                    <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. 
                        If you’re not satisfied with the results, you can always hit 
                        the refresh button to generate a new list of unique titles.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum.</p>
                </div>
                <div className="ttr-post-footer">
                    <div className="post-tags">
                        <strong>Tags:</strong>
                        <a href="/react/blog-details">  Health</a>
                        <a href="/react/blog-details">Growth</a>
                        <a href="/react/blog-details">Life</a>
                    </div><div className="share-post ml-auto">
                        <ul className="social-media mb-0"><li>
                            <strong>Share:</strong></li><li>
                                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f">
                                    </i></a></li><li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                        <i className="fab fa-instagram">
                                        </i></a></li><li>
                                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                        <i className="fab fa-linkedin-in">
                                            </i></a></li><li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter">
                                    </i></a></li>
                        </ul></div>
                </div>
            </div>
            <BlogDetailsCard/>
            <BlogDetailsComments/>
        </div>
    )
}

export default BlogDetails1