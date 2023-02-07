import * as React from 'react'
import { useState } from 'react'
import { styled, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Input from './input'
import Button from './button'
import Slider from './slider'
import { getUsersAsync } from '../store/users'
import { RootState } from '../store'
import { IUser, IUsersRequest } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

const Box = styled('div')(() => ({
  paddingLeft: 50,
  paddingRight: 50,
  textAlign: 'left',
  fontSize: 20,
  div: {
    padding: 10,
  },
}))

const AhaDivider = styled(Divider)(() => ({
  borderColor: '#fff',
  opacity: 0.1,
}))

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
    </div>
  )
}

export default function Search() {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  async function fetchData() {
    const params: IUsersRequest = {}
    params.keyword = inputValue
    await dispatch(getUsersAsync(params))
  }

  const users: Array<IUser> = useTypedSelector((state: RootState) => state.users.list)

  const [sliderValue, setSliderValue] = useState(15)

  return (
    <Box>
      <div>Search</div>
      <Input
        value={inputValue}
        label="Keyword"
        onChange={(newValue) => setInputValue(newValue.target.value)}
      />
      <AhaDivider />
      <div># Of Results Per Page</div>
      <div>
        <Typography variant="h4" display="inline-block">
          {sliderValue}
        </Typography>
        <span> results</span>
      </div>
      <Slider
        value={Number(sliderValue)}
        onChange={(newValue) => setSliderValue(newValue.target.value)}
      />
      <AhaDivider />
      <Button
        color="secondary"
        onClick={() => {
          fetchData()
        }}
      >
        Search
      </Button>
      {users && users.map((user: IUser) => <User user={user} key={user.id} />)}
    </Box>
  )
}
