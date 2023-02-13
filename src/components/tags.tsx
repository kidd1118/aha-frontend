import * as React from 'react'
import { CircularProgress, Grid, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getTagsAsync } from '../store/tags'
import { RootState } from '../store'
import { ITag } from '../services/tags'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

const Box = styled('div')(() => ({
  paddingLeft: 50,
  paddingRight: 50,
  textAlign: 'left',
  height: '100%',
  fontSize: 20,
  '> div, > p': {
    paddingTop: 10,
    paddingBottom: 10,
  },
}))

function TagCard({ tag }: any) {
  return (
    <Grid item xs={2.4}>
      <Grid
        sx={{
          backgroundColor: '#1B1B1B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          padding: '10px',
          borderRadius: '10px',
          aspectRatio: '1/1',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            paddingLeft: '5px',
            paddingRight: '5px',
            border: '3px solid #FFFFFF',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {tag.name}
        </Typography>
      </Grid>
      <div>
        <Typography variant="subtitle1">{tag.name}</Typography>
        <Typography variant="caption" color="#B2B2B2">
          {tag.count} Results
        </Typography>
      </div>
    </Grid>
  )
}

export default function Tags() {
  const dispatch = useAppDispatch()
  const [loadingDisplay, setLoadingDisplay] = useState('block')

  useEffect(() => {
    async function fetchData() {
      setLoadingDisplay('block')
      await dispatch(getTagsAsync())
      setLoadingDisplay('none')
    }
    fetchData()
  }, [dispatch])

  const tags: Array<ITag> = useTypedSelector((state: RootState) => state.tags.list)

  return (
    <Box>
      <Typography variant="h5">Tags</Typography>
      <Grid container spacing={3}>
        {tags && tags.map((tag: ITag) => <TagCard tag={tag} key={tag.id} />)}
      </Grid>
      <CircularProgress color="inherit" sx={{ display: loadingDisplay }} />
    </Box>
  )
}
