import React, { Component } from 'react'

class communitypoll extends Component {
    render() {
        return (
            <>
                <div className="block block-poll">
                    <div className="block-title">Community Poll </div>
                    <form id="pollForm" action="#" method="post" onSubmit="return validatePollAnswerIsSelected();">
                        <div className="block-content">
                            <p className="block-subtitle">What is your favorite Magento feature?</p>
                            <ul id="poll-answers">
                                <li className="odd">
                                    <input type="radio" name="vote" className="radio poll_vote" id="vote_5" value="5" />
                                    <span className="label">
                                        <label for="vote_5">Layered Navigation</label>
                                    </span> </li>
                                <li className="even">
                                    <input type="radio" name="vote" className="radio poll_vote" id="vote_6" value="6" />
                                    <span className="label">
                                        <label for="vote_6">Price Rules</label>
                                    </span> </li>
                                <li className="odd">
                                    <input type="radio" name="vote" className="radio poll_vote" id="vote_7" value="7" />
                                    <span className="label">
                                        <label for="vote_7">Category Management</label>
                                    </span> </li>
                                <li className="last even">
                                    <input type="radio" name="vote" className="radio poll_vote" id="vote_8" value="8" />
                                    <span className="label">
                                        <label for="vote_8">Compare Products</label>
                                    </span> </li>
                            </ul>
                            <div className="actions">
                                <button type="submit" title="Vote" className="button button-vote"><span>Vote</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default communitypoll
