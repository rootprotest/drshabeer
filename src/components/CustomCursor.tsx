'use client';

import { useEffect } from 'react';

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const cursorInner = document.querySelector('.cursor-inner') as HTMLElement | null;
        const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement | null;

        let mouseX = 0;
        let mouseY = 0;
        let isHovering = false;

        const moveCursor = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (cursorInner) {
                cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
            if (cursorOuter && !isHovering) {
                cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
        };

        const addHover = () => {
            cursorInner?.classList.add('cursor-hover');
            cursorOuter?.classList.add('cursor-hover');
            isHovering = true;
        };

        const removeHover = () => {
            cursorInner?.classList.remove('cursor-hover');
            cursorOuter?.classList.remove('cursor-hover');
            isHovering = false;
        };

        if (cursorInner && cursorOuter) {
            window.addEventListener('mousemove', moveCursor);

            const hoverTargets = document.querySelectorAll('a, .cursor-pointer');
            hoverTargets.forEach((el) => {
                el.addEventListener('mouseenter', addHover);
                el.addEventListener('mouseleave', removeHover);
            });

            cursorInner.style.visibility = 'visible';
            cursorOuter.style.visibility = 'visible';

            // Cleanup
            return () => {
                window.removeEventListener('mousemove', moveCursor);
                hoverTargets.forEach((el) => {
                    el.removeEventListener('mouseenter', addHover);
                    el.removeEventListener('mouseleave', removeHover);
                });
            };
        }
    }, []);

    return (
        <>
            <div className="cursor-inner" />
            <div className="cursor-outer" />

            <style jsx>{`
                .cursor-inner,
                .cursor-outer {
                pointer-events: none;
                position: fixed;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                transition: all 0.15s ease;
                visibility: hidden;
                }

                .cursor-inner {
                width: 8px;
                height: 8px;
                background-color: #000;
                }

                .cursor-outer {
                width: 30px;
                height: 30px;
                border: 2px solid #000;
                }

                .cursor-hover.cursor-inner {
                background-color: red;
                }

                .cursor-hover.cursor-outer {
                border-color: red;
                transform: scale(1.5);
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
