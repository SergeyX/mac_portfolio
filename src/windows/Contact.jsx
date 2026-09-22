import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants/constants.js";
import { WindowControls } from "#components";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="/images/photo.png" alt="Sergey" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>serhento@gmail.com</p>
                <a
                    className="text-blue-600 underline underline-offset-4"
                    href="https://sergeyX.github.io/mac_portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="My Portfolio"
                >
                    My Portfolio Link
                </a>

                <ul className="mt-5">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={`/mac_portfolio/${icon}`} alt="text" className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;