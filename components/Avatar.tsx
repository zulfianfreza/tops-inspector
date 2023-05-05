"use client";
import React from "react";

interface AvatarProps {
    image: string;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
    return <img src={image} alt="" />;
};

export default Avatar;
