import * as React from 'react'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import { getUsersAsync } from '../store/users'
import { RootState } from '../store'
import { IUser } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

function User({ user }: any) {
  return (
    <div className="flex flex-row justify-between mb-4">
      <div className="flex flex-row">
        {/* <img className="rounded" src={user.avater} alt="" width={40} height={40} /> */}
        <div className="ml-4">
          <div className="text-sm">{user.name}</div>
          <div className="text-xs text-[#929292]">@{user.username}</div>
        </div>
      </div>
      <Button variant="text">{user.isFollowing ? 'Following' : 'Follower'}</Button>
    </div>
  )
}

function Tab({ title }: any) {
  //  const [activeTab, setActiveTab] = useState('Followers')

  return <div>{title}</div>
}
export default function Friends() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      await dispatch(getUsersAsync())
    }
    fetchData()
  }, [dispatch])

  const users: Array<IUser> = useTypedSelector((state: RootState) => state.users.list)

  return (
    <div className="w-[375px] pt-8">
      <div className="flex flex-row cursor-pointer">
        <Tab title="Followers" />
        <Tab title="Following" />
      </div>
      {users && users.map((user: IUser) => <User user={user} key={user.id} />)}
    </div>
  )
}
