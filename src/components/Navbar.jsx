import { useState, useEffect } from 'react';
import './styles/navbar.css';

const navigation = [
    { name: 'Home', id: 'hero-section' },
    { name: 'Pricing', id: 'pricing-section' },
    { name: 'Contact', id: 'contact-section' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(navigation[0].id);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            let currentSection = navigation[0].id;
            let maxVisibleHeight = 0;

            navigation.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();
                    const visibleHeight = Math.min(window.innerHeight, bottom) - Math.max(0, top);

                    if (visibleHeight > maxVisibleHeight && visibleHeight > 100) {
                        maxVisibleHeight = visibleHeight;
                        currentSection = item.id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    return (
        <nav className="navbar">
            <h1>dip.</h1>
            <div className="links">
                {navigation.map((navItem) => (
                    <span 
                        key={navItem.id}
                        onClick={() => handleScroll(navItem.id)}
                        className={navItem.id === activeSection ? 'active' : ''}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>
            <button></button>
        </nav>
    );
};

export default Navbar;
