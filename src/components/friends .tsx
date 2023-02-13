import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Tabs from './common/tabs'
import Button from './common/button2'
import { getFriendsAsync } from '../store/friends'
import { getUsersAsync } from '../store/users'
import { RootState } from '../store'
import { IUser } from '../services/users'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

interface TabPanelProps {
  children: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function FriendCard({ friend }: any) {
  const [defaultDisplay, setDefaultDisplay] = useState('block')
  const [avatarDisplay, setAvatarDisplay] = useState('none')
  const loadHandler = () => {
    setDefaultDisplay('none')
    setAvatarDisplay('block')
  }
  const ErrorHandler = () => {
    setDefaultDisplay('block')
    setAvatarDisplay('none')
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Avatar sx={{ borderRadius: 1, display: defaultDisplay }} variant="square" alt="avatar" />
        <Avatar
          sx={{ borderRadius: 1, display: avatarDisplay }}
          variant="square"
          src={friend.avatar}
          imgProps={{
            onLoad: loadHandler,
            onError: ErrorHandler,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">{friend.name}</Typography>
        <Typography variant="caption" color="#B2B2B2">
          @{friend.username}
        </Typography>
      </Grid>
      <Grid item xs={4} display="flex" alignItems="center" justifyContent="end">
        <Button onClick={() => {}} variant={friend.isFollowing ? 'contained' : 'outlined'}>
          {friend.isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default function Friends() {
  const dispatch = useAppDispatch()
  const [tabIndex, setTabIndex] = useState(0)
  const isGetData = useRef(false)

  const fetchFrendsData = useCallback(async () => {
    await dispatch(getFriendsAsync())
  }, [dispatch])

  const fetchUsersData = useCallback(async () => {
    await dispatch(getUsersAsync())
  }, [dispatch])

  useEffect(() => {
    if (isGetData.current) return
    fetchUsersData()
    fetchFrendsData()
    isGetData.current = true
  }, [dispatch, fetchFrendsData, fetchUsersData])

  const users: Array<IUser> = useTypedSelector((state: RootState) => state.users.list)
  const friends: Array<IUser> = useTypedSelector((state: RootState) => state.friends.list)
  const handleChange = (newValue: number) => {
    setTabIndex(newValue)
    if (newValue === 0) fetchUsersData()
    else fetchFrendsData()
  }
  return (
    <Box sx={{ backgroundColor: '#1B1B1B' }}>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Followers" disableRipple />
        <Tab label="Following" disableRipple />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        {users && users.map((user: IUser) => <FriendCard friend={user} key={user.id} />)}
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {friends && friends.map((friend: IUser) => <FriendCard friend={friend} key={friend.id} />)}
      </TabPanel>
    </Box>
  )
}
