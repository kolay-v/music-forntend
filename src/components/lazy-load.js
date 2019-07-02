import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const LazyLoad = ({ onNeedLoadMore, placeholder, offset }) => {
  const ref = useRef()
  useEffect(() => {
    const update = () => {
      const { current: node } = ref
      const { top, height: elementHeight } = node.getBoundingClientRect()
      const windowInnerHeight = window.innerHeight || document.documentElement.clientHeight

      const offsets = [offset, offset]
      const visible = (top - offsets[0] <= windowInnerHeight) &&
      (top + elementHeight + offsets[1] >= 0)
      visible && onNeedLoadMore()
      return visible
    }
    if (update()) return
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  })
  return (
    <div ref={ref}>{placeholder}</div>
  )
}

LazyLoad.propTypes = {
  placeholder: PropTypes.node.isRequired,
  onNeedLoadMore: PropTypes.func.isRequired,
  offset: PropTypes.number
}

LazyLoad.defaultProps = {
  offset: 0
}

export default LazyLoad
