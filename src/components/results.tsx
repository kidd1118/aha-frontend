import * as React from 'react'
import { styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import Button from './common/button'
import { getUsersAsync } from '../store/users'
import { RootState } from '../store'
import { IUser, IUsersRequest } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

const Box = styled('div')(() => ({
  paddingLeft: 50,
  paddingRight: 50,
  textAlign: 'left',
  height: '100%',
  fontSize: 20,
  div: {
    padding: 10,
  },
}))

function User({ user }: any) {
  return (
    <div>
      <img src={user.avater} alt="" width={40} height={40} />
      <div>
        <div>{user.name}</div>
        <div>@{user.username}</div>
      </div>
    </div>
  )
}

export default function Search() {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  async function fetchData() {
    const keyword = searchParams.get('keyword')
    const params: IUsersRequest = { keyword: keyword == null ? undefined : keyword }
    await dispatch(getUsersAsync(params))
  }

  const users: Array<IUser> = useTypedSelector((state: RootState) => state.users.list)

  return (
    <Box>
      <div>Results</div>
      {users && users.map((user: IUser) => <User user={user} key={user.id} />)}
      <div>
        <Button
          onClick={() => {
            fetchData()
          }}
        >
          More
        </Button>
      </div>
    </Box>
  )
}
