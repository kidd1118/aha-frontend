import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import Menu from '../components/menu'
import { getTagsAsync } from '../store/tags'
import { RootState } from '../store'
import { ITag } from '../services/tags'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function Tag({ tag }: any) {
  return (
    <div className="flex flex-row justify-between mb-4">
      <div className="flex flex-row">
        <div className="ml-4">
          <div className="text-sm">{tag.name}</div>
          <div className="text-xs text-[#929292]">@{tag.count}</div>
        </div>
      </div>
    </div>
  )
}

export default function Tags() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      await dispatch(getTagsAsync())
    }
    fetchData()
  }, [dispatch])

  const tags: Array<ITag> = useTypedSelector((state: RootState) => state.tags.list)

  return (
    <Item>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid xs={0.5}>
            <Menu />
          </Grid>
          <Grid xs={11.5}>{tags && tags.map((tag: ITag) => <Tag tag={tag} key={tag.id} />)}</Grid>
        </Grid>
      </Box>
    </Item>
  )
}
