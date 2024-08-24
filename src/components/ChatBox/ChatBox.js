import React from 'react';
import Message from '../Message/Message';
import './ChatBox.css';

const ChatBox = () => {
    return (
        <div className="chat-box">
            <div className="message-block">
 
                <Message text="Good morning, Mr. Wilson. I hope you're doing well." time="09:00" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Good evening, Mr. Rao. I'm doing well, thank you. How are things in India?" time="21:30" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Things are going well here. I wanted to discuss the integration project we're working on." time="09:02" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Sure, I've reviewed the latest report you sent over." time="21:32" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Great! Do you have any concerns or changes you'd like to discuss?" time="09:04" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Overall, it's looking good, but I'd like to talk about the deployment schedule." time="21:35" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Certainly. What timeline are you considering?" time="09:06" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="We were hoping to move the deployment up by a week, if possible." time="21:37" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="I think we can manage that. I'll discuss it with my team and confirm by tomorrow." time="09:08" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="That would be great. Thanks, Mr. Rao." time="21:40" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="You're welcome, Mr. Wilson. Anything else you'd like to address?" time="09:10" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Just one more thing. Could we also look into the possibility of adding an extra layer of security?" time="21:42" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Yes, we can do that. I’ll send you an updated proposal with the additional security measures." time="09:12" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Perfect. Let's finalize everything by the end of this week." time="21:45" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Absolutely. I’ll ensure we stay on track." time="09:14" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Thanks, Mr. Rao. I appreciate your prompt response." time="21:47" isSent={false} />
            </div>
            <div className="message-block">

                <Message text="It’s my pleasure, Mr. Wilson. Looking forward to a successful collaboration." time="09:16" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-name">Mr. Wilson</div>
                <Message text="Same here. Let's close this deal strong!" time="21:50" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Indeed. I’ll be in touch soon with the updates." time="09:18" isSent={true} />
            </div>
            <div className="message-block">
                <div className="sender-Name-name">Mr. Wilson</div>
                <Message text="Talk to you soon, Mr. Rao." time="21:52" isSent={false} />
            </div>
            <div className="message-block">
 
                <Message text="Talk soon, Mr. Wilson." time="09:20" isSent={true} />
            </div>
        </div>
    );
}

export default ChatBox;
