import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {
        if (screenSize >= 700) {
            setIsOpen(true)
        } else {
            setIsOpen(false);
        }
    }, [screenSize])

    const toggleMenu = () => {
        if (screenSize < 700) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <>

            {
                screenSize < 700 &&

                <div
                    id="nav-toggle"
                    className="menu-icons"
                    onClick={toggleMenu}
                    style={{
                        top: isOpen && "0",
                        left: isOpen && "0"
                    }}
                >

                    <AnimatePresence initial={false} mode="popLayout">

                        {

                            !isOpen ?

                                <motion.div
                                    key="bars-menu-icon"
                                    className="bars-icon"
                                    initial={{ opacity: 0, scale: .7 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            delay: .3
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: .7
                                    }}
                                >
                                    <FaBars />
                                </motion.div>
                                :
                                <motion.div
                                    key="close-menu-icon"
                                    className="close-icon"
                                    initial={{ opacity: 0, scale: .7 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            delay: .3
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: .7
                                    }}
                                >
                                    <IoMdClose />
                                </motion.div>
                        }
                    </AnimatePresence>

                </div>

            }

            <motion.div className='navbar'
                layout
                transition={{ layout: { duration: .4 } }}
                style={{
                    width: isOpen && "100%"
                }}
            >

                <div className='logo'>
                    <p>soyjackcoin</p>
                </div>

                <div className='menu'>
                    <ul>
                        <li>Community</li>
                        <li>How to buy ?</li>
                        <li>Tokenomics</li>
                        <li>Airdrop</li>
                    </ul>
                </div>

                <div className='buttons'>
                    <button>Buy now</button>
                    <button>Connect wallet </button>
                </div>
            </motion.div>

        </>
    )
}