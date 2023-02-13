import * as React from 'react'
import { Grid, IconButton, styled, Typography } from '@mui/material'
import { Link, useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import Button from './common/button1'
import { getResultsAsync, clear } from '../store/results'
import { RootState } from '../store'
import { IUser, IUsersRequest } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

const Box = styled('div')(() => ({
  paddingRight: 50,
  textAlign: 'left',
  height: '100%',
  fontSize: 20,
  '> div': {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
  },
}))

function UserCard({ user }: any) {
  return (
    <Grid item xs={4}>
      <img src={user.avater} alt="" width="100%" height={100} />
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
  const users: Array<IUser> = useTypedSelector((state: RootState) => state.users.list)
  const page = useRef(0)

  const fetchData = useCallback(async () => {
    const pageSize = searchParams.get('pageSize')
    const keyword = searchParams.get('keyword')
    const params: IUsersRequest = {
      page: page.current,
      pageSize: pageSize == null ? 10 : Number(pageSize),
      keyword: keyword == null ? '' : keyword,
    }
    await dispatch(getResultsAsync(params))
  }, [dispatch, page, searchParams])

  useEffect(() => {
    if (page.current > 0) return
    page.current = 1
    dispatch(clear())
    fetchData()
  }, [dispatch, fetchData, page])

  return (
    <Box>
      <Link to="/">
        <IconButton color="primary">
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
      </Link>
      <span>Results</span>
      <Grid container spacing={3}>
        {users && users.map((user: IUser) => <UserCard user={user} key={user.id} />)}
      </Grid>
      <div>
        <Button
          onClick={() => {
            page.current += 1
            fetchData()
          }}
        >
          MORE
        </Button>
      </div>
    </Box>
  )
}
