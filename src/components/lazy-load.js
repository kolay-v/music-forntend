import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const isVisible = (node) => {
  const { top, height: elementHeight } = node.getBoundingClientRect()
  const windowInnerHeight = window.innerHeight || document.documentElement.clientHeight
  const visible = (top <= windowInnerHeight) &&
    (top + elementHeight >= 0)
  return visible
}

const LazyLoad = ({ onNeedLoadMore, placeholder, offset }) => {
  const ref = useRef()
  const update = () => isVisible(ref.current) && (onNeedLoadMore() || true)
  useEffect(() => {
    const stopListening = () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
    if (update()) return stopListening()
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return stopListening
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
