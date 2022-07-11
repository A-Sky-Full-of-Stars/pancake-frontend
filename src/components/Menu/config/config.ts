import { MenuItemsType, SwapIcon, SwapFillIcon, EarnFillIcon, EarnIcon } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [],
  },

  {
    label: t('Liquidity'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/liquidity',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    showItemsOnMobile: false,
    items: [],
  },
]

export default config
