import Image from "next/image"
import {
  BsMoonStars,
  BsSun,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsChevronDown,
  BsFire,
  BsCheck2,
  BsBullseye,
  BsClock
} from "react-icons/bs" // Added BsClock for 'clock' icon
import {
  AiOutlineEllipsis,
  AiOutlineWarning,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineFileSearch,
  AiOutlineDollar,
  AiOutlineLineChart
} from "react-icons/ai" // Added AiOutlineLineChart for 'forecast' icon
import { MdDeleteForever, MdOutlineLogout, MdOutlineDashboard } from "react-icons/md" // Added MdOutlineDashboard for 'dashboard' icon
import { BiHistory, BiCalendar, BiBarChartAlt } from "react-icons/bi"
import { FaUserAlt, FaSort } from "react-icons/fa"
import { ImSpinner8, ImStatsBars } from "react-icons/im"
import { RxMixerHorizontal } from "react-icons/rx"
import { LuSettings } from "react-icons/lu"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

// ** Custom svg or images can be used as icons by returning a JSX **
const icons = {
  // Custom icons
  blank: () => {
    return <></>
  },
  nextjs: () => {
    return (
      <Image
        src="next.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  shadcnUi: () => {
    return (
      <Image
        src="shadcn-ui.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  vercel: () => {
    return (
      <Image
        src="vercel.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },

  // Features
  fileSearch: AiOutlineFileSearch,
  barChart: BiBarChartAlt,
  settings: LuSettings,

  // New Icons
  target: BsBullseye, // Target icon from react-icons/bs
  dollarSign: AiOutlineDollar, // Dollar sign from react-icons/ai
  retention: BsBullseye, // You can pick a suitable icon for retention
  clock: BsClock, // Added 'clock' icon
  forecast: AiOutlineLineChart, // Added 'forecast' icon
  dashboard: MdOutlineDashboard, // Added 'dashboard' icon

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
}

export const Icons: IconsType = icons
