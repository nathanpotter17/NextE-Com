'use client'

import React, { useState } from 'react'
import { Gutter } from '../../../_components/Gutter'
import AccountForm from '../AccountForm'
import { Button } from '../../../_components/Button'

import classes from './index.module.scss'
import { HR } from '../../../_components/HR'

const AccountMenu = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = index => {
    setActiveTab(index)
  }

  return (
    <div>
      <h2>My Account</h2>
      <br />
      <p>
        View or edit account information, view your purchased products, and browse your order
        history.
      </p>
      <br />
      <div className="tab-container">
        <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
          Profile
        </div>
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
          Orders
        </div>
      </div>

      <div className="content-container">
        <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
          {activeTab === 0 && (
            <>
              <br />
              <h3>Manage Account</h3>
              <br />
              <p>
                This is your account dashboard. Update your account information, view your purchased
                products, and browse your order history.
              </p>
              <AccountForm />
            </>
          )}
        </div>
        <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
          {activeTab === 1 && (
            <>
              <br />
              <h3>See Orders</h3>
              <br />
              <p>
                These are the orders you have placed over time. Each order is associated with a
                Stripe Purchase Record.
              </p>
              <Button
                className={classes.ordersButton}
                href="/orders"
                appearance="primary"
                label="View orders"
              />
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .tab-container {
          display: flex;
        }

        .tab {
          cursor: pointer;
          padding: 10px;
          margin-right: 10px;
          border: 1px solid var(--color-base-250);
          border-radius: 10px;
        }

        .tab.active {
          background-color: var(--color-base-50);
        }

        .content-container {
          transition: height 0.5s ease-in-out;
          overflow: hidden;
          height: fit-content;
        }

        .tab-content {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .tab-content.active {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default AccountMenu
