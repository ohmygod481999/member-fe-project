import Common from "./common"

const Configuration = {
    url_api: "https://api.foodtalk.vn",
    merchantCode: "testlabo",
    userCookie: 'tokenId',
    tokenLanguage: "cmsLanguage",
    url_graphQl: 'https://apicms.izzi.asia/graphql/', //'http://graphql.labo.io/graphql',
    languageVi: '838aef56-78bb-11e6-b5a6-00155d582814',
    languageEn: 'e3509252-c42d-4ae5-9779-d4805a687a8e',
    image_url: 'https://static.foodizzi.com',
    MAX_FILE_SIZE: 1048576,
    domain: '.labo.io',
    helpDeskMerchantId: "74d84561-4925-4b13-9e5c-0137bea8afcd",//helpdesk:74d84561-4925-4b13-9e5c-0137bea8afcd //form.labo.vn //74d84561-4925-4b13-9e5c-0137bea8afcd
    libraryMerchantId: "ebd5cacf-c5f5-4ad2-975d-7ed5a21f45de",//helpdesk:74d84561-4925-4b13-9e5c-0137bea8afcd //form.labo.vn //74d84561-4925-4b13-9e5c-0137bea8afcd
    defaultImg: "https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg",
    linkNav: {
        categories: function ({ id, name }) {
            return `/danh-sach-bai-viet/${id}/${Common.rewriteUrl(name)}`
        },
        articles: function ({ id, name }) {
            return `/bai-viet/${id}/${Common.rewriteUrl(name)}`
        },
        pages: function ({ id, name }) {
            return `/pages/${id}/${Common.rewriteUrl(name)}`
        },
    },
    merchantType: {
        normal: 1,
        full: 32,
        content: 1024,
    },

    editorConfiguration: {
        allowedContent: true
    },
    categoryTypes: {
        ADDRESS: 1,
        ARTICLE: 2,
        PRODUCT: 3,
        CUSTOMER: 4,
        RANK: 8,
        CART: 10,
        HOME_PAGE: 32,
        IMAGE: 64,
        TEMPLATE: 128,
        MENU: 256,
        ORDER: 1024,
        TAGS: 32768,
        THEME_WEB: 4096,
        THEME_WEB_SECTION: 16384,
    },
    sectionsType: {
        HEADER: Math.pow(2, 0),
        SIDE_BAR_LEFT: Math.pow(2, 2),
        SIDE_BAR_RIGHT: Math.pow(2, 4),
        FOOTER: Math.pow(2, 6),
        BODY_HOME: Math.pow(2, 8),
        BODY_ARTICLES: Math.pow(2, 10),
        BODY_ARTICLE: Math.pow(2, 12),
        BODY_PRODUCTS: Math.pow(2, 14),
        BODY_PRODUCT: Math.pow(2, 16),
        BODY_PAGE: Math.pow(2, 18),
    },
    userType: {
        DEFAULT: Math.pow(2, 0),
        // STAFF: Math.pow(2, 5),
        // AUTHOR: Math.pow(2, 6),
        EDITOR: Math.pow(2, 8),
        // MOD: Math.pow(2, 15),
        ADMIN: Math.pow(2, 20)
    },
    toast_information: {
        LOAD_DATA_SUCCESS: function (numRow, cate) {
            if (cate == undefined) cate = ""
            if (numRow == undefined) numRow = ""
            return `Tải thành công ${numRow} bản ghi ${cate} từ máy chủ`
        },
        SUCCESS: "Thành công",
        LOAD_DATA_ERROR: "Tải dữ liệu không thành công",
        ERROR: function (error) {
            return `Có lỗi xảy ra: ${error + ''}`
        },
        CHANGE_STATUS_SUCCESS: "Đổi trạng thái thành công",
    }
}


export default Configuration;