import React from "react";

export function link(name: string, link: string) {
    return (
        <a
            className="App-link"
            href={`https://${link}`}
            target="_blank"
        >
            {name}
        </a>
    )
}