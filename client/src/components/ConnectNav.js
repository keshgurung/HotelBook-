import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Avatar } from 'antd'
import moment from 'moment'

const { Meta } = Card

const ConnectNav = () => {
  const { userLogin } = useSelector((state) => ({ ...state }))
  const { userInfo } = userLogin

  return (
    <div className='d-flex justify-content-around'>
      <Card>
        <Meta
          avatar={<Avatar>{userInfo.username[0]}</Avatar>}
          title={userInfo.username}
          description={`joined ${moment(userInfo.createdAt).fromNow()}`}
        />
      </Card>
    </div>
  )
}

export default ConnectNav
