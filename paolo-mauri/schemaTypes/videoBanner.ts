export default {
    name: 'videoBanner',
    title: 'VideoBanner',
    type: 'document',
    fields: [
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            of: [{ type: 'file' }],
            options: {
                hotspot: true,
            }
        },
    ]
}