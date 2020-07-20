import React, { Component } from 'react'

class mainsection extends Component {
  render() {
    return (
      <>
        <section className="col-sm-9 wow bounceInUp animated">
          <div className="col-main">
            <div className="my-account">
              <div className="page-title">
                <h2>My Dashboard</h2>
              </div>
              <div className="dashboard">
                <div className="welcome-msg"> <strong>Hello, Stephen Doe!</strong>
                  <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
                </div>
                <div className="recent-orders">
                  <div className="title-buttons"><strong>Recent Orders</strong> <a href="#/">View All </a> </div>
                  <div className="table-responsive">
                    <table className="data-table" id="my-orders-table">
                      <col />
                      <col />
                      <col />
                      <col width="1" />
                      <col width="1" />
                      <col width="1" />
                      <thead>
                        <tr className="first last">
                          <th>Order #</th>
                          <th>Date</th>
                          <th>Ship to</th>
                          <th><span className="nobr">Order Total</span></th>
                          <th>Status</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="first odd">
                          <td>500000002</td>
                          <td>19/01/18 </td>
                          <td>Stephen Doe</td>
                          <td><span className="price">$5.00</span></td>
                          <td><em>Pending</em></td>
                          <td className="a-center last"><span className="nobr"> <a href="#/">View Order</a> <span className="separator">|</span> <a href="#/">Reorder</a> </span></td>
                        </tr>
                        <tr className="last even">
                          <td>500000001</td>
                          <td>15/12/17 </td>
                          <td>Stephen Doe</td>
                          <td><span className="price">$1,397.99</span></td>
                          <td><em>Pending</em></td>
                          <td className="a-center last"><span className="nobr"> <a href="#/">View Order</a> <span className="separator">|</span> <a href="#/">Reorder</a> </span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="box-account">
                  <div className="page-title">
                    <h2>Account Information</h2>
                  </div>
                  <div className="col2-set">
                    <div className="col-1">
                      <h5>Contact Information</h5>
                      <a href="#/">Edit</a>
                      <p> Stephen Doe<br />
                      stephendoe@gmail.com<br />
                        <a href="#/">Change Password</a> </p>
                    </div>
                    <div className="col-2">
                      <h5>Newsletters</h5>
                      <a href="#/">Edit</a>
                      <p> You are currently not subscribed to any newsletter. </p>
                    </div>
                  </div>
                  <div className="col2-set">
                    <h4>Address Book</h4>
                    <div className="manage_add"><a href="#/">Manage Addresses</a> </div>
                    <div className="col-1">
                      <h5>Primary Billing Address</h5>
                      <address>
                        Stephen Doe<br />
                    abc Tower<br />
                    CA, 46532<br />
                    United States<br />
                    T: 454541 <br />
                        <a href="#/">Edit Address</a>
                      </address>
                    </div>
                    <div className="col-2">
                      <h5>Primary Shipping Address</h5>
                      <address>
                        Stephen Doe<br />
                    abc Tower<br />
                    CA, 46532<br />
                    United States<br />
                    T: 454541 <br />
                        <a href="#/">Edit Address</a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div> </div>
        </section>
      </>
    )
  }
}

export default mainsection
