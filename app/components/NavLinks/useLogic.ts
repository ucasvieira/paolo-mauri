export const useLogic = ({fetchedNavs}: any) => {
    const navArray: any[] = []
    fetchedNavs?.forEach((fNav: {title: string, href: string, position: number}) => {
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
    })

    return {
        navArray
    }
}