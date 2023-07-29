import React, { FC } from 'react';

import {
    Film,
    Starship,
    Vehicle,
    Homeworld,
    Species,
    isFilm,
} from '@/interfaces';

type ChildArray = Film[] | Starship[] | Vehicle[] | Species[] | Homeworld;

type ContentBlockBase = {
    title: string;
};

type ContentBlockPropsWithChildren = ContentBlockBase & {
    children: React.ReactElement | string | undefined;
};

const hasChildren = (
    props: ContentBlockProps,
): props is ContentBlockPropsWithChildren => {
    return (props as ContentBlockPropsWithChildren).children !== undefined;
};

type ContentBlockPropsWithContent = ContentBlockBase & {
    content: ChildArray;
};

const hasContent = (
    props: ContentBlockProps,
): props is ContentBlockPropsWithContent => {
    return (props as ContentBlockPropsWithContent).content !== undefined;
};

type ContentBlockProps =
    | ContentBlockPropsWithChildren
    | ContentBlockPropsWithContent;

const ContentBlock: FC<ContentBlockProps> = props => {
    return (
        <div className="border-2 p-4 border-black dark:border-white rounded-lg">
            <h4>{props.title}</h4>
            {hasChildren(props) && props.children}
            {hasContent(props) &&
                (Array.isArray(props.content)
                    ? props.content
                    : [props.content]
                ).map((item, index) => (
                    <div key={index}>
                        {isFilm(item) ? item.title : item.name}
                    </div>
                ))}
        </div>
    );
};

export default ContentBlock;
