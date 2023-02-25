import React from 'react'
import "./RightSidebar.css"
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blogs</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='18'/>
                <p>Observability is the key to the future of software (and your Devops career)</p>
            </div>      
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='18'/>
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>    
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={comment} alt="pen" width='18'/>
                <p>Review Queue workflows - Final release.....</p>
            </div>      
            <div className="right-sidebar-div-2">
                <img src={blacklogo} alt="pen" width='18'/>
                <p>Outdated Answers: accepted answers is now unpinned in stackoverflow</p>
            </div> 
            <div className="right-sidebar-div-2">
                <img src={blacklogo} alt="pen" width='18'/>
                <p>We’ve made changes to our Privacy Notice for Collectives™</p>
            </div>       
        </div>
        <h4>Hot Meta Post</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>38</p>
                <p>Why was this spam flag declined. yet the question marked as spam?</p>
            </div>      
            <div className="right-sidebar-div-2">
                <p>20</p>
                <p>What is the best course of action when a user has high enough rep to</p>
            </div> 
            <div className="right-sidebar-div-2">
                <p>14</p>
                <p>Is the link to the "How to ask" help page a useful comment ?</p>
            </div>       
        </div>

    </div>
  )
}

export default Widget