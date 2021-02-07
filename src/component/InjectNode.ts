import React from 'react';
import {useEffect} from 'react';

interface Attributes {
    [key: string]: string
}

type InjectNodeProps = {
    tag: string;
    attributes: Attributes;
};

const InjectNode = (props: InjectNodeProps) => {
    const injectNode = () => {
        const parents = document.getElementsByTagName("head");
        if (parents.length > 0) {
            const node: HTMLElement = document.createElement(props.tag);
            for (const key in props.attributes) {
                node.setAttribute(key, props.attributes[key]);
            }
            parents[0].appendChild(node);
            return () => {
                parents[0].removeChild(node);
            };
        }
    };

    useEffect(injectNode);

    return null;
};

export default InjectNode;