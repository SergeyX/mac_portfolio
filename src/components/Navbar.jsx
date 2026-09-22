import dayjs from 'dayjs';

import { navIcons, navLinks } from "#constants/constants.js";
import useWindowStore from "#store/window.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    return (
        <nav>
            <div>
                <img src="/mac_portfolio/images/logo.svg" alt="logo" />
                <p className="font-bold">Sergey's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={`/mac_portfolio/${img}`} className="icon-hover" alt={`icon-${img}`} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    );
};

export default Navbar;