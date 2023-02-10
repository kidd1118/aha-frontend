import * as React from 'react'
import { useEffect } from 'react'
import Button from './common/button'
import { getFriendsAsync } from '../store/friends'
import { RootState } from '../store'
import { IUser } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

function Friend({ friend }: any) {
  return (
    <div className="flex flex-row justify-between mb-4">
      <div className="flex flex-row">
        {/* <img className="rounded" src={friend.avater} alt="" width={40} height={40} /> */}
        <div className="ml-4">
          <div className="text-sm">{friend.name}</div>
          <div className="text-xs text-[#929292]">@{friend.username}</div>
        </div>
      </div>
      <Button onClick={() => {}}>{friend.isFollowing ? 'Following' : 'Follower'}</Button>
    </div>
  )
}

export default function Friends() {
  const dispatch = useAppDispatch()

  async function fetchData() {
    await dispatch(getFriendsAsync())
  }

  useEffect(() => {
    fetchData()
  }, [dispatch])

  const friends: Array<IUser> = useTypedSelector((state: RootState) => state.friends.list)

  return (
    <div className="w-[375px] pt-8">
      <div className="flex flex-row cursor-pointer">
        <Button
          onClick={() => {
            fetchData()
          }}
        >
          Followers
        </Button>
        <Button
          onClick={() => {
            fetchData()
          }}
        >
          Following
        </Button>
      </div>
      {friends && friends.map((friend: IUser) => <Friend friend={friend} key={friend.id} />)}
    </div>
  )
}
