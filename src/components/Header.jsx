import Icon from '../assets/images/logo.svg'
import Sun from '../assets/images/icon-sun.svg'

export default function Header(props) {
    return (
        <header>
            <div className="icon">
                <img src={Icon} />
            </div>

            <button>
                <img src={Sun} />
            </button>
        </header>
    )
}