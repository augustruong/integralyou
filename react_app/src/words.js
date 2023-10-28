const words = {
    routes: {
        user: {
            top: "/",
            profile: "/profile",
            message: "/message",
            program: "/program",
            interview: "/interview",
            blog: "/blog",
            faq: "/faq",
            news: "/news",
            contact: "/contact"
        },
        admin: {
            login: "/admin/login",
            home: "/admin/home",
            blogmanage: "/admin/blogManage",
            lettersmanage: "/admin/lettersManage",
            subscribersmanage: "/admin/subscribersManage",
            createpost: "/admin/createpost",
            editpost: "/admin/blogmanage/post/:id/edit",
        }
    },

    api: {
        admin: {
            login: `${process.env.REACT_APP_API_END_POINT}/admin/login`,
            file: {
                get: (path) => `${process.env.REACT_APP_API_END_POINT}/file-get/${path}`,
                post: `${process.env.REACT_APP_API_END_POINT}/file-upload`,
                remove: (path) => `${process.env.REACT_APP_API_END_POINT}/file-remove/${path}`,
            },
            post: {
                add: `${process.env.REACT_APP_API_END_POINT}/postadd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listposts`,
                delete: (id) => `${process.env.REACT_APP_API_END_POINT}/postdelete/${id}`,
                detail: (id) => `${process.env.REACT_APP_API_END_POINT}/postdetails/${id}`,
                update: (id) => `${process.env.REACT_APP_API_END_POINT}/postupdate/${id}`,
            },
            subscriber: {
                add: `${process.env.REACT_APP_API_END_POINT}/subscriberadd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listsubscribers`,
            },
            letter: {
                add: `${process.env.REACT_APP_API_END_POINT}/letteradd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listletters`,
            }
        }
    },

    post: {
        form: {
            errorOccurred: "An error occurred: ",
            back: "＜ Back to List",
            create: {
                title: "Create New Post",
            },
            edit: {
                title: "Edit Post",
            },
            category: "Category",
            title: "Title",
            info: "Info",
            uploadCover: "Upload cover picture",
            description: "Description",
            save: "Save"
        },
    }
}

export default words