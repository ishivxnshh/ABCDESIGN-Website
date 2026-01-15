import { useRef, useState } from "react";

interface MagneticProps {
    children: React.ReactElement;
    strength?: number; // How strong the magnetic pull is (higher = stronger)
    active?: boolean;
}

export default function Magnetic({ children, strength = 0.5, active = true }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !active) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "transform 0.1s ease-out",
                display: "inline-block" // Ensure it wraps content properly
            }}
        >
            {children}
        </div>
    );
}
