export const useLogic = ({fetchedNavs, fetchedGeopoliticNavs, isGeopoliticNav}: any) => {
    const navArray: any[] = [];

    //Alterar sempre que mudar as navs
    (isGeopoliticNav ? fetchedGeopoliticNavs : fetchedNavs)?.forEach((fNav: {title: string, href: string, position: number}) => {
        if(!isGeopoliticNav) {
            if(fNav.title.toLowerCase().includes('home')){
                return navArray.push({title: fNav.title, href: 'home', position: 1})
            } else if (fNav.title.toLowerCase().includes('bio')){
                return navArray.push({title: fNav.title, href: 'bio', position: 2})
            } else if (fNav.title.toLowerCase().includes('arti')){
                return navArray.push({title: fNav.title, href: 'article', position: 3})
            } else if (fNav.title.toLowerCase().includes('blog')){
                return navArray.push({title: fNav.title, href: 'blog', position: 4})
            } else if (fNav.title.toLowerCase().includes('gal')){
                return navArray.push({title: fNav.title, href: 'gallery', position: 5})
            } else if (fNav.title.toLowerCase().includes('podcasts')){
                return navArray.push({title: fNav.title, href: 'podcasts', position: 6})
            }
        } else {
            if(fNav.title.toLowerCase().includes('geopolitic')){
                return navArray.push({title: fNav.title, href: 'article/geopolitic', position: 1})
            } else if (fNav.title.toLowerCase().includes('fesa')){
                return navArray.push({title: fNav.title, href: 'article/defend', position: 2})
            } else if (fNav.title.toLowerCase().includes('tegia')){
                return navArray.push({title: fNav.title, href: 'article/strategy', position: 3})
            } 
        }});

    return {
        navArray
    }
}