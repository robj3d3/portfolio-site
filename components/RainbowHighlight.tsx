import React from "react";
import { RoughNotation } from "react-rough-notation";

type RainbowHighlightProps = {
    children: React.ReactNode;
    color: string;
}

export const RainbowHighlight = ({ children, color }: RainbowHighlightProps) => {
    const animationDuration = Math.floor(30 * (children as React.ReactNode[]).length); // TODO test variations

    return (
        <RoughNotation
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iterations={1}
            animationDuration={animationDuration}
            color={color}
        >
            { children }
        </RoughNotation>
    );
}