import styles from '../styles/main.module.css'
import Button from "./Button";
import Card from "./Card";

// Importing logos
import Devlens from '../assets/images/logo-devlens.svg'
import StyleSpy from '../assets/images/logo-style-spy.svg'
import SpeedBoost from '../assets/images/logo-speed-boost.svg'
import JSONWizard from '../assets/images/logo-json-wizard.svg'
import TabMasterPro from '../assets/images/logo-tab-master-pro.svg'
import ViewPortBuddy from '../assets/images/logo-viewport-buddy.svg'
import MarkupNotes from '../assets/images/logo-markup-notes.svg'
import GridGuides from '../assets/images/logo-grid-guides.svg'
import PalettePicker from '../assets/images/logo-palette-picker.svg'
import LinkChecker from '../assets/images/logo-link-checker.svg'
import DOMSnapshot from '../assets/images/logo-dom-snapshot.svg'
import ConsolePlus from '../assets/images/logo-console-plus.svg'
import { useState } from 'react';



let rawData = [
  {
    "logo": Devlens,
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": true
  },
  {
    "logo": StyleSpy,
    "name": "StyleSpy",
    "description": "Instantly analyze and copy CSS from any webpage element.",
    "isActive": true
  },
  {
    "logo": SpeedBoost,
    "name": "SpeedBoost",
    "description": "Optimizes browser resource usage to accelerate page loading.",
    "isActive": false
  },
  {
    "logo": JSONWizard,
    "name": "JSONWizard",
    "description": "Formats, validates, and prettifies JSON responses in-browser.",
    "isActive": true
  },
  {
    "logo": TabMasterPro,
    "name": "TabMaster Pro",
    "description": "Organizes browser tabs into groups and sessions.",
    "isActive": true
  },
  {
    "logo": ViewPortBuddy,
    "name": "ViewportBuddy",
    "description": "Simulates various screen resolutions directly within the browser.",
    "isActive": false
  },
  {
    "logo": MarkupNotes,
    "name": "Markup Notes",
    "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
    "isActive": true
  },
  {
    "logo": GridGuides,
    "name": "GridGuides",
    "description": "Overlay customizable grids and alignment guides on any webpage.",
    "isActive": false
  },
  {
    "logo": PalettePicker,
    "name": "Palette Picker",
    "description": "Instantly extracts color palettes from any webpage.",
    "isActive": true
  },
  {
    "logo": LinkChecker,
    "name": "LinkChecker",
    "description": "Scans and highlights broken links on any page.",
    "isActive": true
  },
  {
    "logo": DOMSnapshot,
    "name": "DOM Snapshot",
    "description": "Capture and export DOM structures quickly.",
    "isActive": false
  },
  {
    "logo": ConsolePlus,
    "name": "ConsolePlus",
    "description": "Enhanced developer console with advanced filtering and logging.",
    "isActive": true
  }
]


export default function Main(props) {

  const [extArr, setExtArr] = useState(rawData)
  const [isSelected, setIsSelected] = useState('All')

  const handleToggle = (name) => {
    setExtArr((prevArr) => {
      return prevArr.map(item => {
        if (item.name === name) {
          return { ...item, isActive: !item.isActive }
        } else {
          return item
        }
      })
    })
  }

  const removeExt =(name) => {
    setExtArr(prev=>{
      return prev.filter((x)=>{
        return x.name !== name
      })
    })
  }

  let extensions = extArr.filter((ext)=>{
    if (isSelected === "All") {
      return true
    } else if (isSelected === "Active") {
      return ext.isActive === true
    } else if (isSelected === "Inactive") {
      return ext.isActive === false
    }
  })

  let cards = extensions.map((card) => {
    return <Card
      key={card.name}
      name={card.name}
      logo={card.logo}
      desc={card.description}
      isActive={card.isActive}
      handleClick={handleToggle}
      handleRemove={removeExt}
    />
  })


  return (
    <main>
      <div className={styles.top}>
        <h1>Extensions List</h1>
        <div className={styles.btns}>
          <Button text="All" isActive={isSelected === "All"} handleClick={()=>setIsSelected('All')} />
          <Button text='Active' isActive={isSelected==="Active"} handleClick={()=>setIsSelected('Active')}  />
          <Button text="Inactive" isActive={isSelected==="Inactive"} handleClick={()=>setIsSelected('Inactive')}  />
        </div>
      </div>
      <div className={styles.cards}>
        {cards}
      </div>
    </main>
  )
}