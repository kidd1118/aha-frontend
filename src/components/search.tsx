import * as React from 'react'
import { useState } from 'react'
import { styled, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Input from './common/input'
import Button from './common/button'
import Slider from './common/slider'
import { getUsersAsync } from '../store/users'
import { IUsersRequest } from '../services/users'
import { useAppDispatch } from '../hooks/useTypedSelector'

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

const AhaDivider = styled(Divider)(() => ({
  borderColor: '#fff',
  opacity: 0.1,
}))

export default function Search() {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  async function fetchData() {
    const params: IUsersRequest = {}
    params.keyword = inputValue
    await dispatch(getUsersAsync(params))
  }

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
      <div>
        <Button
          onClick={() => {
            fetchData()
          }}
        >
          Search
        </Button>
      </div>
    </Box>
  )
}
