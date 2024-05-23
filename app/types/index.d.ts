import { PageProps } from "@/.next/types/app/[lang]/page";

export interface SlugProps {
    params?: { lang: string; slug: string };
};

export interface SlugWithFetchProps extends PageProps {
    translations?: never;
    fetchedNavs?: never;
    fetchedGeopoliticNavs?: never;
    isGeopoliticNav?: boolean;
    newClassName?: string;
    isMap?: boolean;
};