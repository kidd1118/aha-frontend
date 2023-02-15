import * as React from 'react'
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Link, useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from './common/button1'
import { getResultsAsync, clear } from '../store/results'
import { RootState } from '../store'
import { IUser, IUsersRequest } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

const Container = styled('div')(() => ({
  textAlign: 'left',
  height: '100%',
  fontSize: 20,
  '>div, > p': {
    paddingTop: 10,
    paddingBottom: 10,
  },
}))

function UserCard({ user }: any) {
  const [defaultDisplay, setDefaultDisplay] = useState('flex')
  const [avatarDisplay, setAvatarDisplay] = useState('none')
  const matches = useMediaQuery('(orientation:portrait)')

  const loadHandler = () => {
    setDefaultDisplay('none')
    setAvatarDisplay('flex')
  }
  const ErrorHandler = () => {
    setDefaultDisplay('flex')
    setAvatarDisplay('none')
  }
  return (
    <Grid item xs={matches ? 12 : 4}>
      <Avatar
        sx={{
          display: defaultDisplay,
          width: '100%',
          height: '80%',
          justifyContent: 'center',
          alignContent: 'center',
          aspectRatio: '3/2',
        }}
        variant="square"
        alt="avatar"
      />
      <Avatar
        sx={{ display: avatarDisplay, width: '100%', height: '100px', aspectRatio: '3/2' }}
        variant="square"
        src={user.avatar}
        imgProps={{
          onLoad: loadHandler,
          onError: ErrorHandler,
        }}
      />
      <div>
        <Typography variant="subtitle1">{user.name}</Typography>
        <Typography variant="caption" color="#B2B2B2">
          by {user.username}
        </Typography>
      </div>
    </Grid>
  )
}

export default function Search() {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const results: Array<IUser> = useTypedSelector((state: RootState) => state.results.list)
  const [loadingDisplay, setLoadingDisplay] = useState('block')
  const matches = useMediaQuery('(orientation:portrait)')
  const page = useRef(0)

  const fetchData = useCallback(async () => {
    setLoadingDisplay('block')
    const pageSize = searchParams.get('pageSize')
    const keyword = searchParams.get('keyword')
    const params: IUsersRequest = {
      page: page.current,
      pageSize: pageSize == null ? 10 : Number(pageSize),
      keyword: keyword == null ? '' : keyword,
    }
    await dispatch(getResultsAsync(params))
    setLoadingDisplay('none')
  }, [dispatch, page, searchParams])

  useEffect(() => {
    if (page.current > 0) return
    page.current = 1
    dispatch(clear())
    fetchData()
  }, [dispatch, fetchData, page])

  return (
    <Container sx={{ paddingRight: matches ? 0 : 5 }}>
      <Link to="/">
        <IconButton color="primary" sx={{ display: matches ? 'none' : 'inline-block' }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_416)">
              <path
                d="M19.2702 4.10349L17.3333 2.16663L6.5 13L17.3333 23.8333L19.2702 21.8964L10.3737 13L19.2702 4.10349Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_416">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </IconButton>
        <Typography variant="h5" display="inline-block" color="#FFFFFF">
          Results
        </Typography>
      </Link>
      <Grid container spacing={3}>
        {results && results.map((user: IUser) => <UserCard user={user} key={user.id} />)}
      </Grid>
      <CircularProgress color="inherit" sx={{ display: loadingDisplay }} />
      <Box sx={{ paddingLeft: matches ? 0 : 5 }}>
        <Button
          onClick={() => {
            page.current += 1
            fetchData()
          }}
        >
          MORE
        </Button>
      </Box>
    </Container>
  )
}
