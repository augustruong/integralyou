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
            contact: "/contact",
            blogdetail: "/:category/:id",
            interviewdetail: "/interview/:categoryId/:id",
            terms: "/terms-of-use",
            policy: "/privacy-policy",
            grayzone: "/grayzone"
        },
        admin: {
            login: "/admin/login",
            home: "/admin/home",
            blogmanage: "/admin/blogManage",
            lettersmanage: "/admin/lettersManage",
            subscribersmanage: "/admin/subscribersManage",
            createpost: "/admin/createpost/:category",
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
                edit: (id) => `${process.env.REACT_APP_API_END_POINT}/post/${id}/edit`,

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
                title: "Create New",
            },
            edit: {
                title: "Edit",
            },
            category: "Category",
            title: "Title",
            info: "Info",
            uploadCover: "Upload cover picture",
            description: "Description",
            content: "Content",
            save: "Save"
        },
        category: {
            blog: "Blog",
            interview: "Interview",
            news: "News"
        }
    },

    validation: {
        mandatoryError: "必須項目です。",
        numberError: "数字のみを入力してください。"
    },

    device: {
        mb1: "768",
        mb2: "1080",
        mb3: "1200",
    },

    terms: {
        toppage: {
            title: "Integral You"
        },
        profile: {
            titleJP: "プローフィル",
            titleEN: "Profile",
            brief: "略歴",
            academicBG: "学歴",
            qualification: "資格等",
            section20s: "大学卒業・社会へ",
            section30s: "人生迷子時代・海外へ",
            section40s: "教育。コーチングの道へ"
        },
        message: {
            titleJP: "メッセージ",
            titleEN: "Message",
            topics: "クライアントの主なテーマ"
        },
        program: {
            titleJP: "プログラム",
            titleEN: "Program",
            coachingMission: "「人生のミッション探索コーチング」",
            goals: "integral youのサポートプログラムが目指すもの",
            steps: "4 STEPS",
            course: "コース",
            month6: "6ヵ月コース",
            month4: "4ヵ月コース",
            trial: "60分コーチングセッション",
            progress: "セッションの進め方",
            schedule: "セッションスケジュール（例）"
        },
        interview: {
            titleJP: "クライエントレビュー",
            titleEN: "Client Review"
        },
        blog: {
            titleJP: "ブログ",
            titleEN: "Blog"
        },
        faq: {
            titleJP: "よくある質問",
            titleEN: "Frequently Asked Questions"
        },
        contact: {
            titleJP: "お問い合わせ",
            titleEN: "Contact"
        },
        news: {
            titleJP: "お知らせ",
            titleEN: "News"
        },
        termsofuse: {
            titleJP: "利用規約",
            titleEN: "Terms Of Use"
        },
        privacypolicy: {
            titleJP: "プライバシーポリシー",
            titleEN: "Privacy Policy"
        },
        grayzone: {
            titleJP: "発達障害グレーゾーン",
            titleEN: "Gray Zone",
            developdisable: "発達障害",
            grayzone: "グレーゾーン"
        }
    }

}

export default words