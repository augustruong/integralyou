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
        },
        admin: {
            login: "/admin/login",
            home: "/admin/home",
            blogmanage: "/admin/blogmanage",
            createpost: "/admin/createpost",
            editpost: "/admin/blogmanage/post/:id/edit",
        }
    },

    api: {
        admin: {
            login: `${process.env.REACT_APP_API_END_POINT}/admin/login`,
            file: {
                get: (path) => `${process.env.REACT_APP_API_END_POINT}/file-get/${path}`,
                post: `${process.env.REACT_APP_API_END_POINT}/file-upload`
            },
            post: {
                add: `${process.env.REACT_APP_API_END_POINT}/postadd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listposts`,
                delete: (id) => `${process.env.REACT_APP_API_END_POINT}/postdelete/${id}`,
                detail: (id) => `${process.env.REACT_APP_API_END_POINT}/postdetails/${id}`,
                update: (id) => `${process.env.REACT_APP_API_END_POINT}/postupdate/${id}`,
            },
            user: {
                add: `${process.env.REACT_APP_API_END_POINT}/useradd`,
            },
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
            title: "Title",
            uploadCover: "Upload cover picture",
            description: "Description",
            save: "Save",
        },
    }
}

export default words