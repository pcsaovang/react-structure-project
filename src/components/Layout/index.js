import React from 'react'
import { setClass } from '../../utils/responsiveHelpers'

function Layout({ breakpoint }) {
  return (
    <div
      className={setClass({
        default: 'default',
        desktopLg: 'desktop-lg',
        desktopMd: 'desktop-md',
        desktopSm: 'desktop-sm',
        tabletLg: 'tablet-lg',
        tabletMd: 'tablet-md',
        tabletSm: 'tablet-sm',
        mobileLg: 'mobile-lg',
        mobileMd: 'mobile-md',
        mobileSm: 'mobile-sm',
      }, breakpoint)}>
      Layout
    </div>
  )
}

export default Layout
