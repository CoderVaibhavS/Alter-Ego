import React from 'react'
import './Text.css'

function Text() {

    return(
        <div className="text">
            <div className="para">
                <p>"So sweet honey that, finally, he is bitter. The excess taste kills the taste." Shakespeare.</p>
                <p>These words by the bard have passed down the centuries and found a different, deeper meaning in our days.</p>
                <p>Working professionally in the field of private architecture, creating ‘volume’ beauty, we know exactly when to stop.</p>
            </div>
            <p className="mov-text" id="mov-text">ALTER EGO</p>
            {/* <marquee className="mov-text" behavior="" direction="">ALTER EGO</marquee> */}
        </div>
    );
}

export default Text;