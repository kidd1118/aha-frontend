import * as React from 'react'
import { useState } from 'react'
import Input from './input'
import Button from './button'
import Slider from './slider'
import { getUsersAsync } from '../store/users'
import { RootState } from '../store'
import { IUser, IUsersRequest } from '../services/users'
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

  const [sliderValue, setSliderValue] = useState(30)

  return (
    <div className="w-[375px] pt-8">
      <div className="flex flex-row cursor-pointer">
        <div>Search</div>
        <Input
          value={inputValue}
          label="Keyword"
          onChange={(newValue) => setInputValue(newValue.target.value)}
        />
        <div># Of Results Per Page</div>
        <div>{sliderValue} results</div>
        <Slider
          value={Number(sliderValue)}
          onChange={(newValue) => setSliderValue(newValue.target.value)}
        />
        <Button
          color="secondary"
          onClick={() => {
            fetchData()
          }}
        >
          Search
        </Button>
      </div>
      {users && users.map((user: IUser) => <User user={user} key={user.id} />)}
    </div>
  )
}
