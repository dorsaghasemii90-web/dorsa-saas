import { useEffect, useRef, useState, type ReactNode } from "react"

type IconName = "grid" | "spark" | "folder" | "palette" | "learn" | "people" | "briefcase" | "chevron" | "arrow" | "plus" | "bell" | "search" | "moon" | "sun" | "help" | "logout" | "mix" | "cube" | "heart" | "clock" | "close" | "upload" | "check" | "mic" | "download" | "menu" | "play" | "settings"
function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
        <path d="m20 2 .6 1.4L22 4l-1.4.6L20 6l-.6-1.4L18 4l1.4-.6Z" />
      </>
    ),
    folder: (
      <path d="M3 7V5a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.7 1.7 0 0 1 1-3.1h2A4 4 0 0 0 21 10c0-4-4-7-9-7Z" />
        <circle cx="7.5" cy="10" r=".7" />
        <circle cx="11" cy="6.8" r=".7" />
        <circle cx="16" cy="8" r=".7" />
        <circle cx="6.8" cy="14.5" r=".7" />
      </>
    ),
    learn: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 4 5v2" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a25 25 0 0 0 18 0M12 11v4" />
      </>
    ),
    chevron: <path d="m14 7-5 5 5 5" />,
    arrow: <path d="M20 12H4m6-6-6 6 6 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    moon: <path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4m0 3v.1" />
      </>
    ),
    logout: (
      <>
        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4M10 12h11m-4-4 4 4-4 4" />
      </>
    ),
    mix: (
      <>
        <path d="m9 3 6 0M10 3v6L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3M7 14h10" />
        <path d="M10 17h.1M14 18h.1" />
      </>
    ),
    cube: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10m-5-17 10 6" />
      </>
    ),
    heart: (
      <path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-4 4 0 8 8 15 8-7 12-11 8-15Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    upload: (
      <>
        <path d="M12 16V3m-5 5 5-5 5 5M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    mic: (
      <>
        <rect x="9" y="2" width="6" height="13" rx="3" />
        <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v13m-5-5 5 5 5-5M3 16v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    settings: (
      <>
        <path d="M4 7h16M4 17h16" />
        <circle cx="8" cy="7" r="3" />
        <circle cx="16" cy="17" r="3" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
const bagPhoto =
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85"
const shoePhoto =
  "https://images.unsplash.com/photo-1625860191460-10a66c7384fb?auto=format&fit=crop&w=600&q=85"
const initialProjects = [
  {
    id: 1,
    name: "باغی روی بوم",
    type: "کیف پارچه‌ای",
    date: "۲ ساعت پیش",
    kind: "bag",
    colors: ["#c97d8a", "#e6c579", "#7d9075", "#ebe1cd"],
    favorite: false,
  },
  {
    id: 2,
    name: "قدم‌های بهاری",
    type: "کتانی کتان",
    date: "دیروز",
    kind: "shoe",
    colors: ["#9baed0", "#efc3c9", "#d9c4df", "#e8dba4"],
    favorite: true,
  },
  {
    id: 3,
    name: "روایت انار",
    type: "طرح روی پارچه",
    date: "۲ روز پیش",
    kind: "art",
    colors: ["#aa554c", "#d89481", "#e8cfa8", "#657961"],
    favorite: false,
  },
]
const tools: {
  name: string
  en: string
  text: string
  icon: IconName
  tone: string
  tag?: string
}[] = [
  {
    name: "آزمایشگاه رنگ",
    en: "AI Color Lab",
    text: "پالت‌هایی به زیبایی ایده‌های شما",
    icon: "palette",
    tone: "pink",
    tag: "محبوب",
  },
  {
    name: "ترکیب هوشمند رنگ",
    en: "Color Mixer",
    text: "از رنگ‌های شما، تا رنگ دلخواه",
    icon: "mix",
    tone: "yellow",
  },
  {
    name: "استودیو سه‌بعدی",
    en: "3D Mockup Studio",
    text: "قبل از اجرا، نتیجه را ببینید",
    icon: "cube",
    tone: "lavender",
  },
  {
    name: "خلق طرح با هوش مصنوعی",
    en: "AI Design Generator",
    text: "کلمات شما، الهام یک طرح تازه",
    icon: "spark",
    tone: "green",
    tag: "جدید",
  },
]
const palettes = [
  ["#C7818D", "#E8C67D", "#849279", "#F0E6D5", "#9E6C6D"],
  ["#8C9FBB", "#DBC1DD", "#EBAFAE", "#E9DFA4", "#6B8188"],
  ["#B3594D", "#D99270", "#E9CEAB", "#637A63", "#863E40"],
]
function Botanical({
  className = "",
  colors = palettes[0],
}: {
  className?: string
  colors?: string[]
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 280"
      fill="none"
      aria-label="تصویرسازی هنری گل‌های بهاری"
    >
      <path
        d="M116 252c4-69-16-114-49-170M119 252c18-68 26-123 61-172M120 252c-14-72-7-146 9-212M121 221c31-24 53-45 65-82M112 193c-28-10-56-40-70-70"
        stroke={colors[2]}
        strokeWidth="3"
      />
      <g fill={colors[2]}>
        <ellipse
          cx="92"
          cy="167"
          rx="12"
          ry="28"
          transform="rotate(-48 92 167)"
        />
        <ellipse
          cx="144"
          cy="185"
          rx="12"
          ry="28"
          transform="rotate(40 144 185)"
        />
        <ellipse
          cx="127"
          cy="133"
          rx="10"
          ry="23"
          transform="rotate(30 127 133)"
        />
        <ellipse
          cx="72"
          cy="132"
          rx="10"
          ry="24"
          transform="rotate(-55 72 132)"
        />
        <ellipse
          cx="155"
          cy="116"
          rx="9"
          ry="23"
          transform="rotate(50 155 116)"
        />
      </g>
      <g fill={colors[0]}>
        <ellipse
          cx="66"
          cy="63"
          rx="15"
          ry="28"
          transform="rotate(-24 66 63)"
        />
        <ellipse
          cx="46"
          cy="78"
          rx="14"
          ry="25"
          transform="rotate(-65 46 78)"
        />
        <ellipse cx="84" cy="77" rx="14" ry="25" transform="rotate(35 84 77)" />
        <ellipse cx="67" cy="93" rx="16" ry="23" />
      </g>
      <g fill={colors[1]}>
        <ellipse cx="178" cy="56" rx="12" ry="23" />
        <ellipse
          cx="158"
          cy="71"
          rx="12"
          ry="23"
          transform="rotate(-60 158 71)"
        />
        <ellipse
          cx="197"
          cy="72"
          rx="12"
          ry="23"
          transform="rotate(60 197 72)"
        />
        <ellipse cx="177" cy="87" rx="13" ry="20" />
      </g>
      <g fill={colors[4]}>
        <ellipse cx="130" cy="25" rx="9" ry="18" />
        <ellipse
          cx="117"
          cy="35"
          rx="8"
          ry="17"
          transform="rotate(-50 117 35)"
        />
        <ellipse
          cx="142"
          cy="35"
          rx="8"
          ry="17"
          transform="rotate(50 142 35)"
        />
      </g>
      <circle cx="65" cy="77" r="10" fill={colors[1]} />
      <circle cx="178" cy="72" r="8" fill={colors[4]} />
      <g fill={colors[0]}>
        <ellipse
          cx="189"
          cy="125"
          rx="8"
          ry="17"
          transform="rotate(25 189 125)"
        />
        <ellipse
          cx="179"
          cy="137"
          rx="8"
          ry="16"
          transform="rotate(-45 179 137)"
        />
        <ellipse
          cx="200"
          cy="138"
          rx="8"
          ry="16"
          transform="rotate(65 200 138)"
        />
      </g>
      <circle cx="189" cy="139" r="5" fill={colors[1]} />
      <path
        d="M109 248c-16-7-34-5-43 7 18 8 36 9 49-1m8-3c21-14 39-10 47 0-13 11-33 15-47 5"
        fill={colors[2]}
      />
    </svg>
  )
}
function ProjectArt({ kind, colors }: { kind: string colors?: string[] }) {
  return (
    <div className={`project-art art-${kind}`}>
      {kind === "bag" ? (
        <>
          <img src={bagPhoto} alt="کیف پارچه‌ای کتان" />
          <Botanical className="bag-flower" colors={colors} />
        </>
      ) : kind === "shoe" ? (
        <>
          <img src={shoePhoto} alt="کتانی سفید برای طراحی" />
          <Botanical className="shoe-flower" colors={colors || palettes[1]} />
        </>
      ) : (
        <>
          <div className="art-paper">
            <Botanical colors={colors || palettes[2]} />
          </div>
          <span className="art-pen" />
        </>
      )}
    </div>
  )
}

function useSavedState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) as T : initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
  }, [key, value])
  return [value, setValue] as const
}

export default function App() {
  const [page, setPage] = useState("داشبورد")
  const [dark, setDark] = useSavedState("dorsaart-theme", false)
  const [menu, setMenu] = useState(false)
  const [modal, setModal] = useState<string | null>(null)
  const [toast, setToast] = useState("")
  const [projects, setProjects] = useSavedState(
    "dorsaart-projects",
    initialProjects,
  )
  const [search, setSearch] = useState("")
  const [tab, setTab] = useState("همه پروژه‌ها")
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [customColors, setCustomColors] = useSavedState(
    "dorsaart-colors",
    palettes[0],
  )
  const [colorMode, setColorMode] = useState("پالت پیشنهادی AI")
  const [projectName, setProjectName] = useState("")
  const [surface, setSurface] = useState("کیف پارچه‌ای")
  const [upload, setUpload] = useState("")
  const [yearly, setYearly] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [generated, setGenerated] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [before, setBefore] = useState(false)
  const [voiceText, setVoiceText] = useState("")
  const [voiceReply, setVoiceReply] = useState("")
  const [signedIn, setSignedIn] = useState(true)
  const [signup, setSignup] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    document.documentElement.lang = "fa"
    document.documentElement.dir = "rtl"
    document.title = "DorsaArt — استودیوی هوشمند هنر و رنگ"
  }, [])
  const notify = (text: string) => {
    setToast(text)
    window.setTimeout(() => setToast(""), 3500)
  }
  const openTool = (title: string) => {
    setGenerated(false)
    setModal(title)
  }
  const navigate = (title: string) => {
    setPage(title)
    setMenu(false)
    setSearch("")
  }
  const download = () => {
    const blob = new Blob(
      [
        `DorsaArt — Color Palette\n${customColors.join("\n")}\n\nColor recipe: 60% base + 30% white + 10% accent\nPreview palette — adjust on your material before painting.`,
      ],
      { type: "text/plain" },
    )
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = "DorsaArt-palette.txt"
    a.click()
    URL.revokeObjectURL(a.href)
    notify("فایل پالت رنگ دانلود شد")
  }
  const visibleProjects = projects.filter(
    (p) => p.name.includes(search) && (tab !== "علاقه‌مندی‌ها" || p.favorite),
  )
  const navItems: { label: string icon: IconName tag?: string }[] = [
    { label: "داشبورد", icon: "grid" },
    { label: "پروژه‌های من", icon: "folder" },
    { label: "رنگ‌های من", icon: "palette" },
    { label: "آموزش رایگان", icon: "learn" },
    { label: "جامعه هنرمندان", icon: "people" },
    { label: "پنل کسب‌وکار", icon: "briefcase", tag: "PRO MAX" },
  ]
  const toggleFavorite = (id: number) =>
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p)),
    )
  return (
    <div className={`app ${dark ? "dark" : ""}`} dir="rtl">
      <aside className={`sidebar ${menu ? "sidebar-open" : ""}`}>
        <div className="brand" onClick={() => navigate("داشبورد")}>
          <div className="brand-symbol">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong dir="ltr">
              Dorsa<span>Art</span>
              <i />
            </strong>
            <small>هنر شما، هوشمندتر.</small>
          </div>
        </div>
        <div className="workspace">
          <div className="workspace-icon">د</div>
          <div>
            <b>استودیوی شخصی من</b>
            <small>فضایی برای خلاقیت شما</small>
          </div>
          <Icon name="chevron" size={16} />
        </div>
        <div className="nav-caption">فضای کار</div>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${page === item.label ? "active" : ""}`}
              onClick={() => navigate(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.tag && <small className="nav-tag">{item.tag}</small>}
              {item.label === "پروژه‌های من" && (
                <small className="count">
                  {projects.length.toLocaleString("fa")}
                </small>
              )}
            </button>
          ))}
        </nav>
        <div className="sidebar-line" />
        <div className="nav-caption">
          ابزارهای هوشمند <Icon name="spark" size={14} />
        </div>
        <nav>
          {tools.slice(0, 3).map((t) => (
            <button
              className="nav-item"
              key={t.name}
              onClick={() => openTool(t.name)}
            >
              <Icon name={t.icon} />
              <span>{t.name}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="upgrade">
            <div className="upgrade-title">
              <Icon name="spark" />
              <b>خلاقیت، بدون محدودیت</b>
            </div>
            <p>ابزارهای حرفه‌ای، برای ایده‌های بزرگ شما.</p>
            <button onClick={() => navigate("اشتراک و پلن‌ها")}>
              ارتقا به Pro <Icon name="arrow" size={16} />
            </button>
            <span className="upgrade-deco" />
          </div>
          <button
            className="nav-item"
            onClick={() => setModal("راهنما و پشتیبانی")}
          >
            <Icon name="help" />
            <span>راهنما و پشتیبانی</span>
            <span className="online-dot" />
          </button>
          <div className="sidebar-profile">
            <div className="avatar">ن</div>
            <div>
              <b>{signedIn ? "نگار محمدی" : "کاربر مهمان"}</b>
              <small>
                حساب شخصی <span>FREE</span>
              </small>
            </div>
            <button
              className="icon-button"
              aria-label="ورود به حساب"
              onClick={() => setModal("ورود")}
            >
              <Icon name="logout" size={18} />
            </button>
          </div>
        </div>
      </aside>
      {menu && <div className="sidebar-scrim" onClick={() => setMenu(false)} />}
      <div className="main-shell">
        <header className="topbar">
          <div className="breadcrumb">
            <button
              className="icon-button mobile-menu"
              onClick={() => setMenu(true)}
              aria-label="منو"
            >
              <Icon name="menu" />
            </button>
            <span>فضای کار</span>
            <Icon name="chevron" size={14} />
            <b>{page}</b>
          </div>
          <div className="header-actions">
            <div className="top-search">
              <Icon name="search" size={17} />
              <input
                placeholder="جستجو در پروژه‌ها و ابزارها..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  if (e.target.value) setPage("پروژه‌های من")
                }}
              />
              <kbd>⌘ K</kbd>
            </div>
            <button
              className="icon-button"
              onClick={() => setDark(!dark)}
              aria-label="تغییر حالت نمایش"
            >
              <Icon name={dark ? "sun" : "moon"} />
            </button>
            <button
              className="icon-button notification"
              onClick={() => setModal("اعلان‌ها")}
              aria-label="اعلان‌ها"
            >
              <Icon name="bell" />
              <i />
            </button>
            <span className="header-divider" />
            <button
              className="avatar avatar-small"
              onClick={() => setModal("ورود")}
              aria-label="حساب کاربری"
            >
              ن
            </button>
          </div>
        </header>
        <main>
          {page === "داشبورد" ? (
            <>
              <section className="welcome">
                <div>
                  <div className="eyebrow">
                    <span className="online-dot" /> وقتِ خلق یک چیز تازه‌ست
                  </div>
                  <h1>
                    سلام نگار، به دنیای رنگ‌ها خوش اومدی{" "}
                    <span className="hello-spark">✦</span>
                  </h1>
                  <p>از اولین جرقه‌ی ایده تا آخرین ضربه‌ی قلم‌مو، کنارت هستیم.</p>
                </div>
                <button
                  className="button primary"
                  onClick={() => setModal("پروژه جدید")}
                >
                  <Icon name="plus" size={18} />
                  پروژه جدید
                </button>
              </section>
              <section className="hero">
                <div className="hero-copy">
                  <div className="hero-label">
                    <Icon name="spark" size={15} />
                    <span>ایده از شما، جادو از هوش مصنوعی</span>
                  </div>
                  <h2>
                    هر سطح، یک بوم تازه.
                    <br />
                    هر رنگ، یک <span>داستان تازه.</span>
                  </h2>
                  <p>
                    طرح دلخواهت را بساز، رنگ‌هایش را کشف کن و قبل از اجرا،
                    <br className="desktop-break" /> آن را روی دنیای واقعی ببین.
                  </p>
                  <div className="hero-buttons">
                    <button
                      className="button ink"
                      onClick={() => setModal("پروژه جدید")}
                    >
                      شروع یک اثر تازه
                      <Icon name="arrow" size={18} />
                    </button>
                    <button
                      className="hero-link"
                      onClick={() => navigate("آموزش رایگان")}
                    >
                      <span className="play-circle">
                        <Icon name="play" size={12} />
                      </span>
                      ببین چطور کار می‌کنه
                    </button>
                  </div>
                  <div className="hero-proof">
                    <div className="tiny-avatars">
                      <span>م</span>
                      <span>س</span>
                      <span>ن</span>
                    </div>
                    <span>
                      همراه بیش از <b>۲,۰۰۰</b> هنرمند خلاق
                    </span>
                    <span className="proof-stars">✦ ✦ ✦</span>
                  </div>
                </div>
                <div className="hero-art">
                  <div className="art-orbit orbit-one" />
                  <div className="art-orbit orbit-two" />
                  <span className="hero-star star-one">✳</span>
                  <span className="hero-star star-two">✧</span>
                  <div className="floating-chip surface-chip">
                    <span className="mini-icon">
                      <Icon name="cube" size={17} />
                    </span>
                    <div>
                      <b>بوم شما، دنیای شما</b>
                      <small>پارچه، کیف، کفش و فراتر از آن</small>
                    </div>
                  </div>
                  <div className="hero-photo">
                    <img src={bagPhoto} alt="کیف پارچه‌ای با طرح گل‌های هنری" />
                    <Botanical className="hero-botanical" />
                  </div>
                  <div className="floating-palette">
                    <div>
                      <Icon name="spark" size={14} />
                      <b>پالت پیشنهادی هوش مصنوعی</b>
                      <span className="online-dot" />
                    </div>
                    <div className="swatches">
                      {palettes[0].map((c) => (
                        <span key={c} style={{ background: c }} />
                      ))}
                    </div>
                    <small>
                      هارمونی بهاری <span dir="ltr">98% match</span>
                    </small>
                  </div>
                  <div className="floating-chip finished-chip">
                    <span className="success-icon">
                      <Icon name="check" size={14} />
                    </span>
                    آماده‌ی خلق شدن
                  </div>
                </div>
              </section>
              <section className="tools-section">
                <div className="section-heading">
                  <div>
                    <h2>
                      جعبه‌ابزار خلاقیت شما <span>با قدرت هوش مصنوعی</span>
                    </h2>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => navigate("همه ابزارها")}
                  >
                    همه ابزارها
                    <Icon name="chevron" size={16} />
                  </button>
                </div>
                <div className="tools-grid">
                  {tools.map((t) => (
                    <button
                      className="tool-card"
                      key={t.name}
                      onClick={() => openTool(t.name)}
                    >
                      <div className="tool-top">
                        <span className={`tool-icon ${t.tone}`}>
                          <Icon name={t.icon} size={25} />
                        </span>
                        {t.tag && (
                          <span className={`tool-tag ${t.tone}`}>{t.tag}</span>
                        )}
                        <span className="tool-arrow">
                          <Icon name="arrow" size={18} />
                        </span>
                      </div>
                      <h3>{t.name}</h3>
                      <span className="tool-english">{t.en}</span>
                      <p>{t.text}</p>
                    </button>
                  ))}
                </div>
              </section>
              <div className="dashboard-bottom">
                <section className="projects-section">
                  <div className="section-heading">
                    <h2>
                      آخرین پروژه‌های شما{" "}
                      <span className="number-label">
                        {projects.length.toLocaleString("fa")}
                      </span>
                    </h2>
                    <button
                      className="text-button"
                      onClick={() => navigate("پروژه‌های من")}
                    >
                      همه پروژه‌ها
                      <Icon name="chevron" size={16} />
                    </button>
                  </div>
                  <div className="project-tabs">
                    <button
                      className={tab === "همه پروژه‌ها" ? "selected" : ""}
                      onClick={() => setTab("همه پروژه‌ها")}
                    >
                      همه پروژه‌ها
                    </button>
                    <button
                      className={tab === "علاقه‌مندی‌ها" ? "selected" : ""}
                      onClick={() => setTab("علاقه‌مندی‌ها")}
                    >
                      <Icon name="heart" size={14} />
                      علاقه‌مندی‌ها
                    </button>
                  </div>
                  <div className="projects-grid">
                    {visibleProjects.slice(0, 3).map((p) => (
                      <article className="project-card" key={p.id}>
                        <div
                          className="project-image"
                          onClick={() => {
                            setProjectName(p.name)
                            setModal("ویرایش پروژه")
                          }}
                        >
                          <ProjectArt kind={p.kind} colors={p.colors} />
                          <span className="project-status">
                            {p.id === 1 ? "در حال طراحی" : "تکمیل شده"}
                          </span>
                          <button
                            className={`favorite ${
                              p.favorite ? "is-favorite" : ""
                            }`}
                            aria-label="علاقه‌مندی"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(p.id)
                            }}
                          >
                            <Icon name="heart" size={16} />
                          </button>
                        </div>
                        <div className="project-info">
                          <button
                            onClick={() => {
                              setProjectName(p.name)
                              setModal("ویرایش پروژه")
                            }}
                          >
                            <h3>{p.name}</h3>
                            <span>{p.type}</span>
                          </button>
                          <div className="project-swatches">
                            {p.colors.slice(0, 3).map((c) => (
                              <span key={c} style={{ background: c }} />
                            ))}
                          </div>
                        </div>
                        <div className="project-date">
                          <Icon name="clock" size={12} />
                          {p.date}
                          <span>•••</span>
                        </div>
                      </article>
                    ))}
                  </div>
                  {visibleProjects.length === 0 && (
                    <p className="empty-state">هنوز پروژه‌ای در این بخش نیست.</p>
                  )}
                </section>
                <aside className="inspiration">
                  <div className="section-heading">
                    <h2>یک قدم هنرمندتر</h2>
                    <Icon name="learn" size={19} />
                  </div>
                  <div className="lesson-art">
                    <div className="paint-smear smear-pink" />
                    <div className="paint-smear smear-yellow" />
                    <div className="paint-smear smear-green" />
                    <span className="paintbrush" />
                    <button
                      onClick={() => setModal("آموزش ترکیب رنگ")}
                      aria-label="پخش آموزش"
                    >
                      <Icon name="play" size={18} />
                    </button>
                    <span>آموزش رایگان</span>
                  </div>
                  <div className="lesson-content">
                    <span className="lesson-level">برای شروع یک مسیر رنگی</span>
                    <h3>جادوی ترکیب رنگ‌ها روی پارچه</h3>
                    <p>رنگ‌ها را بشناس و با اطمینان ترکیب کن.</p>
                    <div>
                      <span>
                        <Icon name="clock" size={13} />
                        ۱۲ دقیقه
                      </span>
                      <span>سطح مقدماتی</span>
                    </div>
                    <button
                      className="text-button"
                      onClick={() => setModal("آموزش ترکیب رنگ")}
                    >
                      شروع یادگیری
                      <Icon name="arrow" size={16} />
                    </button>
                  </div>
                </aside>
              </div>
              <div className="bottom-note">
                <Icon name="spark" size={14} />
                <span>ساخته شده برای دست‌های هنرمند و ذهن‌های خلاق.</span>
                <span dir="ltr">Made for your imagination.</span>
              </div>
            </>
          ) : (
            <>
              <section className="welcome">
                <div>
                  <div className="eyebrow">استودیوی خلاق DorsaArt</div>
                  <h1>{page}</h1>
                  <p>
                    {page === "پروژه‌های من"
                      ? "ایده‌ها، نسخه‌ها و داستان‌های رنگی شما، همه در یک جا."
                      : "یک قدم نزدیک‌تر به خلق اثری که فقط متعلق به شماست."}
                  </p>
                </div>
                <button
                  className="button primary"
                  onClick={() => setModal("پروژه جدید")}
                >
                  <Icon name="plus" size={18} />
                  پروژه جدید
                </button>
              </section>
              {page === "پروژه‌های من" && (
                <>
                  <div className="filter-bar">
                    <div className="project-tabs">
                      {["همه پروژه‌ها", "علاقه‌مندی‌ها"].map((t) => (
                        <button
                          className={tab === t ? "selected" : ""}
                          onClick={() => setTab(t)}
                          key={t}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="top-search">
                      <Icon name="search" size={16} />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="نام پروژه را جستجو کنید"
                      />
                    </div>
                  </div>
                  <div className="projects-grid full-projects">
                    {visibleProjects.map((p) => (
                      <article className="project-card" key={p.id}>
                        <div
                          className="project-image"
                          onClick={() => {
                            setProjectName(p.name)
                            setModal("ویرایش پروژه")
                          }}
                        >
                          <ProjectArt kind={p.kind} colors={p.colors} />
                          <button
                            className={`favorite ${
                              p.favorite ? "is-favorite" : ""
                            }`}
                            aria-label="علاقه‌مندی"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(p.id)
                            }}
                          >
                            <Icon name="heart" size={18} />
                          </button>
                        </div>
                        <div className="project-info">
                          <div>
                            <h3>{p.name}</h3>
                            <span>
                              {p.type} · {p.date}
                            </span>
                          </div>
                          <button
                            className="icon-button"
                            aria-label="ویرایش پروژه"
                            onClick={() => {
                              setProjectName(p.name)
                              setModal("ویرایش پروژه")
                            }}
                          >
                            <Icon name="arrow" />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                  {!visibleProjects.length && (
                    <p className="empty-state">
                      پروژه‌ای پیدا نشد. یک اثر تازه بسازید.
                    </p>
                  )}
                </>
              )}
              {page === "رنگ‌های من" && (
                <section className="content-panel">
                  <div className="section-heading">
                    <h2>جعبه رنگ شخصی شما</h2>
                    <button
                      className="button primary"
                      onClick={() => setModal("افزودن رنگ")}
                    >
                      <Icon name="plus" size={16} />
                      افزودن رنگ
                    </button>
                  </div>
                  <p>
                    رنگ‌های در دسترس خود را مدیریت کنید و با آن‌ها پالت بسازید.
                  </p>
                  <div className="my-colors">
                    {customColors.map((c, i) => (
                      <div key={i} className="color-tile">
                        <input
                          aria-label={`انتخاب رنگ ${i + 1}`}
                          type="color"
                          value={c}
                          onChange={(e) =>
                            setCustomColors(
                              customColors.map((v, j) =>
                                j === i ? e.target.value : v,
                              ),
                            )
                          }
                        />
                        <b dir="ltr">{c.toUpperCase()}</b>
                        <span>
                          {[
                            "رز خاکی",
                            "زرد کره‌ای",
                            "سبز زیتونی",
                            "کرم بوم",
                            "صورتی تیره",
                          ][i] || "رنگ شخصی"}
                        </span>
                        <small>رنگ اکریلیک · ۳۰ میلی‌لیتر</small>
                      </div>
                    ))}
                  </div>
                  <button
                    className="button secondary"
                    onClick={() => openTool("آزمایشگاه رنگ")}
                  >
                    ساخت پالت با رنگ‌های من
                    <Icon name="palette" size={18} />
                  </button>
                </section>
              )}
              {page === "همه ابزارها" && (
                <div className="tools-grid extended-tools">
                  {[
                    ...tools,
                    {
                      name: "مربی هوشمند رنگ‌آمیزی",
                      en: "AI Coloring Tutor",
                      text: "راهنمای قدم‌به‌قدم اجرای طرح",
                      icon: "learn" as IconName,
                      tone: "yellow",
                    },
                    {
                      name: "نقد هوشمند طرح",
                      en: "AI Critic",
                      text: "نگاهی تازه به تعادل و هارمونی اثر",
                      icon: "search" as IconName,
                      tone: "pink",
                    },
                    {
                      name: "دستیار فارسی",
                      en: "Voice AI Assistant",
                      text: "همراه متخصص پروژه‌های شما",
                      icon: "mic" as IconName,
                      tone: "lavender",
                    },
                  ].map((t) => (
                    <button
                      className="tool-card"
                      key={t.name}
                      onClick={() => openTool(t.name)}
                    >
                      <span className={`tool-icon ${t.tone}`}>
                        <Icon name={t.icon} size={28} />
                      </span>
                      <h3>{t.name}</h3>
                      <span className="tool-english">{t.en}</span>
                      <p>{t.text}</p>
                      <Icon name="arrow" size={18} />
                    </button>
                  ))}
                </div>
              )}
              {page === "آموزش رایگان" && (
                <>
                  <section className="education-banner">
                    <span className="tool-icon yellow">
                      <Icon name="learn" size={32} />
                    </span>
                    <div>
                      <h2>هنر یادگرفتنی‌ست. خلاقیت بی‌پایان.</h2>
                      <p>
                        از اولین ترکیب رنگ تا اجرای حرفه‌ای روی پارچه، رایگان یاد
                        بگیرید.
                      </p>
                    </div>
                  </section>
                  <div className="tutorial-grid">
                    {[
                      "جادوی ترکیب رنگ‌ها روی پارچه",
                      "آماده‌سازی پارچه و انتخاب قلم‌مو",
                      "اجرای سایه و نور در طرح گل",
                    ].map((t, i) => (
                      <article className="tutorial-card" key={t}>
                        <div className={`tutorial-visual tutorial-${i}`}>
                          <Botanical colors={palettes[i]} />
                          <button
                            className="play-circle"
                            onClick={() => setModal("آموزش ترکیب رنگ")}
                            aria-label="مشاهده آموزش"
                          >
                            <Icon name="play" />
                          </button>
                        </div>
                        <span className="lesson-level">
                          درس {i + 1} · رایگان
                        </span>
                        <h3>{t}</h3>
                        <p>آموزش قدم‌به‌قدم · {12 + i * 4} دقیقه</p>
                        <button
                          className="text-button"
                          onClick={() => setModal("آموزش ترکیب رنگ")}
                        >
                          شروع یادگیری
                          <Icon name="arrow" size={16} />
                        </button>
                      </article>
                    ))}
                  </div>
                </>
              )}
              {page === "اشتراک و پلن‌ها" && (
                <>
                  <div className="plans-heading">
                    <h2>برای هر مرحله از مسیر هنری شما</h2>
                    <p>از یک ایده کوچک تا یک کسب‌وکار بزرگ.</p>
                    <div className="segmented">
                      <button
                        className={!yearly ? "selected" : ""}
                        onClick={() => setYearly(false)}
                      >
                        ماهانه
                      </button>
                      <button
                        className={yearly ? "selected" : ""}
                        onClick={() => setYearly(true)}
                      >
                        سالانه <span>۲۰٪ تخفیف</span>
                      </button>
                    </div>
                  </div>
                  <div className="plans-grid">
                    {[
                      {
                        name: "Free",
                        price: "رایگان",
                        features: [
                          "۱ پروژه شخصی",
                          "پالت رنگ پایه",
                          "آموزش‌های رایگان",
                        ],
                      },
                      {
                        name: "Pro",
                        price: yearly ? "۲۳۹" : "۲۹۹",
                        features: [
                          "پروژه‌های نامحدود",
                          "آزمایشگاه رنگ پیشرفته",
                          "ترکیب رنگ و موکاپ",
                          "تاریخچه و نسخه‌های پروژه",
                        ],
                      },
                      {
                        name: "Pro Max",
                        price: yearly ? "۴۷۹" : "۵۹۹",
                        features: [
                          "همه قابلیت‌های Pro",
                          "هوش مصنوعی نامحدود",
                          "استودیو سه‌بعدی پیشرفته",
                          "دستیار صوتی و نقد هوشمند",
                          "خروجی چاپ و ابزار کسب‌وکار",
                        ],
                      },
                    ].map((p, i) => (
                      <article
                        className={`plan-card ${i === 1 ? "featured" : ""}`}
                        key={p.name}
                      >
                        {i === 1 && (
                          <span className="plan-badge">انتخاب هنرمندان</span>
                        )}
                        <h2 dir="ltr">{p.name}</h2>
                        <div className="plan-price">
                          {p.price}
                          <small>
                            {i > 0 ? "هزار تومان / ماه" : "برای همیشه"}
                          </small>
                        </div>
                        <button
                          className={`button ${
                            i === 1 ? "primary" : "secondary"
                          }`}
                          onClick={() =>
                            i === 0
                              ? notify("شما در حال استفاده از پلن رایگان هستید")
                              : setModal(`شروع اشتراک ${p.name}`)
                          }
                        >
                          {i === 0 ? "پلن فعلی" : "شروع ۷ روز رایگان"}
                        </button>
                        <ul>
                          {p.features.map((f) => (
                            <li key={f}>
                              <Icon name="check" size={17} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </>
              )}
              {page === "جامعه هنرمندان" && (
                <>
                  <div className="education-banner">
                    <Icon name="people" size={32} />
                    <div>
                      <h2>الهام بگیرید. خلق کنید. به اشتراک بگذارید.</h2>
                      <p>چالش این هفته: بهار روی یک بوم تازه</p>
                    </div>
                    <button
                      className="button primary"
                      onClick={() => setModal("پروژه جدید")}
                    >
                      شرکت در چالش
                    </button>
                  </div>
                  <div className="projects-grid full-projects">
                    {projects.map((p, i) => (
                      <article className="project-card" key={p.id}>
                        <div className="project-image">
                          <ProjectArt kind={p.kind} />
                        </div>
                        <div className="project-info">
                          <div>
                            <h3>{p.name}</h3>
                            <span>
                              اثر{" "}
                              {
                                ["نگار محمدی", "سارا رضایی", "مریم احمدی"][
                                  i % 3
                                ]
                              }
                            </span>
                          </div>
                          <button
                            className={`icon-button ${
                              p.favorite ? "is-favorite" : ""
                            }`}
                            onClick={() => toggleFavorite(p.id)}
                            aria-label="پسندیدن"
                          >
                            <Icon name="heart" />
                          </button>
                        </div>
                        <div className="community-actions">
                          <button
                            onClick={() =>
                              notify("هنرمند به دنبال‌شوندگان شما اضافه شد")
                            }
                          >
                            دنبال کردن
                          </button>
                          <button onClick={() => setModal("دیدگاه‌ها")}>
                            دیدگاه
                          </button>
                          <button
                            onClick={() => {
                              toggleFavorite(p.id)
                              notify("اثر در مجموعه شما ذخیره شد")
                            }}
                          >
                            ذخیره
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}
              {page === "پنل کسب‌وکار" && <BusinessPanel onNotify={notify} />}
            </>
          )}
        </main>
      </div>
      <button
        className="voice-fab"
        aria-label="دستیار هوشمند"
        onClick={() => setModal("دستیار فارسی")}
      >
        <Icon name="spark" size={21} />
        <span>دستیار شما</span>
        <span className="online-dot" />
      </button>
      {toast && (
        <div className="toast">
          <span className="success-icon">
            <Icon name="check" size={16} />
          </span>
          {toast}
        </div>
      )}
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <section
            className={`modal ${
              ["آزمایشگاه رنگ", "استودیو سه‌بعدی", "ویرایش پروژه"].includes(
                modal,
              )
                ? "modal-wide"
                : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-heading">
              <div>
                <span className="eyebrow">DORSAART STUDIO</span>
                <h2>
                  {modal === "ورود"
                    ? signup
                      ? "ساخت حساب کاربری"
                      : "به استودیوی خود وارد شوید"
                    : modal}
                </h2>
              </div>
              <button
                className="icon-button"
                onClick={() => setModal(null)}
                aria-label="بستن"
              >
                <Icon name="close" />
              </button>
            </div>
            {modal === "پروژه جدید" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setProjects([
                    {
                      id: Date.now(),
                      name: projectName || "اثر تازه من",
                      type: surface,
                      date: "همین حالا",
                      kind:
                        surface === "کتانی"
                          ? "shoe"
                          : surface === "پارچه"
                            ? "art"
                            : "bag",
                      colors: customColors,
                      favorite: false,
                    },
                    ...projects,
                  ])
                  setModal(null)
                  setPage("پروژه‌های من")
                  notify("پروژه جدید با موفقیت ساخته شد")
                }}
              >
                <p className="muted">
                  هر اثر بزرگ، از یک ایده کوچک شروع می‌شود.
                </p>
                <label className="field-label">
                  نام پروژه
                  <input
                    required
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="مثلاً: باغی روی بوم"
                  />
                </label>
                <label className="field-label">
                  سطح طراحی
                  <select
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                  >
                    {[
                      "کیف پارچه‌ای",
                      "کتانی",
                      "پارچه",
                      "لباس",
                      "چرم",
                      "سطح دلخواه",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <input
                  ref={fileRef}
                  className="hidden"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setUpload(e.target.files?.[0]?.name || "")}
                />
                <button
                  type="button"
                  className="upload-zone"
                  onClick={() => fileRef.current?.click()}
                >
                  <Icon name="upload" size={28} />
                  <b>{upload || "طرح یا تصویر خود را بارگذاری کنید"}</b>
                  <span>PNG، JPG یا PDF · یا بدون تصویر شروع کنید</span>
                </button>
                <button className="button primary full-width" type="submit">
                  <Icon name="plus" size={18} />
                  ساخت پروژه
                </button>
              </form>
            )}
            {(modal === "آزمایشگاه رنگ" || modal === "ویرایش پروژه") && (
              <>
                <div className="studio-layout">
                  <div className="studio-preview">
                    <ProjectArt kind="bag" colors={customColors} />
                    <span>پیش‌نمایش رنگ روی سطح کتان</span>
                  </div>
                  <div className="studio-controls">
                    <div className="segmented">
                      {["پالت پیشنهادی AI", "با رنگ‌های موجود من"].map((m) => (
                        <button
                          className={colorMode === m ? "selected" : ""}
                          onClick={() => setColorMode(m)}
                          key={m}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    <label className="field-label">
                      سبک پالت
                      <select
                        value={paletteIndex}
                        onChange={(e) => {
                          const i = Number(e.target.value)
                          setPaletteIndex(i)
                          setCustomColors(palettes[i])
                        }}
                      >
                        <option value="0">بهار ملایم · پاستلی</option>
                        <option value="1">رویاهای آبی · سرد</option>
                        <option value="2">روایت پاییز · گرم</option>
                      </select>
                    </label>
                    <p className="field-label">بخش طرح و رنگ را انتخاب کنید</p>
                    <div className="editable-swatches">
                      {customColors.map((c, i) => (
                        <button
                          className={selectedColor === i ? "active" : ""}
                          key={i}
                          style={{ background: c }}
                          onClick={() => setSelectedColor(i)}
                          aria-label={`بخش ${i + 1}`}
                        >
                          {selectedColor === i && <Icon name="check" />}
                        </button>
                      ))}
                    </div>
                    <label className="field-label">
                      رنگ بخش انتخاب‌شده
                      <div className="color-input-row">
                        <input
                          type="color"
                          value={customColors[selectedColor]}
                          onChange={(e) =>
                            setCustomColors(
                              customColors.map((c, i) =>
                                i === selectedColor ? e.target.value : c,
                              ),
                            )
                          }
                        />
                        <code>{customColors[selectedColor].toUpperCase()}</code>
                        <span dir="ltr">
                          RGB{" "}
                          {parseInt(
                            customColors[selectedColor].slice(1, 3),
                            16,
                          )}
                          ,{" "}
                          {parseInt(
                            customColors[selectedColor].slice(3, 5),
                            16,
                          )}
                          ,{" "}
                          {parseInt(
                            customColors[selectedColor].slice(5, 7),
                            16,
                          )}
                        </span>
                      </div>
                    </label>
                    <div className="insight-box">
                      <Icon name="spark" />
                      <p>
                        رنگ‌های ملایم روی کتان طبیعی، جلوه‌ای گرم و هماهنگ دارند.
                        برای حفظ خوانایی، ساقه‌ها را کمی تیره‌تر اجرا کنید.
                      </p>
                    </div>
                    <small className="muted">
                      پالت نمایشی · تحلیل واقعی AI نیازمند اتصال سرویس است.
                    </small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="button secondary" onClick={download}>
                    <Icon name="download" size={17} />
                    خروجی پالت
                  </button>
                  <button
                    className="button primary"
                    onClick={() => {
                      setProjects(
                        projects.map((p) =>
                          p.name === projectName
                            ? { ...p, colors: customColors }
                            : p,
                        ),
                      )
                      notify("پالت رنگ ذخیره شد")
                      setModal(null)
                    }}
                  >
                    ذخیره تغییرات
                    <Icon name="check" size={17} />
                  </button>
                </div>
              </>
            )}
            {modal === "ترکیب هوشمند رنگ" && (
              <>
                <div
                  className="mix-preview"
                  style={{ background: customColors[selectedColor] }}
                />
                <label className="field-label">
                  رنگ هدف
                  <input
                    type="color"
                    value={customColors[selectedColor]}
                    onChange={(e) =>
                      setCustomColors(
                        customColors.map((c, i) =>
                          i === selectedColor ? e.target.value : c,
                        ),
                      )
                    }
                  />
                </label>
                <div className="recipe-list">
                  {[
                    ["سفید تیتانیوم", "۶۰٪", "۶ میلی‌لیتر"],
                    ["قرمز رز", "۳۰٪", "۳ میلی‌لیتر"],
                    ["زرد اُخرایی", "۱۰٪", "۱ میلی‌لیتر"],
                  ].map(([n, p, a]) => (
                    <div key={n}>
                      <b>{n}</b>
                      <span>{p}</span>
                      <small>{a}</small>
                    </div>
                  ))}
                </div>
                <div className="insight-box">
                  <Icon name="help" />
                  <p>
                    این دستور یک نمونه آموزشی است. نسبت واقعی به برند، رنگ‌دانه و
                    جنس سطح بستگی دارد؛ ابتدا روی تکه‌ای از پارچه تست کنید.
                  </p>
                </div>
                <button
                  className="button primary full-width"
                  onClick={download}
                >
                  دانلود نمونه دستور ترکیب
                  <Icon name="download" size={17} />
                </button>
              </>
            )}
            {modal === "استودیو سه‌بعدی" && (
              <>
                <div className="mockup-canvas">
                  <div
                    style={{
                      transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                    }}
                  >
                    <ProjectArt
                      kind="bag"
                      colors={
                        before
                          ? [
                              "#e6dfcf",
                              "#e6dfcf",
                              "#e6dfcf",
                              "#e6dfcf",
                              "#e6dfcf",
                            ]
                          : customColors
                      }
                    />
                  </div>
                  <span className="preview-badge">پیش‌نمایش دوبعدی محصول</span>
                </div>
                <div className="mockup-controls">
                  <label>
                    بزرگ‌نمایی {zoom}٪
                    <input
                      type="range"
                      min="70"
                      max="150"
                      value={zoom}
                      onChange={(e) => setZoom(Number(e.target.value))}
                    />
                  </label>
                  <label>
                    چرخش {rotation}°
                    <input
                      type="range"
                      min="-30"
                      max="30"
                      value={rotation}
                      onChange={(e) => setRotation(Number(e.target.value))}
                    />
                  </label>
                  <button
                    className="button secondary"
                    onClick={() => setBefore(!before)}
                  >
                    {before ? "نمایش بعد از طراحی" : "نمایش قبل از طراحی"}
                  </button>
                </div>
                <p className="muted">
                  برای مدل سه‌بعدی واقعی، مدل سطح و موتور رندر لازم است.
                </p>
              </>
            )}
            {modal === "خلق طرح با هوش مصنوعی" && (
              <>
                <p className="muted">ایده‌ات را با کلمات توصیف کن.</p>
                <label className="field-label">
                  توصیف طرح
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="یک دسته گل بهاری مینیمال، با رنگ‌های پاستلی برای کیف کتان..."
                    rows={4}
                  />
                </label>
                <label className="field-label">
                  سبک طراحی
                  <select>
                    <option>تصویرسازی گیاهی</option>
                    <option>Line Art</option>
                    <option>آبرنگ</option>
                    <option>هندسی مینیمال</option>
                  </select>
                </label>
                <button
                  className="button primary full-width"
                  disabled={!prompt.trim()}
                  onClick={() => setGenerated(true)}
                >
                  <Icon name="spark" size={18} />
                  مشاهده نمونه طرح
                </button>
                {generated && (
                  <div className="generated-art">
                    <Botanical />
                    <span>
                      نمونه تصویرسازی · تولید اختصاصی نیازمند اتصال AI است.
                    </span>
                    <button
                      className="button secondary"
                      onClick={() => setModal("پروژه جدید")}
                    >
                      استفاده در پروژه
                    </button>
                  </div>
                )}
              </>
            )}
            {(modal === "آموزش ترکیب رنگ" ||
              modal === "مربی هوشمند رنگ‌آمیزی") && (
              <>
                <div className="tutorial-intro">
                  <Icon name="learn" size={30} />
                  <div>
                    <b>از پالت تا اولین ضربه قلم‌مو</b>
                    <p>۱۲ دقیقه · سطح مقدماتی · رنگ اکریلیک پارچه</p>
                  </div>
                </div>
                <ol className="lesson-steps">
                  {[
                    [
                      "آماده‌سازی سطح",
                      "پارچه را بشویید، خشک کنید و یک مقوای محافظ زیر محل طرح قرار دهید.",
                    ],
                    [
                      "ساخت رنگ پایه",
                      "با قلم‌موی تخت شماره ۶ یک لایه نازک اجرا کنید. پیش از لایه بعدی اجازه دهید کاملاً خشک شود.",
                    ],
                    [
                      "رنگ‌آمیزی گلبرگ‌ها",
                      "با قلم‌موی گرد شماره ۲، از رنگ روشن شروع کنید و رنگ تیره را به لبه‌ها اضافه کنید.",
                    ],
                    [
                      "سایه، جزئیات و تثبیت",
                      "با مقدار کمی رنگ تیره، سایه‌ها را بسازید. برای تثبیت، دستور سازنده رنگ را دنبال کنید.",
                    ],
                  ].map(([t, d], i) => (
                    <li key={t}>
                      <span>{(i + 1).toLocaleString("fa")}</span>
                      <div>
                        <h3>{t}</h3>
                        <p>{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <button
                  className="button primary full-width"
                  onClick={() => {
                    notify("آموزش به عنوان تکمیل‌شده ثبت شد")
                    setModal(null)
                  }}
                >
                  آموزش را به پایان رساندم
                  <Icon name="check" size={17} />
                </button>
              </>
            )}
            {modal === "نقد هوشمند طرح" && (
              <>
                <div className="insight-box">
                  <Icon name="spark" />
                  <p>
                    نمونه نقد آموزشی برای طرح «باغی روی بوم»؛ نقد خودکار هنوز به
                    سرویس AI متصل نیست.
                  </p>
                </div>
                {[
                  ["هماهنگی رنگ", "۹۲٪"],
                  ["تعادل بصری", "۸۸٪"],
                  ["کنتراست", "۸۱٪"],
                  ["خوانایی جزئیات", "۹۰٪"],
                ].map(([n, v]) => (
                  <div className="critic-row" key={n}>
                    <b>{n}</b>
                    <span>{v}</span>
                  </div>
                ))}
                <p className="muted">
                  پیشنهاد: ساقه‌ها را کمی تیره‌تر کنید و اطراف دسته‌گل فضای خالی
                  بیشتری نگه دارید.
                </p>
                <button
                  className="button primary full-width"
                  onClick={() => setModal("آزمایشگاه رنگ")}
                >
                  اصلاح در آزمایشگاه رنگ
                  <Icon name="arrow" size={17} />
                </button>
              </>
            )}
            {modal === "دستیار فارسی" && (
              <>
                <div className="voice-intro">
                  <span className="tool-icon pink">
                    <Icon name="mic" size={30} />
                  </span>
                  <h3>در مسیر خلق، تنها نیستی.</h3>
                  <p>درباره رنگ‌ها و اجرای پروژه‌ات سؤال کن.</p>
                </div>
                <label className="field-label">
                  سؤال شما
                  <textarea
                    value={voiceText}
                    onChange={(e) => setVoiceText(e.target.value)}
                    placeholder="چطور رنگ را روی پارچه تثبیت کنم؟"
                    rows={3}
                  />
                </label>
                <button
                  className="button primary full-width"
                  disabled={!voiceText.trim()}
                  onClick={() =>
                    setVoiceReply(
                      "برای رنگ‌آمیزی پارچه، ابتدا روی یک تکه کوچک تست کنید. از رنگ مخصوص پارچه استفاده کنید و برای خشک‌شدن و تثبیت، زمان و دمای توصیه‌شده سازنده را رعایت کنید. این پاسخ نمونه آموزشی است؛ دستیار تخصصی و صوتی نیازمند اتصال سرویس AI است.",
                    )
                  }
                >
                  دریافت راهنمای نمونه
                  <Icon name="spark" size={17} />
                </button>
                {voiceReply && (
                  <div className="insight-box">
                    <Icon name="spark" />
                    <p>{voiceReply}</p>
                  </div>
                )}
              </>
            )}
            {modal === "ورود" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSignedIn(true)
                  setModal(null)
                  notify("به نسخه نمایشی استودیوی خود خوش آمدید")
                }}
              >
                <p className="muted">یک فضای آرام برای تمام ایده‌های شما.</p>
                {signup && (
                  <label className="field-label">
                    نام و نام خانوادگی
                    <input required placeholder="نام شما" />
                  </label>
                )}
                <label className="field-label">
                  ایمیل
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    dir="ltr"
                  />
                </label>
                <label className="field-label">
                  رمز عبور
                  <input
                    type="password"
                    minLength={6}
                    required
                    placeholder="حداقل ۶ کاراکتر"
                  />
                </label>
                <button className="button primary full-width" type="submit">
                  {signup ? "ثبت‌نام و شروع" : "ورود به استودیو"}
                </button>
                <button
                  className="text-button auth-toggle"
                  type="button"
                  onClick={() => setSignup(!signup)}
                >
                  {signup
                    ? "حساب دارید؟ وارد شوید"
                    : "حساب ندارید؟ رایگان ثبت‌نام کنید"}
                </button>
                <p className="muted small-note">
                  ورود نمایشی است و اطلاعات به سرور ارسال نمی‌شود.
                </p>
              </form>
            )}
            {modal === "افزودن رنگ" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setCustomColors([...customColors, "#B9AAC9"])
                  setModal(null)
                  notify("رنگ جدید اضافه شد؛ برای تغییر روی آن کلیک کنید")
                }}
              >
                <label className="field-label">
                  نام رنگ
                  <input required placeholder="نام رنگ یا برند" />
                </label>
                <p className="muted">
                  پس از افزودن می‌توانید رنگ را از جعبه رنگ انتخاب و ویرایش کنید.
                </p>
                <button className="button primary full-width">
                  افزودن به جعبه رنگ
                </button>
              </form>
            )}
            {modal === "راهنما و پشتیبانی" && (
              <>
                <p>
                  برای شروع، یک پروژه بسازید و سطح طراحی را انتخاب کنید. سپس در
                  آزمایشگاه رنگ، پالت خود را بسازید و در استودیو پیش‌نمایش آن را
                  ببینید.
                </p>
                <button
                  className="button primary full-width"
                  onClick={() => {
                    setModal(null)
                    navigate("آموزش رایگان")
                  }}
                >
                  مشاهده آموزش‌های رایگان
                  <Icon name="learn" size={18} />
                </button>
              </>
            )}
            {modal === "اعلان‌ها" && (
              <div className="notification-list">
                <Icon name="spark" size={28} />
                <h3>به دنیای DorsaArt خوش آمدید</h3>
                <p>
                  آموزش رایگان ترکیب رنگ منتظر شماست. اولین قدم مسیر هنری‌تان را
                  بردارید.
                </p>
                <button
                  className="button secondary"
                  onClick={() => {
                    setModal(null)
                    navigate("آموزش رایگان")
                  }}
                >
                  مشاهده آموزش
                </button>
              </div>
            )}
            {modal?.startsWith("شروع اشتراک") && (
              <>
                <div className="insight-box">
                  <Icon name="spark" />
                  <p>
                    ۷ روز فرصت برای کشف ابزارهای حرفه‌ای. دوره پرداخت انتخاب‌شده:{" "}
                    {yearly ? "سالانه" : "ماهانه"}.
                  </p>
                </div>
                <p className="muted">
                  این نسخه نمایشی به درگاه پرداخت متصل نیست. هیچ پرداختی انجام
                  نمی‌شود.
                </p>
                <button
                  className="button primary full-width"
                  onClick={() => {
                    notify("درخواست دوره آزمایشی در نسخه نمایشی ثبت شد")
                    setModal(null)
                  }}
                >
                  ثبت درخواست دوره آزمایشی
                </button>
              </>
            )}
            {modal === "دیدگاه‌ها" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  notify("دیدگاه شما در نسخه نمایشی ثبت شد")
                  setModal(null)
                }}
              >
                <p className="muted">
                  اولین کسی باشید که به این اثر بازخورد می‌دهد.
                </p>
                <label className="field-label">
                  دیدگاه شما
                  <textarea
                    required
                    rows={4}
                    placeholder="چه چیزی در این اثر به شما الهام می‌دهد؟"
                  />
                </label>
                <button className="button primary full-width">
                  ثبت دیدگاه
                </button>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
function BusinessPanel({ onNotify }: { onNotify: (text: string) => void }) {
  const [materials, setMaterials] = useState(180000)
  const [hours, setHours] = useState(3)
  const [rate, setRate] = useState(100000)
  const [margin, setMargin] = useState(30)
  const cost = materials + hours * rate
  const price = Math.round(cost * (1 + margin / 100))
  const fields = [
    { label: "هزینه مواد (تومان)", value: materials, setter: setMaterials },
    { label: "زمان اجرا (ساعت)", value: hours, setter: setHours },
    { label: "دستمزد ساعتی (تومان)", value: rate, setter: setRate },
    { label: "درصد سود", value: margin, setter: setMargin },
  ]
  return (
    <section className="content-panel">
      <div className="section-heading">
        <h2>از هنر، تا کسب‌وکار</h2>
        <span className="tool-tag yellow">PRO MAX</span>
      </div>
      <p className="muted">قیمت‌گذاری شفاف برای دست‌ساخته‌های ارزشمند شما.</p>
      <div className="business-grid">
        <div>
          {fields.map(({ label, value, setter }) => (
            <label className="field-label" key={label}>
              {label}
              <input
                type="number"
                min="0"
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
              />
            </label>
          ))}
        </div>
        <div className="business-summary">
          <Icon name="briefcase" size={30} />
          <p>قیمت پیشنهادی فروش</p>
          <h2>
            {price.toLocaleString("fa")} <small>تومان</small>
          </h2>
          <div>
            <span>قیمت تمام‌شده</span>
            <b>{cost.toLocaleString("fa")} تومان</b>
          </div>
          <div>
            <span>سود شما</span>
            <b>{(price - cost).toLocaleString("fa")} تومان</b>
          </div>
          <button
            className="button primary full-width"
            onClick={() => onNotify("پیشنهاد قیمت در نسخه نمایشی ذخیره شد")}
          >
            ذخیره پیشنهاد قیمت
          </button>
        </div>
      </div>
    </section>
  )
}
