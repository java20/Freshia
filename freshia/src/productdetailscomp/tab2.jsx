import React, { Component } from 'react'

class tab2 extends Component {
    render() {
        return (
            <>
                <div className="box-collateral box-tags">
                    <div className="tags">
                        <form id="addTagForm" action="#" method="get">
                            <div className="form-add-tags">
                                <label for="productTagName">Add Tags:</label>
                                <div className="input-box">
                                    <input className="input-text" name="productTagName" id="productTagName" type="text" />
                                    <button type="button" title="Add Tags" className=" button btn-add" onClick="submitTagForm()"> <span>Add Tags</span> </button>
                                </div>
                                {/* input-box  */}
                            </div>
                        </form>
                    </div>
                    {/* tags */}
                    <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                </div>
            </>
        )
    }
}

export default tab2
