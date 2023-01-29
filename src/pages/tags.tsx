import * as React from 'react'
import { useEffect } from 'react'
import Menu from '../components/menu'
import { getTagsAsync } from '../store/tags'
import { RootState } from '../store'
import { ITag } from '../services/tags'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'

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
    <div>
      <Menu />
      {tags && tags.map((tag: ITag) => <Tag tag={tag} key={tag.id} />)}
    </div>
  )
}
